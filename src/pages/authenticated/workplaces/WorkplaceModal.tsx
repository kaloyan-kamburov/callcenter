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
  useCreateWorkplaceMutation,
  useGetWorkplaceQuery,
  useUpdateWorkplaceMutation,
} from "@/features/workplace/workplacesApi";
import { useGetLocationsQuery } from "@/features/location/locationsApi";
import { useGetSipsQuery } from "@/features/sip/sipsApi";
import type { Workplace, WorkplaceUpsertPayload } from "@/types/Workplace";
import Input from "@/components/form/Input/Input";
import Select from "@/components/form/Select/Select";
import Loader from "@/components/common/Loader/Loader";
import { useTranslation } from "react-i18next";

type WorkplaceModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  workplaceId?: number;
  workplace?: Workplace;
  isOpen?: boolean;
};

const defaultValues: WorkplaceUpsertPayload = {
  id: null,
  name: "",
  locationId: null,
  sipId: null,
  isPredictive: false,
  isDeleted: false,
};

export default function WorkplaceModal({
  close,
  mode = "create",
  workplaceId,
  workplace,
  isOpen = false,
}: WorkplaceModalProps) {
  const { t } = useTranslation();
  const [createWorkplace, { isLoading: isCreating }] = useCreateWorkplaceMutation();
  const [updateWorkplace, { isLoading: isUpdating }] = useUpdateWorkplaceMutation();
  const locationsOptionsSource = useGetLocationsQuery();
  const sipsOptionsSource = useGetSipsQuery();
  const { data: workplaceDetails, isLoading: isLoadingDetails } = useGetWorkplaceQuery(
    workplaceId as number,
    {
      skip: mode !== "edit" || !workplaceId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );
  const isLoading = isCreating || isUpdating || isLoadingDetails;

  const mergedInitialValues: WorkplaceUpsertPayload = {
    ...defaultValues,
    ...(mode === "edit" && workplaceDetails
      ? workplaceDetails
      : mode === "edit" && workplace
        ? workplace
        : {}),
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("workplaces.modal.editTitle")}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "grid", placeItems: "center", minHeight: 180 }}>
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
          const payload: WorkplaceUpsertPayload = {
            ...values,
            id: mode === "create" ? null : (workplaceId ?? values.id ?? null),
            locationId:
              values.locationId === null || values.locationId === undefined
                ? null
                : Number(values.locationId),
            sipId:
              values.sipId === null || values.sipId === undefined
                ? null
                : Number(values.sipId),
          };

          if (mode === "create") {
            await createWorkplace(payload).unwrap();
            toast.success(t("workplaces.modal.createdSuccess"));
            close();
            return;
          }

          await updateWorkplace(payload).unwrap();
          toast.success(t("workplaces.modal.updatedSuccess"));
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
              ? t("workplaces.modal.addTitle")
              : t("workplaces.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12 }}>
                <Input name="name" label={t("workplaces.modal.fields.name")} required />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="locationId"
                  label={t("workplaces.modal.fields.location")}
                  optionsSource={locationsOptionsSource}
                  mapOption={(location) => ({ label: location.name, value: location.id })}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="sipId"
                  label={t("workplaces.modal.fields.sip")}
                  optionsSource={sipsOptionsSource}
                  mapOption={(sip) => ({ label: sip.name, value: sip.id })}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.isPredictive}
                      onChange={(_, checked) => setFieldValue("isPredictive", checked)}
                    />
                  }
                  label={t("workplaces.modal.fields.isPredictive")}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.isDeleted}
                      onChange={(_, checked) => setFieldValue("isDeleted", checked)}
                    />
                  }
                  label={t("workplaces.modal.fields.isDeleted")}
                />
              </Grid>
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
