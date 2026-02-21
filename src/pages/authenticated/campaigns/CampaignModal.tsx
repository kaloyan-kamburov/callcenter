import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Grid,
  Switch,
} from "@mui/material";
import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import {
  useCreateCampaignMutation,
  useGetCampaignQuery,
  useUpdateCampaignMutation,
} from "@/features/campaign/campaignsApi";
import type { Campaign, CampaignUpsertPayload } from "@/types/Campaign";
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

const campaignTypeOptions = [1, 2, 3];

const defaultValues: CampaignUpsertPayload = {
  id: null,
  name: "",
  type: 1,
  openUrlAutomatically: false,
  supportUrl: "",
  playCallTone: false,
  removeDuplicateNumbers: false,
  isActive: true,
  enableCallEnd: false,
  enableIntegration: false,
  fillSurveyThreshold: 0,
  enableStopRecording: false,
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
  const { data: campaignDetails, isLoading: isLoadingDetails } = useGetCampaignQuery(
    campaignId as number,
    {
      skip: mode !== "edit" || !campaignId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );
  const isLoading = isCreating || isUpdating || isLoadingDetails;

  const mergedInitialValues: CampaignUpsertPayload = {
    ...defaultValues,
    ...(mode === "edit" && campaignDetails ? campaignDetails : mode === "edit" && campaign ? campaign : {}),
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
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const payload: CampaignUpsertPayload = {
            ...values,
            id: mode === "create" ? null : (campaignId ?? values.id ?? null),
            type: Number(values.type),
            fillSurveyThreshold: Number(values.fillSurveyThreshold),
          };

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
        <Form>
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
                      checked={values.isActive}
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
            <Button type="submit" variant="contained" disabled={isLoading || isSubmitting}>
              {mode === "create" ? t("common.create") : t("common.save")}
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
}
