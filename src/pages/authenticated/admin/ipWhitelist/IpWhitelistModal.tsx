import { Box, Button, DialogActions, DialogContent, DialogTitle, Grid } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import {
  useCreateIpWhitelistEntryMutation,
  useGetIpWhitelistEntryQuery,
  useUpdateIpWhitelistEntryMutation,
} from "@/features/ipWhitelist/ipWhitelistApi";
import type { IpWhitelistEntry, IpWhitelistUpsertPayload } from "@/types/IpWhitelist";
import Input from "@/components/form/Input/Input";
import Loader from "@/components/common/Loader/Loader";
import { useTranslation } from "react-i18next";

type IpWhitelistModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  entryId?: number;
  entry?: IpWhitelistEntry;
  isOpen?: boolean;
};

const defaultValues: IpWhitelistUpsertPayload = {
  id: null,
  ipAddress: "",
  name: "",
};

export default function IpWhitelistModal({
  close,
  mode = "create",
  entryId,
  entry,
  isOpen = false,
}: IpWhitelistModalProps) {
  const { t } = useTranslation();
  const [createEntry, { isLoading: isCreating }] = useCreateIpWhitelistEntryMutation();
  const [updateEntry, { isLoading: isUpdating }] = useUpdateIpWhitelistEntryMutation();
  const { data: entryDetails, isLoading: isLoadingDetails } = useGetIpWhitelistEntryQuery(
    entryId as number,
    {
      skip: mode !== "edit" || !entryId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );
  const isLoading = isCreating || isUpdating || isLoadingDetails;
  const validationSchema = Yup.object({
    name: Yup.string().required(t("common.validation.required")),
    ipAddress: Yup.string().required(t("common.validation.required")),
  });

  const mergedInitialValues: IpWhitelistUpsertPayload = {
    ...defaultValues,
    ...(mode === "edit" && entryDetails
      ? {
          id: entryDetails.id,
          ipAddress: entryDetails.ipAddress ?? "",
          name: entryDetails.name ?? "",
        }
      : mode === "edit" && entry
        ? {
            id: entry.id,
            ipAddress: entry.ipAddress ?? "",
            name: entry.name ?? "",
          }
        : {}),
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("ipWhitelist.modal.editTitle")}</DialogTitle>
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
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const payload: IpWhitelistUpsertPayload = {
            id: mode === "create" ? null : (entryId ?? values.id ?? null),
            ipAddress: values.ipAddress,
            name: values.name,
          };

          if (mode === "create") {
            await createEntry(payload).unwrap();
            toast.success(t("ipWhitelist.modal.createdSuccess"));
            close();
            return;
          }

          await updateEntry(payload).unwrap();
          toast.success(t("ipWhitelist.modal.updatedSuccess"));
          close();
        } finally {
          setSubmitting(false);
        }
      }}
      enableReinitialize
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <DialogTitle>
            {mode === "create"
              ? t("ipWhitelist.modal.addTitle")
              : t("ipWhitelist.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12 }}>
                <Input
                  name="name"
                  label={t("ipWhitelist.modal.fields.name")}
                  required
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Input
                  name="ipAddress"
                  label={t("ipWhitelist.modal.fields.ipAddress")}
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
