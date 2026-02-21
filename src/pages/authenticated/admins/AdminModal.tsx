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
  useCreateAdminMutation,
  useGetAdminQuery,
  useUpdateAdminMutation,
} from "@/features/admin/adminsApi";
import { useGetLocationsQuery } from "@/features/location/locationsApi";
import { useGetRolesQuery } from "@/features/role/rolesApi";
import type {
  Admin,
  AdminUpdatePayload,
  AdminUpsertPayload,
} from "@/types/Admin";
import Input from "@/components/form/Input/Input";
import Select from "@/components/form/Select/Select";
import Loader from "@/components/common/Loader/Loader";
import { useTranslation } from "react-i18next";

type AdminModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  adminId?: number;
  admin?: Admin;
  isOpen?: boolean;
  initialValues?: Partial<AdminUpsertPayload>;
};

const defaultValues: AdminUpsertPayload = {
  username: "",
  password: "",
  roleId: 0,
  name: "",
  email: "",
  signature: "",
  timeZone: "",
  locationId: 0,
  interfaceLanguage: "",
  phoneType: 1,
  isActive: true,
};

const phoneTypeOptions = [
  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 },
];

export default function AdminModal({
  close,
  mode = "create",
  adminId,
  admin,
  isOpen = false,
  initialValues,
}: AdminModalProps) {
  const { t } = useTranslation();
  const [createAdmin, { isLoading: isCreating }] = useCreateAdminMutation();
  const [updateAdmin, { isLoading: isUpdating }] = useUpdateAdminMutation();
  const rolesOptionsSource = useGetRolesQuery();
  const locationsOptionsSource = useGetLocationsQuery();
  const { data: adminDetails, isLoading: isLoadingDetails } = useGetAdminQuery(
    adminId as number,
    {
      skip: mode !== "edit" || !adminId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );
  const isLoading = isCreating || isUpdating || isLoadingDetails;

  const mergedInitialValues: AdminUpsertPayload = {
    ...defaultValues,
    ...initialValues,
    ...(mode === "edit" && adminDetails
      ? {
          username: adminDetails.username,
          name: adminDetails.name,
          email: adminDetails.email,
          signature: adminDetails.signature,
          timeZone: adminDetails.timeZone,
          locationId: adminDetails.locationId,
          interfaceLanguage: adminDetails.interfaceLanguage,
          phoneType: adminDetails.phoneType,
          isActive: adminDetails.isActive,
        }
      : {}),
    ...(mode === "edit" ? { roleId: 1 } : {}),
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("admins.modal.editTitle")}</DialogTitle>
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
          const payload: AdminUpsertPayload = {
            ...values,
            roleId: Number(values.roleId),
            locationId: Number(values.locationId),
            phoneType: Number(values.phoneType),
          };

          if (mode === "create") {
            await createAdmin(payload).unwrap();
            toast.success(t("admins.modal.createdSuccess"));
            close();
            return;
          }

          if (!adminId) {
            return;
          }

          const updatePayload: AdminUpdatePayload = {
            id: adminId,
            name: values.name,
            username: values.username,
            email: values.email,
            signature: values.signature,
            timeZone: values.timeZone,
            locationId: Number(values.locationId),
            locationName: admin?.locationName ?? "",
            interfaceLanguage: values.interfaceLanguage,
            phoneType: Number(values.phoneType),
            isActive: values.isActive,
          };

          await updateAdmin(updatePayload).unwrap();
          toast.success(t("admins.modal.updatedSuccess"));
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
              ? t("admins.modal.addTitle")
              : t("admins.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input name="username" label={t("admins.modal.fields.username")} required />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="password"
                  label={t("admins.modal.fields.password")}
                  type="password"
                  required={mode === "create"}
                  showPasswordToggle
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="roleId"
                  label={t("admins.modal.fields.role")}
                  placeholder={t("admins.modal.fields.selectRole")}
                  required
                  optionsSource={rolesOptionsSource}
                  mapOption={(role) => ({
                    label: role.name,
                    value: role.id,
                  })}
                  disabled={mode === "edit"}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input name="name" label={t("admins.modal.fields.name")} required />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="email"
                  label={t("admins.modal.fields.email")}
                  type="email"
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="signature"
                  label={t("admins.modal.fields.signature")}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="timeZone"
                  label={t("admins.modal.fields.timeZone")}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="locationId"
                  label={t("admins.modal.fields.location")}
                  required
                  optionsSource={locationsOptionsSource}
                  mapOption={(location) => ({
                    label: location.name,
                    value: location.id,
                  })}
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Input
                  name="interfaceLanguage"
                  label={t("admins.modal.fields.interfaceLanguage")}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <Select
                  name="phoneType"
                  label={t("admins.modal.fields.phoneType")}
                  required
                  options={phoneTypeOptions}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={values.isActive}
                      onChange={(_, checked) =>
                        setFieldValue("isActive", checked)
                      }
                    />
                  }
                  label={t("admins.modal.fields.isActive")}
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
