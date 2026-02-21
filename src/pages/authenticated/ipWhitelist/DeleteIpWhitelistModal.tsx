import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteIpWhitelistEntryMutation } from "@/features/ipWhitelist/ipWhitelistApi";
import { useTranslation } from "react-i18next";

type DeleteIpWhitelistModalProps = {
  close: () => void;
  entryId?: number;
};

export default function DeleteIpWhitelistModal({
  close,
  entryId,
}: DeleteIpWhitelistModalProps) {
  const { t } = useTranslation();
  const [deleteEntry, { isLoading }] = useDeleteIpWhitelistEntryMutation();

  const handleDelete = async () => {
    if (!entryId) return;
    await deleteEntry(entryId).unwrap();
    toast.success(t("ipWhitelist.deleteModal.deletedSuccess"));
    close();
  };

  return (
    <>
      <DialogTitle>{t("ipWhitelist.deleteModal.title")}</DialogTitle>
      <DialogContent>
        <Typography>{t("ipWhitelist.deleteModal.confirmation")}</Typography>
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
