import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

export default function AuthLayout() {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        height: "100dvh",
      }}
    >
      <Outlet />
    </Box>
  );
}
