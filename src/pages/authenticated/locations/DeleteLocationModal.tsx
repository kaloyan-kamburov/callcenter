import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteLocationMutation } from "@/features/location/locationsApi";
import { useTranslation } from "react-i18next";

type DeleteLocationModalProps = {
  close: () => void;
  locationId?: number;
};

export default function DeleteLocationModal({
  close,
  locationId,
}: DeleteLocationModalProps) {
  const { t } = useTranslation();
  const [deleteLocation, { isLoading }] = useDeleteLocationMutation();

  const handleDelete = async () => {
    if (!locationId) return;
    await deleteLocation(locationId).unwrap();
    toast.success(t("locations.deleteModal.deletedSuccess"));
    close();
  };

  return (
    <>
      <DialogTitle>{t("locations.deleteModal.title")}</DialogTitle>
      <DialogContent>
        <Typography>{t("locations.deleteModal.confirmation")}</Typography>
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
