import { Navigate, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import { useAuth } from "@/features/auth/useAuth";
import { getDashboardPath } from "@/features/auth/getDashboardPath";

export default function AuthLayout() {
  const { isAuthenticated, user } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={getDashboardPath(user?.role)} replace />;
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
