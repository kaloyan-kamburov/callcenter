import { Box } from "@mui/material";
import { CometChatIntegration } from "@/components/common/Chat/CometChatIntegration";

export default function DashboardPage() {
  return (
    <Box
      sx={{
        height: "100%",
        minHeight: 0,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: 1,
        borderColor: "divider",
        borderRadius: 2,
      }}
    >
      <CometChatIntegration />
    </Box>
  );
}
