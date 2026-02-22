import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
} from "@mui/material";
import { Form, Formik } from "formik";
import { toast } from "react-hot-toast";
import Input from "@/components/form/Input/Input";
import Select from "@/components/form/Select/Select";
import {
  useCreateScriptMutation,
  useGetScriptQuery,
  useUpdateScriptMutation,
} from "@/features/script/scriptsApi";
import {
  SCRIPT_TYPES,
  type Script,
  type ScriptType,
  type ScriptUpsertPayload,
} from "@/types/Script";
import Loader from "@/components/common/Loader/Loader";
import { useTranslation } from "react-i18next";

type ScriptModalProps = {
  close: () => void;
  mode?: "create" | "edit";
  scriptId?: number;
  script?: Script;
  isOpen?: boolean;
};

const defaultValues: ScriptUpsertPayload = {
  id: 0,
  title: "",
  type: "Community",
  content: "",
};

export default function ScriptModal({
  close,
  mode = "create",
  scriptId,
  script,
  isOpen = false,
}: ScriptModalProps) {
  const { t } = useTranslation();
  const [createScript, { isLoading: isCreating }] = useCreateScriptMutation();
  const [updateScript, { isLoading: isUpdating }] = useUpdateScriptMutation();
  const { data: scriptDetails, isLoading: isLoadingDetails } = useGetScriptQuery(
    scriptId as number,
    {
      skip: mode !== "edit" || !scriptId || !isOpen,
      refetchOnMountOrArgChange: true,
    },
  );

  const isLoading = isCreating || isUpdating || isLoadingDetails;
  const mergedInitialValues: ScriptUpsertPayload = {
    ...defaultValues,
    ...(mode === "edit" && scriptDetails
      ? {
          id: scriptDetails.id,
          title: scriptDetails.title ?? "",
          type: (scriptDetails.type ?? "Community") as ScriptType,
          content: scriptDetails.content ?? "",
        }
      : mode === "edit" && script
        ? {
            id: script.id,
            title: script.title ?? "",
            type: (script.type ?? "Community") as ScriptType,
            content: script.content ?? "",
          }
        : {}),
  };

  if (mode === "edit" && isLoadingDetails) {
    return (
      <>
        <DialogTitle>{t("scripts.modal.editTitle")}</DialogTitle>
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
          if (mode === "create") {
            const payload: ScriptUpsertPayload = {
              id: 0,
              title: values.title,
              type: values.type as ScriptType,
              content: values.content,
            };
            await createScript(payload).unwrap();
            toast.success(t("scripts.modal.createdSuccess"));
            close();
            return;
          }

          if (!scriptId) {
            return;
          }

          const payload: ScriptUpsertPayload = {
            id: scriptId,
            title: values.title,
            type: values.type as ScriptType,
            content: values.content,
          };
          await updateScript(payload).unwrap();
          toast.success(t("scripts.modal.updatedSuccess"));
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
              ? t("scripts.modal.addTitle")
              : t("scripts.modal.editTitle")}
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
              <Grid size={{ xs: 12 }}>
                <Input name="title" label={t("scripts.modal.fields.title")} required />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Select
                  name="type"
                  label={t("scripts.modal.fields.type")}
                  options={SCRIPT_TYPES.map((type) => ({
                    label: t(`scripts.types.${type}`),
                    value: type,
                  }))}
                />
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Input
                  name="content"
                  label={t("scripts.modal.fields.content")}
                  multiline
                  minRows={6}
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
