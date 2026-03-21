import { Outlet, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SettingsPhoneIcon from "@mui/icons-material/SettingsPhone";
import DescriptionIcon from "@mui/icons-material/Description";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CampaignIcon from "@mui/icons-material/Campaign";
import BusinessIcon from "@mui/icons-material/Business";
import SecurityIcon from "@mui/icons-material/Security";
import GroupsIcon from "@mui/icons-material/Groups";
import WorkIcon from "@mui/icons-material/Work";
import PhoneIcon from "@mui/icons-material/Phone";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ChatIcon from "@mui/icons-material/Chat";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import { DashboardSidebarPageItem } from "@toolpad/core/DashboardLayout";
import type { Navigation, NavigationPageItem, Session } from "@toolpad/core";
import { Account, AccountPopoverFooter } from "@toolpad/core/Account";
import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/features/auth/useAuth";
import { useLogoutMutation } from "@/features/auth/authApi";
import { useGetAgentMeQuery } from "@/features/agent/agentApi";
import { AgentWorkLogProvider } from "@/features/agent/AgentWorkLogContext";
import {
  getAgentSettings,
  storeAgentSettings,
} from "@/features/agent/agentSettings";
import { useWorkStatus } from "@/features/agent/WorkStatusContext";
import { theme } from "@/theme";
import LanguageSwitcher from "@/components/common/LanguageSwitcher/LanguageSwitcher";
import WorkplaceStatusDropdown from "@/components/header/WorkplaceStatusDropdown/WorkplaceStatusDropdown";
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
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.svg";
import { ChatProvider, useChat } from "@/features/chat/ChatContext";
import { ChatWindow } from "@/features/chat/ChatWindow";
import { WorkStatusProvider } from "@/features/agent/WorkStatusContext";

export default function MainLayout() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [logout, { isLoading }] = useLogoutMutation();
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);
  const { t } = useTranslation();
  const isAdmin = user?.role?.toLowerCase() === "admin";

  const { data: agentMe } = useGetAgentMeQuery(undefined, {
    skip: isAdmin || !user,
  });

  useEffect(() => {
    if (agentMe) {
      const current = getAgentSettings();
      storeAgentSettings({
        ...current,
        campaign: agentMe.campaign ?? null,
        script: agentMe.script ?? null,
      });
    }
  }, [agentMe]);

  const adminNavigation: Navigation = [
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
    {
      kind: "page",
      segment: "sips",
      title: t("navigation.sips"),
      icon: <SettingsPhoneIcon />,
    },
    {
      kind: "page",
      segment: "scripts",
      title: t("navigation.scripts"),
      icon: <DescriptionIcon />,
    },
    {
      kind: "page",
      segment: "agents",
      title: t("navigation.agents"),
      icon: <SupportAgentIcon />,
    },
    {
      kind: "page",
      segment: "campaigns",
      title: t("navigation.campaigns"),
      icon: <CampaignIcon />,
    },
    {
      kind: "page",
      segment: "clients",
      title: t("navigation.clients"),
      icon: <BusinessIcon />,
    },
    {
      kind: "page",
      segment: "ip-whitelist",
      title: t("navigation.ipWhitelist"),
      icon: <SecurityIcon />,
    },
    {
      kind: "page",
      segment: "teams",
      title: t("navigation.teams"),
      icon: <GroupsIcon />,
    },
    {
      kind: "page",
      segment: "workplaces",
      title: t("navigation.workplaces"),
      icon: <WorkIcon />,
    },
  ];

  const agentNavigation: Navigation = [
    {
      kind: "page",
      segment: "",
      title: t("navigation.calls"),
      icon: <PhoneIcon />,
    },
    {
      kind: "page",
      segment: "tasks",
      title: t("navigation.tasks"),
      icon: <TaskAltIcon />,
    },
  ];

  const navigation = isAdmin ? adminNavigation : agentNavigation;
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
      const settings = getAgentSettings();
      const { campaign, script, ...rest } = settings;
      storeAgentSettings(rest);
      setIsSignOutOpen(false);
      navigate("/login");
    }
  };

  return (
    <WorkStatusProvider>
      <ChatProvider>
        <MainLayoutContent
          isAdmin={isAdmin}
          user={user}
          navigation={navigation}
          session={session}
          authentication={authentication}
          isSignOutOpen={isSignOutOpen}
          setIsSignOutOpen={setIsSignOutOpen}
          handleCloseSignOut={handleCloseSignOut}
          handleConfirmSignOut={handleConfirmSignOut}
          isLoading={isLoading}
          t={t}
        />
      </ChatProvider>
    </WorkStatusProvider>
  );
}

