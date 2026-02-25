import {
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  ListItemText,
  MenuItem,
  TextField,
  Switch,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import {
  useCreateAgentMutation,
  useGetAgentQuery,
  useUpdateAgentMutation,
} from "@/features/agent/agentsApi";
import { useGetLocationsQuery } from "@/features/location/locationsApi";
import { useGetTeamsQuery } from "@/features/team/teamsApi";
import { useGetWorkplacesQuery } from "@/features/workplace/workplacesApi";
import { AGENT_PHONE_TYPES, DAY_OF_WEEK_VALUES } from "@/types/Agent";
import type {
  Agent,
  AgentPhoneType,
  AgentWorkSchedule,
  CreateAgentPayload,
  DayOfWeek,
  UpdateAgentPayload,
} from "@/types/Agent";
import Input from "@/components/form/Input/Input";
import Select from "@/components/form/Select/Select";
import Loader from "@/components/common/Loader/Loader";
import { useTranslation } from "react-i18next";

type AgentModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  agentId?: number;
  agent?: Agent;
  isOpen?: boolean;
};

type AgentFormValues = Omit<CreateAgentPayload, "workSchedule"> & {
  selectedDays: DayOfWeek[];
  workSchedule: AgentWorkSchedule[];
};

const weekdays: readonly DayOfWeek[] = DAY_OF_WEEK_VALUES;

const emptySchedule: AgentWorkSchedule[] = weekdays.map((dayOfWeek) => ({
  dayOfWeek,
  startTime: "",
  endTime: "",
}));

const defaultValues: AgentFormValues = {
  operatorName: "",
  username: "",
  password: "",
  email: "",
  signature: "",
  timeZone: "",
  locationId: null,
  interfaceLanguage: "",
  salesCode: "",
  autoDialerDelaySeconds: null,
  maxCallsPerAgent: null,
  phoneType: "WebRTC",
  isActive: true,
  teamId: null,
  workplaceId: null,
  selectedDays: [],
  workSchedule: emptySchedule,
};

function normalizeTimeValue(value: string) {
  if (!value) return value;
  return /^\d{2}:\d{2}$/.test(value) ? `${value}:00` : value;
}

function mergeScheduleWithDefaults(schedule?: AgentWorkSchedule[] | null) {
  const source = schedule ?? [];
  return weekdays.map((dayOfWeek) => {
    const existing = source.find((item) => item.dayOfWeek === dayOfWeek);
    return {
      dayOfWeek,
      startTime: existing?.startTime?.slice(0, 5) ?? "",
      endTime: existing?.endTime?.slice(0, 5) ?? "",
    };
  });
}

function getSelectedDays(schedule?: AgentWorkSchedule[] | null): DayOfWeek[] {
  return (schedule ?? [])
    .map((item) => item.dayOfWeek)
    .filter((value): value is DayOfWeek => DAY_OF_WEEK_VALUES.includes(value));
}

function toMinutes(value: string) {
  const [hours, minutes] = value.split(":").map(Number);
  return hours * 60 + minutes;
}

function isValidTimeZone(value: string) {
  try {
    Intl.DateTimeFormat(undefined, { timeZone: value });
    return true;
  } catch {
    return false;
  }
}

