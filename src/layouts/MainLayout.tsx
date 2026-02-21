import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import type { Navigation, Session } from "@toolpad/core";
import {
  Account,
  AccountPopoverFooter,
  SignOutButton,
} from "@toolpad/core/Account";
import { useMemo, useState } from "react";
import { useAuth } from "@/features/auth/useAuth";
import { useLogoutMutation } from "@/features/auth/authApi";
import { theme } from "@/theme";
import LanguageSwitcher from "@/components/common/LanguageSwitcher/LanguageSwitcher";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function MainLayout() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [logout] = useLogoutMutation();
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);
  const { t } = useTranslation();
  const navigation: Navigation = [
    {
      kind: "page",
      segment: "",
      title: t("navigation.dashboard"),
      icon: <HomeIcon />,
    },
    {
      kind: "page",
      segment: "admins",
      title: t("navigation.admins"),
      icon: <AdminPanelSettingsIcon />,
    },
    {
      kind: "page",
      segment: "locations",
      title: t("navigation.locations"),
      icon: <LocationOnIcon />,
    },
  ];
  const session: Session | null = user
    ? {
        user: {
          name: user.name,
          email: user.email,
        },
      }
    : null;

  const authentication = useMemo(
    () => ({
      signIn: () => {
        navigate("/login");
      },
      signOut: () => {
        setIsSignOutOpen(true);
      },
    }),
    [navigate],
  );

  const handleCloseSignOut = () => {
    setIsSignOutOpen(false);
  };

  const handleConfirmSignOut = async () => {
    try {
      await logout().unwrap();
    } finally {
      localStorage.removeItem("authToken");
      localStorage.removeItem("authUser");
      setIsSignOutOpen(false);
      navigate("/login");
    }
  };

  return (
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={navigation}
      theme={theme}
      branding={{ logo: false, title: t("app.title") }}
      router={{
        navigate: (path) => navigate(path),
        pathname: window.location.pathname,
        searchParams: new URLSearchParams(window.location.search),
      }}
    >
      <DashboardLayout
        slots={{
          toolbarActions: () => (
            <Stack direction="row" alignItems="center" spacing={1}>
              <Box sx={{ my: "auto" }}>
                <LanguageSwitcher />
              </Box>
              <Account
                slots={{
                  popoverContent: () => (
                    <Stack direction="column">
                      <Stack
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        sx={{ px: 2, py: 1 }}
                      >
                        <Avatar alt={user?.name ?? ""}>
                          {(user?.name ?? "?").slice(0, 1).toUpperCase()}
                        </Avatar>
                        <Stack direction="column" overflow="hidden">
                          <Typography
                            variant="body2"
                            fontWeight="bolder"
                            noWrap
                            textAlign="right"
                          >
                            {user?.name ?? t("profile.userFallback")}
                          </Typography>
                          <Button
                            component={RouterLink}
                            to="/profile"
                            size="small"
                            variant="text"
                            sx={{ justifyContent: "flex-start" }}
                          >
                            {t("profile.view")}
                          </Button>
                        </Stack>
                      </Stack>
                      <Divider />
                      <AccountPopoverFooter>
                        <SignOutButton />
                      </AccountPopoverFooter>
                    </Stack>
                  ),
                }}
              />
            </Stack>
          ),
        }}
      >
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            "& > *": {
              flex: 1,
              minHeight: 0,
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <Outlet />
        </Box>
      </DashboardLayout>
      <Dialog open={isSignOutOpen} onClose={handleCloseSignOut}>
        <DialogTitle>{t("signOut.title")}</DialogTitle>
        <DialogContent>
          <DialogContentText>{t("signOut.confirmation")}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSignOut}>{t("common.cancel")}</Button>
          <Button onClick={handleConfirmSignOut} variant="contained">
            {t("signOut.action")}
          </Button>
        </DialogActions>
      </Dialog>
    </AppProvider>
  );
}
