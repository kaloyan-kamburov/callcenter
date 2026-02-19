import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteAdminMutation } from "@/features/admin/adminsApi";

type DeleteAdminModalProps = {
  close: () => void;
  adminId?: number;
};

export default function DeleteAdminModal({ close, adminId }: DeleteAdminModalProps) {
  const [deleteAdmin, { isLoading }] = useDeleteAdminMutation();

  const handleDelete = async () => {
    if (!adminId) return;
    await deleteAdmin(adminId).unwrap();
    toast.success("Admin deleted successfully");
    close();
  };

  return (
    <>
      <DialogTitle>Delete Admin</DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this admin?</Typography>
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
