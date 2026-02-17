export function getDashboardPath(role?: string | null): string {
  const normalizedRole = role?.toLowerCase();

  if (normalizedRole === "admin") return "/admin/dashboard";
  if (normalizedRole === "manager") return "/manager/dashboard";
  if (normalizedRole === "client") return "/client/dashboard";

  return "/client/dashboard";
}
