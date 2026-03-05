import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function CallsPage() {
  const { t } = useTranslation();

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
      <Typography variant="h5">{t("navigation.calls")}</Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        {t("agent.callsPlaceholder")}
      </Typography>
    </Box>
  );
}
