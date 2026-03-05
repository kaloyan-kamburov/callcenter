import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteWorkplaceMutation } from "@/features/workplace/workplacesApi";
import { useTranslation } from "react-i18next";

type DeleteWorkplaceModalProps = {
  close: () => void;
  workplaceId?: number;
};

export default function DeleteWorkplaceModal({
  close,
  workplaceId,
}: DeleteWorkplaceModalProps) {
  const { t } = useTranslation();
  const [deleteWorkplace, { isLoading }] = useDeleteWorkplaceMutation();

  const handleDelete = async () => {
    if (!workplaceId) return;
    await deleteWorkplace(workplaceId).unwrap();
    toast.success(t("workplaces.deleteModal.deletedSuccess"));
    close();
  };

  return (
    <>
      <DialogTitle>{t("workplaces.deleteModal.title")}</DialogTitle>
      <DialogContent>
        <Typography>{t("workplaces.deleteModal.confirmation")}</Typography>
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
