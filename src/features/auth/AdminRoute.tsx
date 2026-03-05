import { Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/useAuth";

const ADMIN_ROLE = "admin";

export default function AdminRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (user?.role?.toLowerCase() !== ADMIN_ROLE) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
