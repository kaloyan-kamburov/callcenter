import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteAdminMutation } from "@/features/admin/adminsApi";
import { useTranslation } from "react-i18next";

type DeleteAdminModalProps = {
  close: () => void;
  adminId?: number;
};

export default function DeleteAdminModal({ close, adminId }: DeleteAdminModalProps) {
  const { t } = useTranslation();
  const [deleteAdmin, { isLoading }] = useDeleteAdminMutation();

  const handleDelete = async () => {
    if (!adminId) return;
    await deleteAdmin(adminId).unwrap();
    toast.success(t("admins.deleteModal.deletedSuccess"));
    close();
  };

  return (
    <>
      <DialogTitle>{t("admins.deleteModal.title")}</DialogTitle>
      <DialogContent>
        <Typography>{t("admins.deleteModal.confirmation")}</Typography>
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