export default function AgentModal({
  close,
  mode = "create",
  agentId,
  agent,
  isOpen = false,
}: AgentModalProps) {
  const { t } = useTranslation();
  const phoneTypeOptions = AGENT_PHONE_TYPES.map((value) => ({
    value,
    label: t(`phoneTypes.${value}`),
  }));
  const [createAgent, { isLoading: isCreating }] = useCreateAgentMutation();
  const [updateAgent, { isLoading: isUpdating }] = useUpdateAgentMutation();
  const locationsOptionsSource = useGetLocationsQuery();
  const teamsOptionsSource = useGetTeamsQuery();
  const workplacesOptionsSource = useGetWorkplacesQuery();
  const { data: agentDetails, isLoading: isLoadingDetails } = useGetAgentQuery(
    agentId as number,
    {
      skip: mode !== "edit" || !agentId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );
  const isLoading = isCreating || isUpdating || isLoadingDetails;
  const validationSchema = Yup.object({
    operatorName: Yup.string().required(t("common.validation.required")),
    username: Yup.string().required(t("common.validation.required")),
    email: Yup.string()
      .email(t("common.validation.invalidEmail"))
      .nullable(),
    timeZone: Yup.string()
      .nullable()
      .test(
        "valid-timezone",
        t("agents.modal.validation.invalidTimeZone"),
        (value) => !value || isValidTimeZone(value),
      ),
    password:
      mode === "create"
        ? Yup.string().required(t("common.validation.required"))
        : Yup.string().nullable(),
    phoneType: Yup.string().required(t("common.validation.required")),
    selectedDays: Yup.array()
      .of(Yup.string().oneOf([...DAY_OF_WEEK_VALUES]))
      .min(1, t("agents.modal.validation.selectAtLeastOneDay")),
  }).test("work-schedule-validation", "", function (values) {
    const formValues = values as AgentFormValues | undefined;
    if (!formValues) {
      return true;
    }

    for (const day of formValues.selectedDays ?? []) {
      const index = formValues.workSchedule.findIndex((item) => item.dayOfWeek === day);
      if (index < 0) {
        continue;
      }

      const item = formValues.workSchedule[index];
      if (!item.startTime) {
        return this.createError({
          path: `workSchedule[${index}].startTime`,
          message: t("agents.modal.validation.startTimeRequired"),
        });
      }

      if (!item.endTime) {
        return this.createError({
          path: `workSchedule[${index}].endTime`,
          message: t("agents.modal.validation.endTimeRequired"),
        });
      }

      if (toMinutes(item.startTime) >= toMinutes(item.endTime)) {
        return this.createError({
          path: `workSchedule[${index}].endTime`,
          message: t("agents.modal.validation.startBeforeEnd"),
        });
      }
    }

    return true;
  });

  const mergedInitialValues: AgentFormValues = {
    ...defaultValues,
    ...(mode === "edit" && agentDetails
      ? {
          ...agentDetails,
          password: "",
        selectedDays: getSelectedDays(agentDetails.workSchedule),
          workSchedule: mergeScheduleWithDefaults(agentDetails.workSchedule),
        }
      : mode === "edit" && agent
        ? {
            ...agent,
            password: "",
          selectedDays: getSelectedDays(agent.workSchedule),
            workSchedule: mergeScheduleWithDefaults(agent.workSchedule),
          }
        : {}),
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("agents.modal.editTitle")}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "grid", placeItems: "center", minHeight: 220 }}>
            <Loader />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>{t("common.cancel")}</Button>
        </DialogActions>
      </>
    );
  }

  return (
    <Formik
      initialValues={mergedInitialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const restValues = (({
            selectedDays: _selectedDays,
            ...rest
          }: AgentFormValues) => rest)(values);
          const workSchedule = (values.selectedDays ?? []).map((day) => {
            const item = values.workSchedule.find((scheduleItem) => scheduleItem.dayOfWeek === day);
            return {
              dayOfWeek: day,
              startTime: normalizeTimeValue(item?.startTime ?? ""),
              endTime: normalizeTimeValue(item?.endTime ?? ""),
            };
          });

          if (mode === "create") {
            const payload: CreateAgentPayload = {
              ...restValues,
              locationId: restValues.locationId ? Number(restValues.locationId) : null,
              teamId: restValues.teamId ? Number(restValues.teamId) : null,
              workplaceId: restValues.workplaceId
                ? Number(restValues.workplaceId)
                : null,
              autoDialerDelaySeconds: restValues.autoDialerDelaySeconds
                ? Number(restValues.autoDialerDelaySeconds)
                : null,
              maxCallsPerAgent: restValues.maxCallsPerAgent
                ? Number(restValues.maxCallsPerAgent)
                : null,
              phoneType: restValues.phoneType as AgentPhoneType,
              workSchedule,
            };
            await createAgent(payload).unwrap();
            toast.success(t("agents.modal.createdSuccess"));
            close();
            return;
          }

          if (!agentId) return;

          const payload: UpdateAgentPayload = {
            id: agentId,
            ...restValues,
            locationName: agentDetails?.locationName ?? agent?.locationName ?? null,
            locationId: restValues.locationId ? Number(restValues.locationId) : null,
            teamId: restValues.teamId ? Number(restValues.teamId) : null,
            workplaceId: restValues.workplaceId ? Number(restValues.workplaceId) : null,
            autoDialerDelaySeconds: restValues.autoDialerDelaySeconds
              ? Number(restValues.autoDialerDelaySeconds)
              : null,
            maxCallsPerAgent: restValues.maxCallsPerAgent
              ? Number(restValues.maxCallsPerAgent)
              : null,
            phoneType: restValues.phoneType as AgentPhoneType,
            workSchedule,
          };
          await updateAgent(payload).unwrap();
          toast.success(t("agents.modal.updatedSuccess"));
          close();
        } finally {
          setSubmitting(false);
        }
      }}
      enableReinitialize
    >
      {({ values, isSubmitting, setFieldValue, errors, submitCount }) => (
        <Form noValidate>
          <DialogTitle>
            {mode === "create"
              ? t("agents.modal.addTitle")
              : t("agents.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="operatorName"
                  label={t("agents.modal.fields.operatorName")}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="username"
                  label={t("agents.modal.fields.username")}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="password"
                  label={t("agents.modal.fields.password")}
                  type="password"
                  required={mode === "create"}
                  showPasswordToggle
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="email"
                  label={t("agents.modal.fields.email")}
                  type="email"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="signature"
                  label={t("agents.modal.fields.signature")}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="timeZone"
                  label={t("agents.modal.fields.timeZone")}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="locationId"
                  label={t("agents.modal.fields.location")}
                  optionsSource={locationsOptionsSource}
                  mapOption={(location) => ({
                    label: location.name ?? "",
                    value: location.id ?? 0,
                  })}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="interfaceLanguage"
                  label={t("agents.modal.fields.interfaceLanguage")}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="salesCode"
                  label={t("agents.modal.fields.salesCode")}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="autoDialerDelaySeconds"
                  label={t("agents.modal.fields.autoDialerDelaySeconds")}
                  type="number"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="maxCallsPerAgent"
                  label={t("agents.modal.fields.maxCallsPerAgent")}
                  type="number"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="phoneType"
                  label={t("agents.modal.fields.phoneType")}
                  options={phoneTypeOptions}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="teamId"
                  label={t("agents.modal.fields.team")}
                  optionsSource={teamsOptionsSource}
                  mapOption={(team) => ({
                    label: team.name ?? "",
                    value: team.id ?? 0,
                  })}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="workplaceId"
                  label={t("agents.modal.fields.workplace")}
                  optionsSource={workplacesOptionsSource}
                  mapOption={(workplace) => ({
                    label: workplace.name ?? "",
                    value: workplace.id ?? 0,
                  })}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={Boolean(values.isActive)}
                      onChange={(_, checked) =>
                        setFieldValue("isActive", checked)
                      }
                    />
                  }
                  label={t("agents.modal.fields.isActive")}
                />
              </Grid>
              <Grid size={{ xs: 12 }} sx={{ mt: 1 }}>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                  {t("agents.modal.fields.workSchedule")}
                </Typography>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      select
                      fullWidth
                      size="small"
                      label={t("agents.modal.fields.dayOfWeek")}
                      value={values.selectedDays}
                      onChange={(event) => {
                        const nextValue = event.target.value;
                        const parsed = typeof nextValue === "string"
                          ? nextValue.split(",")
                          : nextValue;
                        setFieldValue("selectedDays", parsed as DayOfWeek[]);
                      }}
                      SelectProps={{
                        multiple: true,
                        renderValue: (selected) =>
                          (selected as DayOfWeek[])
                            .map((day) => t(`weekdays.${day}`))
                            .join(", "),
                      }}
                      error={submitCount > 0 && Boolean((errors as Record<string, unknown>).selectedDays)}
                      helperText={
                        submitCount > 0
                          ? ((errors as Record<string, unknown>).selectedDays as string | undefined)
                          : undefined
                      }
                    >
                      {DAY_OF_WEEK_VALUES.map((day) => (
                        <MenuItem key={day} value={day}>
                          <Checkbox checked={values.selectedDays.includes(day)} />
                          <ListItemText primary={t(`weekdays.${day}`)} />
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
                <Grid container spacing={1.5}>
                  {weekdays
                    .filter((day) => values.selectedDays.includes(day))
                    .map((day) => {
                      const index = values.workSchedule.findIndex((item) => item.dayOfWeek === day);
                      if (index < 0) {
                        return null;
                      }

                      return (
                        <Grid key={day} size={{ xs: 12 }} sx={{ mb: 1.5 }}>
                          <Typography variant="body2" sx={{ mb: 1 }}>
                            {t(`weekdays.${day}`)}
                          </Typography>
                      <Grid container spacing={1}>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Input
                            name={`workSchedule.${index}.startTime`}
                            label={t("agents.modal.fields.startTime")}
                            type="time"
                            slotProps={{ inputLabel: { shrink: true } }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                          <Input
                            name={`workSchedule.${index}.endTime`}
                            label={t("agents.modal.fields.endTime")}
                            type="time"
                            slotProps={{ inputLabel: { shrink: true } }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                      );
                    })}
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={close} disabled={isLoading || isSubmitting}>
              {t("common.cancel")}
            </Button>
            <Button
              type="submit"
              variant="contained"
              loading={isLoading || isSubmitting}
              disabled={isLoading || isSubmitting}
            >
              {mode === "create" ? t("common.create") : t("common.save")}
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
}
