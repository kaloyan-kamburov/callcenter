import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import Input from "@/components/form/Input/Input";
import {
  useCreateSipMutation,
  useGetSipQuery,
  useUpdateSipMutation,
} from "@/features/sip/sipsApi";
import type { Sip, SipUpsertPayload } from "@/types/Sip";
import Loader from "@/components/common/Loader/Loader";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

type SipModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  sipId?: number;
  sip?: Sip;
  isOpen?: boolean;
};

const defaultValues: SipUpsertPayload = {
  id: null,
  name: "",
};

export default function SipModal({
  close,
  mode = "create",
  sipId,
  sip,
  isOpen = false,
}: SipModalProps) {
  const { t } = useTranslation();
  const [createSip, { isLoading: isCreating }] = useCreateSipMutation();
  const [updateSip, { isLoading: isUpdating }] = useUpdateSipMutation();
  const { data: sipDetails, isLoading: isLoadingDetails } = useGetSipQuery(
    sipId as number,
    {
      skip: mode !== "edit" || !sipId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );

  const isLoading = isCreating || isUpdating || isLoadingDetails;
  const validationSchema = Yup.object({
    name: Yup.string().required(t("common.validation.required")),
  });
  const mergedInitialValues: SipUpsertPayload = {
    ...defaultValues,
    ...(mode === "edit" && sipDetails
      ? {
          id: sipDetails.id,
          name: sipDetails.name ?? "",
        }
      : mode === "edit" && sip
        ? {
            id: sip.id,
            name: sip.name ?? "",
          }
        : {}),
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("sips.modal.editTitle")}</DialogTitle>
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
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          if (mode === "create") {
            const payload: SipUpsertPayload = {
              id: null,
              name: values.name,
            };
            await createSip(payload).unwrap();
            toast.success(t("sips.modal.createdSuccess"));
            close();
            return;
          }

          if (!sipId) {
            return;
          }

          const payload: SipUpsertPayload = {
            id: sipId,
            name: values.name,
          };
          await updateSip(payload).unwrap();
          toast.success(t("sips.modal.updatedSuccess"));
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
            {mode === "create" ? t("sips.modal.addTitle") : t("sips.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12 }}>
                <Input name="name" label={t("sips.modal.fields.name")} required />
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
