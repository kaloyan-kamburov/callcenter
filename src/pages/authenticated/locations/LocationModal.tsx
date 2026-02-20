import { Button, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import Input from "@/components/form/Input/Input";
import {
  useCreateLocationMutation,
  useGetLocationQuery,
  useUpdateLocationMutation,
} from "@/features/location/locationsApi";
import type { Location, LocationUpsertPayload } from "@/types/Location";
import LoaderComponent from "@/components/common/LoaderComponent";
import { Box } from "@mui/material";

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
  const [createLocation, { isLoading: isCreating }] = useCreateLocationMutation();
  const [updateLocation, { isLoading: isUpdating }] = useUpdateLocationMutation();
  const { data: locationDetails, isLoading: isLoadingDetails } = useGetLocationQuery(
    locationId as number,
    {
      skip: mode !== "edit" || !locationId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );

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
        <DialogTitle>Edit Location</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "grid", placeItems: "center", minHeight: 160 }}>
            <LoaderComponent />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
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
            toast.success("Location created successfully");
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
          toast.success("Location updated successfully");
          close();
        } finally {
          setSubmitting(false);
        }
      }}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form>
          <DialogTitle>{mode === "create" ? "Add Location" : "Edit Location"}</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12 }}>
                <Input name="name" label="Name" required />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={close} disabled={isLoading || isSubmitting}>
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={isLoading || isSubmitting}
            >
              {mode === "create" ? "Create" : "Save"}
            </Button>
          </DialogActions>
        </Form>
      )}
    </Formik>
  );
}
