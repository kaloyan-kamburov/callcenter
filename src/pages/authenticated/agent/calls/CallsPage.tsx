import { Box, Typography } from "@mui/material";
import ScriptDisplay from "./ScriptDisplay/ScriptDisplay";
import Phone from "./Phone";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { useTranslation } from "react-i18next";
import { useAgentSettings } from "@/features/agent/useAgentSettings";
import { useAgentWorkLog } from "@/features/agent/AgentWorkLogContext";

export default function CallsPage() {
  const { t } = useTranslation();
  const { workplaceId, status, campaign, script } = useAgentSettings();
  const agentWorkLog = useAgentWorkLog();

  const hasWorkplace = Boolean(workplaceId);
  const isReady = status === "Ready";
  const isSettingWorkLog = agentWorkLog?.isSettingWorkLog ?? false;

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

  return (
    <Box
      sx={{
        height: "100%",
        minHeight: 0,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        {t("agent.calls.campaign")}: {campaign?.name ?? "—"}
      </Typography>
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
          gap: 2,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            flex: { xs: "0 0 420px", xl: "0 0 420px" },
            minHeight: { xs: 420, xl: 0 },
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          <Phone />
        </Box>
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            p: 2,
            border: 1,
            borderColor: "divider",
            borderRadius: 1,
            overflow: "auto",
            bgcolor: "background.paper",
          }}
        >
          <ScriptDisplay
            content={script?.content}
            disabled={!isReady || isSettingWorkLog}
            campaignId={campaign?.id}
            scriptId={script?.id ?? undefined}
          />
        </Box>
      </Box>
    </Box>
  );
}
