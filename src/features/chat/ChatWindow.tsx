import { Box, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { useChat } from "./ChatContext";

export function ChatWindow() {
  const chat = useChat();
  const { t } = useTranslation();

  if (!chat?.isChatOpen) return null;

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "background.paper",
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1.5,
          borderBottom: 1,
          borderColor: "divider",
          flexShrink: 0,
        }}
      >
        <Typography variant="h6" component="h2">
          {t("chat.title")}
        </Typography>
        <IconButton
          onClick={() => chat?.closeChat()}
          aria-label={t("chat.close")}
          size="small"
          sx={{ ml: 1 }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Box
        sx={{
          flex: 1,
          overflow: "auto",
          p: 2,
        }}
      >
        <Typography color="text.secondary">
          {t("chat.placeholder")}
        </Typography>
      </Box>
    </Box>
  );
}
