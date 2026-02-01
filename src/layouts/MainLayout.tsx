import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import { AppProvider, DashboardLayout } from "@toolpad/core";
import type { Navigation, Session } from "@toolpad/core";
import {
  Account,
  AccountPopoverFooter,
  SignOutButton,
} from "@toolpad/core/Account";
import { useMemo, useState } from "react";
import Cookies from "js-cookie";
import { useAuth } from "@/features/auth/useAuth";
import { useLogoutMutation } from "@/features/auth/authApi";
import { theme } from "@/theme";
import {
  Avatar,
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

export default function MainLayout() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [logout] = useLogoutMutation();
  const [isSignOutOpen, setIsSignOutOpen] = useState(false);
  const navigation: Navigation = [
    {
      kind: "page",
      segment: "",
      title: "Dashboard",
      icon: <HomeIcon />,
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
      Cookies.remove("authToken", { path: "/" });
      Cookies.remove("authUser", { path: "/" });
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
      branding={{ logo: false, title: "Call center" }}
      router={{
        navigate: (path) => navigate(path),
        pathname: window.location.pathname,
        searchParams: new URLSearchParams(window.location.search),
      }}
    >
      <DashboardLayout
        slots={{
          toolbarActions: () => (
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
                        <Typography variant="body2" fontWeight="bolder" noWrap>
                          {user?.name ?? "User"}
                        </Typography>
                        <Button
                          component={RouterLink}
                          to="/profile"
                          size="small"
                          variant="text"
                          sx={{ justifyContent: "flex-start" }}
                        >
                          View profile
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
          ),
        }}
      >
        <Outlet />
      </DashboardLayout>
      <Dialog open={isSignOutOpen} onClose={handleCloseSignOut}>
        <DialogTitle>Sign out</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to sign out?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseSignOut}>Cancel</Button>
          <Button onClick={handleConfirmSignOut} variant="contained">
            Sign out
          </Button>
        </DialogActions>
      </Dialog>
    </AppProvider>
  );
}
