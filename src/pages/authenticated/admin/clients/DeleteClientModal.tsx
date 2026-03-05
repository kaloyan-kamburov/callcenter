import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteClientMutation } from "@/features/client/clientsApi";
import { useTranslation } from "react-i18next";

type DeleteClientModalProps = {
  close: () => void;
  clientId?: number;
};

export default function DeleteClientModal({ close, clientId }: DeleteClientModalProps) {
  const { t } = useTranslation();
  const [deleteClient, { isLoading }] = useDeleteClientMutation();

  const handleDelete = async () => {
    if (!clientId) return;
    await deleteClient(clientId).unwrap();
    toast.success(t("clients.deleteModal.deletedSuccess"));
    close();
  };

  return (
    <>
      <DialogTitle>{t("clients.deleteModal.title")}</DialogTitle>
      <DialogContent>
        <Typography>{t("clients.deleteModal.confirmation")}</Typography>
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
