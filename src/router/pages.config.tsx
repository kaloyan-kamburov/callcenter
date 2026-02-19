import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import ProtectedRoute from "@/features/auth/ProtectedRoute";
import LoginPage from "@/pages/common/LoginPage/LoginPage";
import RegisterPage from "@/pages/common/RegisterPage/RegisterPage";
import ForgotPasswordPage from "@/pages/common/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "@/pages/common/ResetPasswordPage/ResetPasswordPage";
import NotFoundPage from "@/pages/common/NotFoundPage/NotFoundPage";
import { lazy, Suspense } from "react";
import type { ReactElement } from "react";
import LoaderComponent from "@/components/common/LoaderComponent";
import { Box } from "@mui/material";

const DashboardPage = lazy(
  () => import("@/pages/authenticated/dashboard/DashboardPage"),
);
const AdminsPage = lazy(
  () => import("@/pages/authenticated/admins/AdminsPage"),
);

export type RouteItem = {
  path: string;
  element: ReactElement;
  protected?: boolean;
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
          element: <DashboardPage />,
          protected: true,
        },
        {
          path: "/admins",
          element: <AdminsPage />,
          protected: true,
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

export function withProtection(element: ReactElement, isProtected?: boolean) {
  if (!isProtected) return element;
  return (
    <Suspense
      fallback={
        <Box sx={{ display: "grid", placeItems: "center", flex: 1 }}>
          <LoaderComponent />
        </Box>
      }
    >
      <ProtectedRoute>{element}</ProtectedRoute>
    </Suspense>
  );
}
