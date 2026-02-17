import { Navigate } from "react-router-dom";
import { useAuth } from "@/features/auth/useAuth";
import { getDashboardPath } from "@/features/auth/getDashboardPath";

export default function RoleBasedDashboardRedirect() {
  const { user } = useAuth();

  return <Navigate to={getDashboardPath(user?.role)} replace />;
}
