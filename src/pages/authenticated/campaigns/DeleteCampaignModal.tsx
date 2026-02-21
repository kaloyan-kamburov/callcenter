import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteCampaignMutation } from "@/features/campaign/campaignsApi";
import { useTranslation } from "react-i18next";

type DeleteCampaignModalProps = {
  close: () => void;
  campaignId?: number;
};

export default function DeleteCampaignModal({
  close,
  campaignId,
}: DeleteCampaignModalProps) {
  const { t } = useTranslation();
  const [deleteCampaign, { isLoading }] = useDeleteCampaignMutation();

  const handleDelete = async () => {
    if (!campaignId) return;
    await deleteCampaign(campaignId).unwrap();
    toast.success(t("campaigns.deleteModal.deletedSuccess"));
    close();
  };

  return (
    <>
      <DialogTitle>{t("campaigns.deleteModal.title")}</DialogTitle>
      <DialogContent>
        <Typography>{t("campaigns.deleteModal.confirmation")}</Typography>
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
