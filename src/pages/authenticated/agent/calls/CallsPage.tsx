import { Box, Typography } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useTranslation } from "react-i18next";
import { useAgentSettings } from "@/features/agent/useAgentSettings";

export default function CallsPage() {
  const { t } = useTranslation();
  const { workplaceId, status } = useAgentSettings();

  const hasWorkplace = Boolean(workplaceId);
  const isReady = status === "Ready";

  if (!hasWorkplace || !status) {
    return (
      <Box
        sx={{
          height: "100%",
          minHeight: 0,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <PriorityHighIcon color="error" sx={{ fontSize: 48 }} />
        <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
          {t("agent.calls.selectWorkplaceAndStatus")}
        </Typography>
      </Box>
    );
  }

  if (hasWorkplace && !isReady) {
    return null;
  }

  return (
    <Box
      sx={{
        height: "100%",
        minHeight: 0,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="body1">yo nigga</Typography>
    </Box>
  );
}
