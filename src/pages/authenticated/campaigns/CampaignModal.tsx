import {
  Box,
  Button,
  Checkbox,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  ListItemText,
  MenuItem,
  Switch,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import {
  useCreateCampaignMutation,
  useGetCampaignQuery,
  useUpdateCampaignMutation,
} from "@/features/campaign/campaignsApi";
import { useGetClientsQuery } from "@/features/client/clientsApi";
import { useGetScriptsQuery } from "@/features/script/scriptsApi";
import { useGetTeamsQuery } from "@/features/team/teamsApi";
import {
  CAMPAIGN_TYPES,
  type Campaign,
  type CampaignTeam,
  type CampaignUpsertPayload,
} from "@/types/Campaign";
import Input from "@/components/form/Input/Input";
import Select from "@/components/form/Select/Select";
import Loader from "@/components/common/Loader/Loader";
import { useTranslation } from "react-i18next";

type CampaignModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  campaignId?: number;
  campaign?: Campaign;
  isOpen?: boolean;
};

const campaignTypeOptions = CAMPAIGN_TYPES;

type CampaignFormValues = CampaignUpsertPayload & {
  selectedTeamIds: number[];
};

const defaultValues: CampaignFormValues = {
  id: null,
  name: "",
  type: "IN",
  scriptId: null,
  clientId: null,
  openUrlAutomatically: false,
  supportUrl: "",
  playCallTone: false,
  removeDuplicateNumbers: false,
  isActive: true,
  enableCallEnd: false,
  enableIntegration: false,
  fillSurveyThreshold: 0,
  enableStopRecording: false,
  teams: null,
  selectedTeamIds: [],
};

export default function CampaignModal({
  close,
  mode = "create",
  campaignId,
  campaign,
  isOpen = false,
}: CampaignModalProps) {
  const { t } = useTranslation();
  const [createCampaign, { isLoading: isCreating }] = useCreateCampaignMutation();
  const [updateCampaign, { isLoading: isUpdating }] = useUpdateCampaignMutation();
  const clientsOptionsSource = useGetClientsQuery();
  const scriptsOptionsSource = useGetScriptsQuery();
  const teamsOptionsSource = useGetTeamsQuery();
  const { data: campaignDetails, isLoading: isLoadingDetails } = useGetCampaignQuery(
    campaignId as number,
    {
      skip: mode !== "edit" || !campaignId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );
  const isLoading = isCreating || isUpdating || isLoadingDetails;
  const validationSchema = Yup.object({
    name: Yup.string().required(t("common.validation.required")),
    type: Yup.string().required(t("common.validation.required")),
    fillSurveyThreshold: Yup.number()
      .typeError(t("common.validation.nonNegativeNumber"))
      .min(0, t("common.validation.nonNegativeNumber"))
      .required(t("common.validation.required")),
  });

  const sourceValues =
    mode === "edit" && campaignDetails
      ? campaignDetails
      : mode === "edit" && campaign
        ? campaign
        : null;

  const mergedInitialValues: CampaignFormValues = {
    ...defaultValues,
    ...(sourceValues ?? {}),
    name: sourceValues?.name ?? "",
    supportUrl: sourceValues?.supportUrl ?? "",
    isActive: sourceValues?.isActive ?? true,
    scriptId: sourceValues?.scriptId ?? null,
    clientId: sourceValues?.clientId ?? null,
    teams: sourceValues?.teams ?? null,
    selectedTeamIds: (sourceValues?.teams ?? []).map((team) => team.id),
    type: sourceValues?.type ?? "IN",
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("campaigns.modal.editTitle")}</DialogTitle>
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
          const selectedTeamsMap = new Map(
            (teamsOptionsSource.data ?? []).map((team) => [team.id, team.name ?? null]),
          );
          const teams: CampaignTeam[] = (values.selectedTeamIds ?? []).map((id) => ({
            id,
            name: selectedTeamsMap.get(id) ?? null,
          }));

          const payload: CampaignUpsertPayload = {
            ...values,
            id: mode === "create" ? null : (campaignId ?? values.id ?? null),
            scriptId: values.scriptId ? Number(values.scriptId) : null,
            clientId: values.clientId ? Number(values.clientId) : null,
            fillSurveyThreshold: Number(values.fillSurveyThreshold),
            teams,
          };
          delete (payload as Partial<CampaignFormValues>).selectedTeamIds;

          if (mode === "create") {
            await createCampaign(payload).unwrap();
            toast.success(t("campaigns.modal.createdSuccess"));
            close();
            return;
          }

          await updateCampaign(payload).unwrap();
          toast.success(t("campaigns.modal.updatedSuccess"));
          close();
        } finally {
          setSubmitting(false);
        }
      }}
      enableReinitialize
    >
      {({ values, isSubmitting, setFieldValue }) => (
        <Form noValidate>
          <DialogTitle>
            {mode === "create"
              ? t("campaigns.modal.addTitle")
              : t("campaigns.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input name="name" label={t("campaigns.modal.fields.name")} required />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="type"
                  label={t("campaigns.modal.fields.type")}
                  options={campaignTypeOptions.map((value) => ({
                    value,
                    label: t(`campaigns.types.${value}`),
                  }))}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="clientId"
                  label={t("campaigns.modal.fields.clientId")}
                  optionsSource={clientsOptionsSource}
                  mapOption={(client) => ({
                    value: client.id,
                    label: client.name ?? "",
                  })}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="scriptId"
                  label={t("campaigns.modal.fields.scriptId")}
                  optionsSource={scriptsOptionsSource}
                  mapOption={(script) => ({
                    value: script.id ?? 0,
                    label: script.title ?? "",
                  })}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <TextField
                  select
                  fullWidth
                  size="small"
                  label={t("campaigns.modal.fields.teams")}
                  value={values.selectedTeamIds}
                  onChange={(event) => {
                    const nextValue = event.target.value;
                    const parsed = typeof nextValue === "string"
                      ? nextValue.split(",").map(Number)
                      : (nextValue as number[]);
                    setFieldValue("selectedTeamIds", parsed);
                  }}
                  SelectProps={{
                    multiple: true,
                    renderValue: (selected) =>
                      (selected as number[])
                        .map((teamId) => {
                          const team = (teamsOptionsSource.data ?? []).find((item) => item.id === teamId);
                          return team?.name ?? `${teamId}`;
                        })
                        .join(", "),
                  }}
                >
                  {(teamsOptionsSource.data ?? []).map((team) => (
                    <MenuItem key={team.id ?? 0} value={team.id ?? 0}>
                      <Checkbox checked={values.selectedTeamIds.includes(team.id ?? 0)} />
                      <ListItemText primary={team.name ?? ""} />
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Input name="supportUrl" label={t("campaigns.modal.fields.supportUrl")} />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="fillSurveyThreshold"
                  label={t("campaigns.modal.fields.fillSurveyThreshold")}
                  type="number"
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={Boolean(values.isActive)}
                      onChange={(_, checked) => setFieldValue("isActive", checked)}
                    />
                  }
                  label={t("campaigns.modal.fields.isActive")}
                />
              </Grid>
              {[
                "openUrlAutomatically",
                "playCallTone",
                "removeDuplicateNumbers",
                "enableCallEnd",
                "enableIntegration",
                "enableStopRecording",
              ].map((field) => (
                <Grid key={field} size={{ xs: 12, md: 6 }}>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={Boolean(values[field as keyof CampaignUpsertPayload])}
                        onChange={(_, checked) => setFieldValue(field, checked)}
                      />
                    }
                    label={t(`campaigns.modal.fields.${field}`)}
                  />
                </Grid>
              ))}
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