function MainLayoutContent({
  isAdmin,
  user,
  navigation,
  session,
  authentication,
  isSignOutOpen,
  setIsSignOutOpen,
  handleCloseSignOut,
  handleConfirmSignOut,
  isLoading,
  t,
}: {
  isAdmin: boolean;
  user: { name?: string; email?: string; role?: string } | null;
  navigation: Navigation;
  session: Session | null;
  authentication: { signIn: () => void; signOut: () => void };
  isSignOutOpen: boolean;
  setIsSignOutOpen: (v: boolean) => void;
  handleCloseSignOut: () => void;
  handleConfirmSignOut: () => Promise<void>;
  isLoading: boolean;
  t: (key: string) => string;
}) {
  const navigate = useNavigate();
  const chat = useChat();
  const workStatus = useWorkStatus();
  const isNavDisabled = !isAdmin && workStatus?.status !== "Ready";

  return (
    <AgentWorkLogProvider>
      <AppProvider
        session={session}
        authentication={authentication}
        navigation={navigation}
        theme={theme}
        branding={{
          logo: (
            <Box
              component="img"
              src={logo}
              alt={t("app.title")}
              sx={{ height: 38 }}
            />
          ),
          title: "",
        }}
        router={{
          navigate: (path: string | URL) =>
            navigate(typeof path === "string" ? path : path.pathname),
          pathname: window.location.pathname,
          searchParams: new URLSearchParams(window.location.search),
        }}
      >
        <DashboardLayout
          renderPageItem={
            !isAdmin
              ? (item: NavigationPageItem) => {
                  const isCalls = item.segment === "";
                  const isTasks = item.segment === "tasks";
                  const disabled =
                    (isCalls || isTasks) &&
                    (Boolean(chat?.isChatOpen) || isNavDisabled);
                  return (
                    <DashboardSidebarPageItem
                      key={item.segment ?? "calls"}
                      item={item}
                      disabled={disabled}
                    />
                  );
                }
              : undefined
          }
          slots={{
            sidebarFooter:
              !isAdmin && chat
                ? ({ mini }) => (
                    <Box sx={{ mt: "auto", pt: 1 }}>
                      <ListItemButton
                        onClick={chat.toggleChat}
                        selected={chat.isChatOpen}
                        sx={{
                          minHeight: 48,
                          mx: 1,
                          mb: 1,
                          borderRadius: 1,
                          flexDirection: mini ? "column" : "row",
                          justifyContent: mini ? "center" : "flex-start",
                          alignItems: "center",
                          gap: mini ? 0.5 : 0,
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: mini ? 0 : 40,
                            justifyContent: "center",
                          }}
                        >
                          <ChatIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={t("navigation.chat")}
                          sx={{
                            m: 0,
                            "& .MuiListItemText-primary": {
                              fontSize: mini ? "0.75rem" : undefined,
                              textAlign: mini ? "center" : "left",
                            },
                          }}
                        />
                      </ListItemButton>
                    </Box>
                  )
                : undefined,
            toolbarActions: () => (
              <Stack direction="row" alignItems="center" spacing={1}>
                {!isAdmin && <WorkplaceStatusDropdown />}
                <Box sx={{ my: "auto" }}>
                  <LanguageSwitcher />
                </Box>
                <Box>
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
                        <Avatar alt={user?.name ?? ""} src={""} />
                        <Stack direction="column" overflow="hidden">
                          <Typography variant="body2" fontWeight={700} noWrap>
                            {user?.name ?? t("profile.userFallback")}
                          </Typography>
                          <Typography
                            variant="caption"
                            color="text.secondary"
                            sx={{ textTransform: "capitalize" }}
                          >
                            {user?.role}
                          </Typography>
                        </Stack>
                      </Stack>
                      <Divider />
                      <AccountPopoverFooter>
                        <Button
                          fullWidth
                          onClick={() => setIsSignOutOpen(true)}
                        >
                          {t("signOut.action")}
                        </Button>
                      </AccountPopoverFooter>
                    </Stack>
                  ),
                }}
              />
              </Box>
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
              position: "relative",
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
            <ChatWindow />
          </Box>
        </DashboardLayout>
        <Dialog open={isSignOutOpen} onClose={handleCloseSignOut}>
          <DialogTitle>{t("signOut.title")}</DialogTitle>
          <DialogContent sx={{ pt: `0 !important` }}>
            <DialogContentText>{t("signOut.confirmation")}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseSignOut} disabled={isLoading}>
              {t("common.cancel")}
            </Button>
            <Button
              onClick={handleConfirmSignOut}
              variant="contained"
              disabled={isLoading}
              loading={isLoading}
            >
              {t("signOut.action")}
            </Button>
          </DialogActions>
        </Dialog>
      </AppProvider>
    </AgentWorkLogProvider>
  );
}
