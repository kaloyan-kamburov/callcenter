import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteScriptMutation } from "@/features/script/scriptsApi";
import { useTranslation } from "react-i18next";

type DeleteScriptModalProps = {
  close: () => void;
  scriptId?: number;
};

export default function DeleteScriptModal({
  close,
  scriptId,
}: DeleteScriptModalProps) {
  const { t } = useTranslation();
  const [deleteScript, { isLoading }] = useDeleteScriptMutation();

  const handleDelete = async () => {
    if (!scriptId) return;
    await deleteScript(scriptId).unwrap();
    toast.success(t("scripts.deleteModal.deletedSuccess"));
    close();
  };

  return (
    <>
      <DialogTitle>{t("scripts.deleteModal.title")}</DialogTitle>
      <DialogContent>
        <Typography>{t("scripts.deleteModal.confirmation")}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} disabled={isLoading}>
          {t("common.cancel")}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          loading={isLoading}
          disabled={isLoading}
        >
          {t("common.delete")}
        </Button>
      </DialogActions>
    </>
  );
}
