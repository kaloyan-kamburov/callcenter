import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import ProtectedRoute from "@/features/auth/ProtectedRoute";
import AdminRoute from "@/features/auth/AdminRoute";
import { useAuth } from "@/features/auth/useAuth";
import LoginPage from "@/pages/common/LoginPage/LoginPage";
import RegisterPage from "@/pages/common/RegisterPage/RegisterPage";
import ForgotPasswordPage from "@/pages/common/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/common/ResetPasswordPage/ResetPasswordPage";
import NotFoundPage from "@/pages/common/NotFoundPage/NotFoundPage";
import { lazy, Suspense } from "react";
import type { ReactElement } from "react";
import Loader from "@/components/common/Loader/Loader";
import { Box } from "@mui/material";

const DashboardPage = lazy(
  () => import("@/pages/authenticated/dashboard/DashboardPage"),
);
const AdminsPage = lazy(
  () => import("@/pages/authenticated/admin/admins/AdminsPage"),
);
const LocationsPage = lazy(
  () => import("@/pages/authenticated/admin/locations/LocationsPage"),
);
const SipsPage = lazy(
  () => import("@/pages/authenticated/admin/sips/SipsPage"),
);
const ScriptsPage = lazy(
  () => import("@/pages/authenticated/admin/scripts/ScriptsPage"),
);
const AgentsPage = lazy(
  () => import("@/pages/authenticated/admin/agents/AgentsPage"),
);
const CampaignsPage = lazy(
  () => import("@/pages/authenticated/admin/campaigns/CampaignsPage"),
);
const ClientsPage = lazy(
  () => import("@/pages/authenticated/admin/clients/ClientsPage"),
);
const IpWhitelistPage = lazy(
  () => import("@/pages/authenticated/admin/ipWhitelist/IpWhitelistPage"),
);
const TeamsPage = lazy(
  () => import("@/pages/authenticated/admin/teams/TeamsPage"),
);
const WorkplacesPage = lazy(
  () => import("@/pages/authenticated/admin/workplaces/WorkplacesPage"),
);
const CallsPage = lazy(
  () => import("@/pages/authenticated/agent/calls/CallsPage"),
);
const TasksPage = lazy(
  () => import("@/pages/authenticated/agent/tasks/TasksPage"),
);

function HomePage() {
  const { user } = useAuth();
  const isAdmin = user?.role?.toLowerCase() === "admin";
  return isAdmin ? <DashboardPage /> : <CallsPage />;
}

export type RouteItem = {
  path: string;
  element: ReactElement;
  protected?: boolean;
  adminOnly?: boolean;
};

export type LayoutGroup = {
  layout: ReactElement;
  routes: RouteItem[];
};

export const pagesConfig: {
  groups: LayoutGroup[];
  fallback: { path: string; element: ReactElement };
} = {
  groups: [
    {
      layout: <MainLayout />,
      routes: [
        {
          path: "/",
          element: <HomePage />,
          protected: true,
        },
        {
          path: "/tasks",
          element: <TasksPage />,
          protected: true,
        },
        {
          path: "/admins",
          element: <AdminsPage />,
          protected: true,
          adminOnly: true,
        },
        {
          path: "/locations",
          element: <LocationsPage />,
          protected: true,
          adminOnly: true,
        },
        {
          path: "/sips",
          element: <SipsPage />,
          protected: true,
          adminOnly: true,
        },
        {
          path: "/scripts",
          element: <ScriptsPage />,
          protected: true,
          adminOnly: true,
        },
        {
          path: "/agents",
          element: <AgentsPage />,
          protected: true,
          adminOnly: true,
        },
        {
          path: "/campaigns",
          element: <CampaignsPage />,
          protected: true,
          adminOnly: true,
        },
        {
          path: "/clients",
          element: <ClientsPage />,
          protected: true,
          adminOnly: true,
        },
        {
          path: "/ip-whitelist",
          element: <IpWhitelistPage />,
          protected: true,
          adminOnly: true,
        },
        {
          path: "/teams",
          element: <TeamsPage />,
          protected: true,
          adminOnly: true,
        },
        {
          path: "/workplaces",
          element: <WorkplacesPage />,
          protected: true,
          adminOnly: true,
        },
      ],
    },
    {
      layout: <AuthLayout />,
      routes: [
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
        { path: "/forgot-password", element: <ForgotPasswordPage /> },
        { path: "/reset-password", element: <ResetPasswordPage /> },
      ],
    },
  ],
  fallback: { path: "*", element: <NotFoundPage /> },
};

export function withProtection(
  element: ReactElement,
  isProtected?: boolean,
  adminOnly?: boolean
) {
  if (!isProtected) return element;
  const protectedElement = (
    <Suspense
      fallback={
        <Box sx={{ display: "grid", placeItems: "center", flex: 1 }}>
          <Loader />
        </Box>
      }
    >
      <ProtectedRoute>
        {adminOnly ? <AdminRoute>{element}</AdminRoute> : element}
      </ProtectedRoute>
    </Suspense>
  );
  return protectedElement;
}
