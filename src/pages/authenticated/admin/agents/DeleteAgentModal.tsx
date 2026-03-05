import { Button, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import { toast } from "react-hot-toast";
import { useDeleteAgentMutation } from "@/features/agent/agentsApi";
import { useTranslation } from "react-i18next";

type DeleteAgentModalProps = {
  close: () => void;
  agentId?: number;
};

export default function DeleteAgentModal({ close, agentId }: DeleteAgentModalProps) {
  const { t } = useTranslation();
  const [deleteAgent, { isLoading }] = useDeleteAgentMutation();

  const handleDelete = async () => {
    if (!agentId) return;
    await deleteAgent(agentId).unwrap();
    toast.success(t("agents.deleteModal.deletedSuccess"));
    close();
  };

  return (
    <>
      <DialogTitle>{t("agents.deleteModal.title")}</DialogTitle>
      <DialogContent>
        <Typography>{t("agents.deleteModal.confirmation")}</Typography>
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
