import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useAuth } from "@/features/auth/useAuth";

export default function AuthLayout() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

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
