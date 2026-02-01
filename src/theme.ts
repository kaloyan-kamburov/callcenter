import * as React from "react";
import { createTheme } from "@mui/material/styles";
import type { LinkProps as MuiLinkProps } from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import type { LinkProps as RouterLinkProps } from "react-router-dom";

export const theme = createTheme({
  cssVariables: { colorSchemeSelector: "data-toolpad-color-scheme" },
  colorSchemes: { light: true },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#9c27b0",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: [
      '"Nunito Sans"',
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    fontWeightLight: 100,
    fontWeightRegular: 300,
    fontWeightMedium: 600,
    body1: { fontWeight: 300 },
    body2: { fontWeight: 300 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100dvh",
        },
        body: {
          minHeight: "100dvh",
        },
        "#root": {
          minHeight: "100dvh",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        component: React.forwardRef<
          HTMLAnchorElement,
          Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
        >(function LinkBehavior(props, ref) {
          const { href, ...other } = props;
          return React.createElement(RouterLink, { ref, to: href, ...other });
        }) as MuiLinkProps["component"],
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: React.forwardRef<
          HTMLAnchorElement,
          Omit<RouterLinkProps, "to"> & { href: RouterLinkProps["to"] }
        >(function LinkBehavior(props, ref) {
          const { href, ...other } = props;
          return React.createElement(RouterLink, { ref, to: href, ...other });
        }),
      },
    },
  },
});
