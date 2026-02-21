import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import Input from "@/components/form/Input/Input";
import {
  useCreateLocationMutation,
  useGetLocationQuery,
  useUpdateLocationMutation,
} from "@/features/location/locationsApi";
import type { Location, LocationUpsertPayload } from "@/types/Location";
import Loader from "@/components/common/Loader/Loader";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

type LocationModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  locationId?: number;
  location?: Location;
  isOpen?: boolean;
};

const defaultValues: LocationUpsertPayload = {
  id: 0,
  name: "",
};

export default function LocationModal({
  close,
  mode = "create",
  locationId,
  location,
  isOpen = false,
}: LocationModalProps) {
  const { t } = useTranslation();
  const [createLocation, { isLoading: isCreating }] =
    useCreateLocationMutation();
  const [updateLocation, { isLoading: isUpdating }] =
    useUpdateLocationMutation();
  const { data: locationDetails, isLoading: isLoadingDetails } =
    useGetLocationQuery(locationId as number, {
      skip: mode !== "edit" || !locationId || !isOpen,
      refetchOnMountOrArgChange: true,
    });

  const isLoading = isCreating || isUpdating || isLoadingDetails;
  const mergedInitialValues: LocationUpsertPayload = {
    ...defaultValues,
    ...(mode === "edit" && locationDetails
      ? {
          id: locationDetails.id,
          name: locationDetails.name,
        }
      : mode === "edit" && location
        ? {
            id: location.id,
            name: location.name,
          }
        : {}),
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("locations.modal.editTitle")}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "grid", placeItems: "center", minHeight: 160 }}>
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
          if (mode === "create") {
            const payload: LocationUpsertPayload = {
              id: 0,
              name: values.name,
            };
            await createLocation(payload).unwrap();
            toast.success(t("locations.modal.createdSuccess"));
            close();
            return;
          }

          if (!locationId) {
            return;
          }

          const payload: LocationUpsertPayload = {
            id: locationId,
            name: values.name,
          };
          await updateLocation(payload).unwrap();
          toast.success(t("locations.modal.updatedSuccess"));
          close();
        } finally {
          setSubmitting(false);
        }
      }}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form>
          <DialogTitle>
            {mode === "create"
              ? t("locations.modal.addTitle")
              : t("locations.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12 }}>
                <Input
                  name="name"
                  label={t("locations.modal.fields.name")}
                  required
                />
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
