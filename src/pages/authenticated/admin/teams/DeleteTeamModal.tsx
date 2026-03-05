import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteTeamMutation } from "@/features/team/teamsApi";
import { useTranslation } from "react-i18next";

type DeleteTeamModalProps = {
  close: () => void;
  teamId?: number;
};

export default function DeleteTeamModal({ close, teamId }: DeleteTeamModalProps) {
  const { t } = useTranslation();
  const [deleteTeam, { isLoading }] = useDeleteTeamMutation();

  const handleDelete = async () => {
    if (!teamId) return;
    await deleteTeam(teamId).unwrap();
    toast.success(t("teams.deleteModal.deletedSuccess"));
    close();
  };

  return (
    <>
      <DialogTitle>{t("teams.deleteModal.title")}</DialogTitle>
      <DialogContent>
        <Typography>{t("teams.deleteModal.confirmation")}</Typography>
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
