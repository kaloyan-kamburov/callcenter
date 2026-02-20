import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteLocationMutation } from "@/features/location/locationsApi";

type DeleteLocationModalProps = {
  close: () => void;
  locationId?: number;
};

export default function DeleteLocationModal({
  close,
  locationId,
}: DeleteLocationModalProps) {
  const [deleteLocation, { isLoading }] = useDeleteLocationMutation();

  const handleDelete = async () => {
    if (!locationId) return;
    await deleteLocation(locationId).unwrap();
    toast.success("Location deleted successfully");
    close();
  };

  return (
    <>
      <DialogTitle>Delete Location</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this location?</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={close} disabled={isLoading}>
          Cancel
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          disabled={isLoading}
        >
          Delete
        </Button>
      </DialogActions>
    </>
  );
}
