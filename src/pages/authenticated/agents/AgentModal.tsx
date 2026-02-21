import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import {
  useCreateAgentMutation,
  useGetAgentQuery,
  useUpdateAgentMutation,
} from "@/features/agent/agentsApi";
import { useGetLocationsQuery } from "@/features/location/locationsApi";
import { useGetTeamsQuery } from "@/features/team/teamsApi";
import { useGetWorkplacesQuery } from "@/features/workplace/workplacesApi";
import type { Agent, AgentWorkSchedule, CreateAgentPayload, UpdateAgentPayload } from "@/types/Agent";
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

const phoneTypeOptions = [1, 2, 3];
const weekdays = [0, 1, 2, 3, 4, 5, 6];

const emptySchedule: AgentWorkSchedule[] = weekdays.map((dayOfWeek) => ({
  dayOfWeek,
  startTime: "",
  endTime: "",
}));

const defaultValues: CreateAgentPayload = {
  operatorName: "",
  username: "",
  password: "",
  email: "",
  signature: "",
  timeZone: "",
  locationId: null,
  locationName: "",
  interfaceLanguage: "",
  salesCode: "",
  autoDialerDelaySeconds: null,
  maxCallsPerAgent: null,
  phoneType: 1,
  isActive: true,
  teamId: null,
  scriptId: null,
  workplaceId: null,
  workSchedule: emptySchedule,
};

function normalizeTimeValue(value: string) {
  if (!value) return value;
  return /^\d{2}:\d{2}$/.test(value) ? `${value}:00` : value;
}

function mergeScheduleWithDefaults(schedule?: AgentWorkSchedule[] | null) {
  const source = schedule ?? [];
  return weekdays.map((dayOfWeek) => {
    const existing = source.find((item) => Number(item.dayOfWeek) === dayOfWeek);
    return {
      dayOfWeek,
      startTime: existing?.startTime?.slice(0, 5) ?? "",
      endTime: existing?.endTime?.slice(0, 5) ?? "",
    };
  });
}

export default function AgentModal({
  close,
  mode = "create",
  agentId,
  agent,
  isOpen = false,
}: AgentModalProps) {
  const { t } = useTranslation();
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

  const mergedInitialValues: CreateAgentPayload = {
    ...defaultValues,
    ...(mode === "edit" && agentDetails
      ? {
          ...agentDetails,
          password: "",
          workSchedule: mergeScheduleWithDefaults(agentDetails.workSchedule),
        }
      : mode === "edit" && agent
        ? {
            ...agent,
            password: "",
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
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const workSchedule = (values.workSchedule ?? [])
            .map((item) => ({
              dayOfWeek: Number(item.dayOfWeek),
              startTime: normalizeTimeValue(item.startTime),
              endTime: normalizeTimeValue(item.endTime),
            }))
            .filter((item) => item.startTime && item.endTime);

          if (mode === "create") {
            const payload: CreateAgentPayload = {
              ...values,
              locationId: values.locationId ? Number(values.locationId) : null,
              teamId: values.teamId ? Number(values.teamId) : null,
              workplaceId: values.workplaceId ? Number(values.workplaceId) : null,
              scriptId: values.scriptId ? Number(values.scriptId) : null,
              autoDialerDelaySeconds: values.autoDialerDelaySeconds
                ? Number(values.autoDialerDelaySeconds)
                : null,
              maxCallsPerAgent: values.maxCallsPerAgent ? Number(values.maxCallsPerAgent) : null,
              phoneType: Number(values.phoneType),
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
            ...values,
            locationId: values.locationId ? Number(values.locationId) : null,
            teamId: values.teamId ? Number(values.teamId) : null,
            workplaceId: values.workplaceId ? Number(values.workplaceId) : null,
            scriptId: values.scriptId ? Number(values.scriptId) : null,
            autoDialerDelaySeconds: values.autoDialerDelaySeconds
              ? Number(values.autoDialerDelaySeconds)
              : null,
            maxCallsPerAgent: values.maxCallsPerAgent ? Number(values.maxCallsPerAgent) : null,
            phoneType: Number(values.phoneType),
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
      {({ values, isSubmitting, setFieldValue }) => (
        <Form>
          <DialogTitle>
            {mode === "create" ? t("agents.modal.addTitle") : t("agents.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input name="operatorName" label={t("agents.modal.fields.operatorName")} required />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input name="username" label={t("agents.modal.fields.username")} required />
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
                <Input name="email" label={t("agents.modal.fields.email")} type="email" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input name="signature" label={t("agents.modal.fields.signature")} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input name="timeZone" label={t("agents.modal.fields.timeZone")} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="locationId"
                  label={t("agents.modal.fields.location")}
                  optionsSource={locationsOptionsSource}
                  mapOption={(location) => ({ label: location.name, value: location.id })}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="interfaceLanguage"
                  label={t("agents.modal.fields.interfaceLanguage")}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input name="salesCode" label={t("agents.modal.fields.salesCode")} />
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
                  options={phoneTypeOptions.map((value) => ({ value, label: String(value) }))}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="teamId"
                  label={t("agents.modal.fields.team")}
                  optionsSource={teamsOptionsSource}
                  mapOption={(team) => ({ label: team.name, value: team.id ?? 0 })}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input name="scriptId" label={t("agents.modal.fields.scriptId")} type="number" />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="workplaceId"
                  label={t("agents.modal.fields.workplace")}
                  optionsSource={workplacesOptionsSource}
                  mapOption={(workplace) => ({
                    label: workplace.name,
                    value: workplace.id ?? 0,
                  })}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.isActive}
                      onChange={(_, checked) => setFieldValue("isActive", checked)}
                    />
                  }
                  label={t("agents.modal.fields.isActive")}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Divider sx={{ mb: 1 }} />
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  {t("agents.modal.fields.workSchedule")}
                </Typography>
                <Grid container spacing={1}>
                  {weekdays.map((day, index) => (
                    <Grid key={day} size={{ xs: 12 }}>
                      <Grid container spacing={1}>
                        <Grid size={{ xs: 12, md: 4 }}>
                          <Select
                            name={`workSchedule.${index}.dayOfWeek`}
                            label={t("agents.modal.fields.dayOfWeek")}
                            options={weekdays.map((value) => ({
                              value,
                              label: t(`weekdays.${value}`),
                            }))}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                          <Input
                            name={`workSchedule.${index}.startTime`}
                            label={t("agents.modal.fields.startTime")}
                            type="time"
                            slotProps={{ inputLabel: { shrink: true } }}
                          />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                          <Input
                            name={`workSchedule.${index}.endTime`}
                            label={t("agents.modal.fields.endTime")}
                            type="time"
                            slotProps={{ inputLabel: { shrink: true } }}
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
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
