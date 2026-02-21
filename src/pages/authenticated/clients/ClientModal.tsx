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
  useCreateClientMutation,
  useGetClientQuery,
  useUpdateClientMutation,
} from "@/features/client/clientsApi";
import type { Client, CreateClientPayload, UpdateClientPayload } from "@/types/Client";
import Input from "@/components/form/Input/Input";
import Loader from "@/components/common/Loader/Loader";
import { useTranslation } from "react-i18next";

type ClientModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  clientId?: number;
  client?: Client;
  isOpen?: boolean;
};

type ClientFormValues = {
  name: string;
  username: string;
  password: string;
  isActive: boolean;
};

const defaultValues: ClientFormValues = {
  name: "",
  username: "",
  password: "",
  isActive: true,
};

export default function ClientModal({
  close,
  mode = "create",
  clientId,
  client,
  isOpen = false,
}: ClientModalProps) {
  const { t } = useTranslation();
  const [createClient, { isLoading: isCreating }] = useCreateClientMutation();
  const [updateClient, { isLoading: isUpdating }] = useUpdateClientMutation();
  const { data: clientDetails, isLoading: isLoadingDetails } = useGetClientQuery(
    clientId as number,
    {
      skip: mode !== "edit" || !clientId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );
  const isLoading = isCreating || isUpdating || isLoadingDetails;

  const mergedInitialValues: ClientFormValues = {
    ...defaultValues,
    ...(mode === "edit" && clientDetails
      ? {
          name: clientDetails.name ?? "",
          username: clientDetails.username ?? "",
          isActive: Boolean(clientDetails.isActive),
        }
      : mode === "edit" && client
        ? {
            name: client.name ?? "",
            username: client.username ?? "",
            isActive: Boolean(client.isActive),
          }
        : {}),
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("clients.modal.editTitle")}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "grid", placeItems: "center", minHeight: 200 }}>
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
            const payload: CreateClientPayload = {
              name: values.name,
              username: values.username,
              password: values.password,
              isActive: values.isActive,
            };
            await createClient(payload).unwrap();
            toast.success(t("clients.modal.createdSuccess"));
            close();
            return;
          }

          if (!clientId) {
            return;
          }

          const payload: UpdateClientPayload = {
            id: clientId,
            name: values.name,
            username: values.username,
            password: values.password || undefined,
            isActive: values.isActive,
            createdAt: clientDetails?.createdAt ?? client?.createdAt,
          };
          await updateClient(payload).unwrap();
          toast.success(t("clients.modal.updatedSuccess"));
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
            {mode === "create" ? t("clients.modal.addTitle") : t("clients.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12 }}>
                <Input name="name" label={t("clients.modal.fields.name")} required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Input name="username" label={t("clients.modal.fields.username")} required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Input
                  name="password"
                  label={t("clients.modal.fields.password")}
                  type="password"
                  required={mode === "create"}
                  showPasswordToggle
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
                  label={t("clients.modal.fields.isActive")}
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
