import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteSipMutation } from "@/features/sip/sipsApi";
import { useTranslation } from "react-i18next";

type DeleteSipModalProps = {
  close: () => void;
  sipId?: number;
};

export default function DeleteSipModal({ close, sipId }: DeleteSipModalProps) {
  const { t } = useTranslation();
  const [deleteSip, { isLoading }] = useDeleteSipMutation();

  const handleDelete = async () => {
    if (!sipId) return;
    await deleteSip(sipId).unwrap();
    toast.success(t("sips.deleteModal.deletedSuccess"));
    close();
  };

  return (
    <>
      <DialogTitle>{t("sips.deleteModal.title")}</DialogTitle>
      <DialogContent>
        <Typography>{t("sips.deleteModal.confirmation")}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} disabled={isLoading}>
          {t("common.cancel")}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          disabled={isLoading}
        >
          {t("common.delete")}
        </Button>
      </DialogActions>
    </>
  );
}
