import { Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/useAuth";
import { Box } from "@mui/material";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Box
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
}
