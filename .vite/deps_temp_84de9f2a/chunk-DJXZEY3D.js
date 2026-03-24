import {
  Account
} from "./chunk-VOQL6DBG.js";
import {
  Link,
  getItemPath,
  getItemTitle,
  hasSelectedNavigationChildren,
  isPageItem,
  useActivePage
} from "./chunk-4NUYUSI7.js";
import {
  BrandingContext,
  DashboardSidebarPageItemContext,
  NavigationContext,
  PaletteModeContext,
  WindowContext,
  require_browser
} from "./chunk-JANN4EKF.js";
import {
  AppBar_default,
  Avatar_default,
  Collapse_default,
  Drawer_default,
  ListItemButton_default,
  ListItem_default,
  Stack_default,
  useMediaQuery_default
} from "./chunk-UI65FZK7.js";
import {
  ListSubheader_default,
  Toolbar_default,
  Tooltip_default
} from "./chunk-SNYEUWQ6.js";
import {
  Divider_default,
  ListItemIcon_default,
  ListItemText_default
} from "./chunk-3YC5HKJF.js";
import {
  Typography_default
} from "./chunk-QGXQENJK.js";
import {
  Grow_default,
  List_default
} from "./chunk-DSEXQT6F.js";
import {
  Box_default
} from "./chunk-UTQ6B6VX.js";
import {
  Paper_default
} from "./chunk-UXST6MBD.js";
import {
  IconButton_default
} from "./chunk-HB5AIT6U.js";
import {
  createSvgIcon
} from "./chunk-BKRUDB4B.js";
import {
  require_prop_types,
  styled_default2 as styled_default,
  useTheme
} from "./chunk-3NB4NH7D.js";
import {
  require_jsx_runtime
} from "./chunk-6BPC6FNR.js";
import {
  require_react
} from "./chunk-I4BD4AGR.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/DashboardLayout.js
var React10 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@toolpad+utils@0.16.0_react@19.2.3/node_modules/@toolpad/utils/esm/warnOnce.js
var history = /* @__PURE__ */ new Set();
function warnOnce(msg) {
  if (!history.has(msg)) {
    history.add(msg);
    console.warn(msg);
  }
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/DashboardHeader.js
var React7 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/Menu.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var Menu_default = createSvgIcon((0, import_jsx_runtime.jsx)("path", {
  d: "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"
}), "Menu");

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/MenuOpen.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var MenuOpen_default = createSvgIcon((0, import_jsx_runtime2.jsx)("path", {
  d: "M3 18h13v-2H3zm0-5h10v-2H3zm0-7v2h13V6zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5z"
}), "MenuOpen");

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/AppTitle.js
var React3 = __toESM(require_react(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/ToolpadLogo.js
var React = __toESM(require_react(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var _g;
var _path;
var _g2;
var _path2;
var _g3;
function ToolpadLogo({
  size = 40
}) {
  return (0, import_jsx_runtime3.jsxs)("svg", {
    width: size,
    height: size,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [_g || (_g = (0, import_jsx_runtime3.jsxs)("g", {
      mask: "url(#a)",
      children: [(0, import_jsx_runtime3.jsx)("path", {
        d: "M22.74 27.73v-7.6l6.64-3.79v7.6l-6.64 3.79Z",
        fill: "#007FFF"
      }), (0, import_jsx_runtime3.jsx)("path", {
        d: "M16.1 23.93v-7.59l6.64 3.8v7.59l-6.65-3.8Z",
        fill: "#39F"
      }), (0, import_jsx_runtime3.jsx)("path", {
        d: "m16.1 16.34 6.64-3.8 6.64 3.8-6.64 3.8-6.65-3.8Z",
        fill: "#A5D8FF"
      })]
    })), (0, import_jsx_runtime3.jsx)("mask", {
      id: "b",
      style: {
        maskType: "alpha"
      },
      maskUnits: "userSpaceOnUse",
      x: "8",
      y: "17",
      width: "14",
      height: "15",
      children: _path || (_path = (0, import_jsx_runtime3.jsx)("path", {
        d: "M8.5 22.3c0-1.05.56-2 1.46-2.53l3.75-2.14c.89-.5 1.98-.5 2.87 0l3.75 2.14a2.9 2.9 0 0 1 1.46 2.52v4.23c0 1.04-.56 2-1.46 2.52l-3.75 2.14c-.89.5-1.98.5-2.87 0l-3.75-2.14a2.9 2.9 0 0 1-1.46-2.52v-4.23Z",
        fill: "#D7DCE1"
      }))
    }), _g2 || (_g2 = (0, import_jsx_runtime3.jsxs)("g", {
      mask: "url(#b)",
      children: [(0, import_jsx_runtime3.jsx)("path", {
        d: "M15.14 32v-7.6l6.65-3.8v7.6L15.14 32Z",
        fill: "#007FFF"
      }), (0, import_jsx_runtime3.jsx)("path", {
        d: "M8.5 28.2v-7.6l6.64 3.8V32L8.5 28.2Z",
        fill: "#39F"
      }), (0, import_jsx_runtime3.jsx)("path", {
        d: "m8.5 20.6 6.64-3.79 6.65 3.8-6.65 3.8-6.64-3.8Z",
        fill: "#A5D8FF"
      })]
    })), (0, import_jsx_runtime3.jsx)("mask", {
      id: "c",
      style: {
        maskType: "alpha"
      },
      maskUnits: "userSpaceOnUse",
      x: "8",
      y: "4",
      width: "22",
      height: "20",
      children: _path2 || (_path2 = (0, import_jsx_runtime3.jsx)("path", {
        d: "M24.17 4.82a2.9 2.9 0 0 0-2.87 0L9.97 11.22a2.9 2.9 0 0 0-1.47 2.53v4.22c0 1.04.56 2 1.46 2.52l3.75 2.14c.89.5 1.98.5 2.87 0l11.33-6.42a2.9 2.9 0 0 0 1.47-2.52V9.48c0-1.04-.56-2-1.46-2.52l-3.75-2.14Z",
        fill: "#D7DCE1"
      }))
    }), _g3 || (_g3 = (0, import_jsx_runtime3.jsxs)("g", {
      mask: "url(#c)",
      children: [(0, import_jsx_runtime3.jsx)("path", {
        d: "M15.14 23.46v-7.6L29.38 7.8v7.59l-14.24 8.07Z",
        fill: "#007FFF"
      }), (0, import_jsx_runtime3.jsx)("path", {
        d: "M8.5 19.66v-7.6l6.64 3.8v7.6l-6.64-3.8Z",
        fill: "#39F"
      }), (0, import_jsx_runtime3.jsx)("path", {
        d: "M8.5 12.07 22.74 4l6.64 3.8-14.24 8.06-6.64-3.8Z",
        fill: "#A5D8FF"
      })]
    }))]
  });
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/shared/branding.js
var React2 = __toESM(require_react(), 1);
function useApplicationTitle() {
  const branding = React2.useContext(BrandingContext);
  return branding?.title ?? "Toolpad";
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/AppTitle.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var _ToolpadLogo;
var LogoContainer = styled_default("div")({
  position: "relative",
  height: 40,
  display: "flex",
  alignItems: "center",
  "& img": {
    maxHeight: 40
  }
});
function AppTitle(props) {
  const theme = useTheme();
  const defaultTitle = useApplicationTitle();
  const title = props?.branding?.title ?? defaultTitle;
  return (0, import_jsx_runtime4.jsx)(Link, {
    href: props?.branding?.homeUrl ?? "/",
    style: {
      textDecoration: "none"
    },
    children: (0, import_jsx_runtime4.jsxs)(Stack_default, {
      direction: "row",
      alignItems: "center",
      children: [(0, import_jsx_runtime4.jsx)(LogoContainer, {
        children: props?.branding?.logo ?? (_ToolpadLogo || (_ToolpadLogo = (0, import_jsx_runtime4.jsx)(ToolpadLogo, {
          size: 40
        })))
      }), (0, import_jsx_runtime4.jsx)(Typography_default, {
        variant: "h6",
        sx: {
          color: (theme.vars ?? theme).palette.primary.main,
          fontWeight: "700",
          ml: 1,
          whiteSpace: "nowrap",
          lineHeight: 1
        },
        children: title
      })]
    })
  });
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/ToolbarActions.js
var React6 = __toESM(require_react(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/ThemeSwitcher.js
var React5 = __toESM(require_react(), 1);

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/DarkMode.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var DarkMode_default = createSvgIcon((0, import_jsx_runtime5.jsx)("path", {
  d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1"
}), "DarkMode");

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/LightMode.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var LightMode_default = createSvgIcon((0, import_jsx_runtime6.jsx)("path", {
  d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5M2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1m18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1M11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1m0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1M5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0z"
}), "LightMode");

// node_modules/.pnpm/@toolpad+utils@0.16.0_react@19.2.3/node_modules/@toolpad/utils/esm/hooks/useSsr.js
var React4 = __toESM(require_react());
function subscribe() {
  return () => {
  };
}
function getSnapshot() {
  return false;
}
function getServerSnapshot() {
  return true;
}
function useSsr() {
  return React4.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/ThemeSwitcher.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var _DarkModeIcon;
var _LightModeIcon;
function ThemeSwitcher() {
  const isSsr = useSsr();
  const theme = useTheme();
  const {
    paletteMode,
    setPaletteMode,
    isDualTheme
  } = React5.useContext(PaletteModeContext);
  const toggleMode = React5.useCallback(() => {
    setPaletteMode(paletteMode === "dark" ? "light" : "dark");
  }, [paletteMode, setPaletteMode]);
  return isDualTheme ? (0, import_jsx_runtime7.jsx)(Tooltip_default, {
    title: isSsr ? "Switch mode" : `${paletteMode === "dark" ? "Light" : "Dark"} mode`,
    enterDelay: 1e3,
    children: (0, import_jsx_runtime7.jsx)("div", {
      children: (0, import_jsx_runtime7.jsx)(IconButton_default, {
        "aria-label": isSsr ? "Switch theme mode" : `Switch to ${paletteMode === "dark" ? "light" : "dark"} mode`,
        onClick: toggleMode,
        sx: {
          color: (theme.vars ?? theme).palette.primary.dark
        },
        children: theme.getColorSchemeSelector ? (0, import_jsx_runtime7.jsxs)(React5.Fragment, {
          children: [(0, import_jsx_runtime7.jsx)(DarkMode_default, {
            sx: {
              display: "inline",
              [theme.getColorSchemeSelector("dark")]: {
                display: "none"
              }
            }
          }), (0, import_jsx_runtime7.jsx)(LightMode_default, {
            sx: {
              display: "none",
              [theme.getColorSchemeSelector("dark")]: {
                display: "inline"
              }
            }
          })]
        }) : (0, import_jsx_runtime7.jsx)(React5.Fragment, {
          children: isSsr || paletteMode !== "dark" ? _DarkModeIcon || (_DarkModeIcon = (0, import_jsx_runtime7.jsx)(DarkMode_default, {})) : _LightModeIcon || (_LightModeIcon = (0, import_jsx_runtime7.jsx)(LightMode_default, {}))
        })
      })
    })
  }) : null;
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/ToolbarActions.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
var _Stack;
function ToolbarActions() {
  return _Stack || (_Stack = (0, import_jsx_runtime8.jsxs)(Stack_default, {
    direction: "row",
    alignItems: "center",
    children: [(0, import_jsx_runtime8.jsx)(ThemeSwitcher, {}), (0, import_jsx_runtime8.jsx)(Account, {})]
  }));
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/DashboardHeader.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
var _MenuOpenIcon;
var _MenuIcon;
var AppBar = styled_default(AppBar_default)(({
  theme
}) => ({
  borderWidth: 0,
  borderBottomWidth: 1,
  borderStyle: "solid",
  borderColor: (theme.vars ?? theme).palette.divider,
  boxShadow: "none",
  zIndex: theme.zIndex.drawer + 1
}));
function DashboardHeader(props) {
  const {
    branding: brandingProp,
    menuOpen,
    onToggleMenu,
    hideMenuButton,
    slots,
    slotProps
  } = props;
  const brandingContext = React7.useContext(BrandingContext);
  const branding = {
    ...brandingContext,
    ...brandingProp
  };
  const handleMenuOpen = React7.useCallback(() => {
    onToggleMenu(!menuOpen);
  }, [menuOpen, onToggleMenu]);
  const getMenuIcon = React7.useCallback((isExpanded) => {
    const expandMenuActionText = "Expand";
    const collapseMenuActionText = "Collapse";
    return (0, import_jsx_runtime9.jsx)(Tooltip_default, {
      title: `${isExpanded ? collapseMenuActionText : expandMenuActionText} menu`,
      enterDelay: 1e3,
      children: (0, import_jsx_runtime9.jsx)("div", {
        children: (0, import_jsx_runtime9.jsx)(IconButton_default, {
          "aria-label": `${isExpanded ? collapseMenuActionText : expandMenuActionText} navigation menu`,
          onClick: handleMenuOpen,
          children: isExpanded ? _MenuOpenIcon || (_MenuOpenIcon = (0, import_jsx_runtime9.jsx)(MenuOpen_default, {})) : _MenuIcon || (_MenuIcon = (0, import_jsx_runtime9.jsx)(Menu_default, {}))
        })
      })
    });
  }, [handleMenuOpen]);
  const ToolbarActionsSlot = slots?.toolbarActions ?? ToolbarActions;
  const ToolbarAccountSlot = slots?.toolbarAccount ?? (() => null);
  return (0, import_jsx_runtime9.jsx)(AppBar, {
    color: "inherit",
    position: "absolute",
    sx: {
      displayPrint: "none"
    },
    children: (0, import_jsx_runtime9.jsx)(Toolbar_default, {
      sx: {
        backgroundColor: "inherit",
        mx: {
          xs: -0.75,
          sm: -1
        }
      },
      children: (0, import_jsx_runtime9.jsxs)(Stack_default, {
        direction: "row",
        justifyContent: "space-between",
        alignItems: "center",
        sx: {
          flexWrap: "wrap",
          width: "100%"
        },
        children: [(0, import_jsx_runtime9.jsxs)(Stack_default, {
          direction: "row",
          children: [!hideMenuButton ? (0, import_jsx_runtime9.jsxs)(React7.Fragment, {
            children: [(0, import_jsx_runtime9.jsx)(Box_default, {
              sx: {
                display: {
                  xs: "block",
                  md: "none"
                },
                mr: {
                  sm: 1
                }
              },
              children: getMenuIcon(menuOpen)
            }), (0, import_jsx_runtime9.jsx)(Box_default, {
              sx: {
                display: {
                  xs: "none",
                  md: "block"
                },
                mr: 1
              },
              children: getMenuIcon(menuOpen)
            })]
          }) : null, slots?.appTitle ? (0, import_jsx_runtime9.jsx)(slots.appTitle, {
            ...slotProps?.appTitle
          }) : (
            /* Hierarchy of application of `branding`
             * 1. Branding prop passed in the `slotProps.appTitle`
             * 2. Branding prop passed to the `DashboardLayout`
             * 3. Branding prop passed to the `AppProvider`
             */
            (0, import_jsx_runtime9.jsx)(AppTitle, {
              branding,
              ...slotProps?.appTitle
            })
          )]
        }), (0, import_jsx_runtime9.jsxs)(Stack_default, {
          direction: "row",
          alignItems: "center",
          spacing: 1,
          sx: {
            marginLeft: "auto"
          },
          children: [(0, import_jsx_runtime9.jsx)(ToolbarActionsSlot, {
            ...slotProps?.toolbarActions
          }), (0, import_jsx_runtime9.jsx)(ToolbarAccountSlot, {
            ...slotProps?.toolbarAccount
          })]
        })]
      })
    })
  });
}
true ? DashboardHeader.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Branding options for the header.
   * @default null
   */
  branding: import_prop_types.default.shape({
    homeUrl: import_prop_types.default.string,
    logo: import_prop_types.default.node,
    title: import_prop_types.default.string
  }),
  /**
   * Whether the menu icon should always be hidden.
   * @default false
   */
  hideMenuButton: import_prop_types.default.bool,
  /**
   * If `true`, show menu button as if menu is expanded, otherwise show it as if menu is collapsed.
   */
  menuOpen: import_prop_types.default.bool.isRequired,
  /**
   * Callback fired when the menu button is clicked.
   */
  onToggleMenu: import_prop_types.default.func.isRequired,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types.default.shape({
    appTitle: import_prop_types.default.shape({
      branding: import_prop_types.default.shape({
        homeUrl: import_prop_types.default.string,
        logo: import_prop_types.default.node,
        title: import_prop_types.default.string
      })
    }),
    toolbarAccount: import_prop_types.default.shape({
      localeText: import_prop_types.default.object,
      slotProps: import_prop_types.default.shape({
        popover: import_prop_types.default.object,
        popoverContent: import_prop_types.default.object,
        preview: import_prop_types.default.object,
        signInButton: import_prop_types.default.object,
        signOutButton: import_prop_types.default.object
      }),
      slots: import_prop_types.default.shape({
        popover: import_prop_types.default.elementType,
        popoverContent: import_prop_types.default.elementType,
        preview: import_prop_types.default.elementType,
        signInButton: import_prop_types.default.elementType,
        signOutButton: import_prop_types.default.elementType
      })
    }),
    toolbarActions: import_prop_types.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types.default.shape({
    appTitle: import_prop_types.default.elementType,
    toolbarAccount: import_prop_types.default.elementType,
    toolbarActions: import_prop_types.default.elementType
  })
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/DashboardSidebarSubNavigation.js
var React9 = __toESM(require_react(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/utils.js
function getDrawerSxTransitionMixin(isExpanded, property) {
  return {
    transition: (theme) => theme.transitions.create(property, {
      easing: theme.transitions.easing.sharp,
      duration: isExpanded ? theme.transitions.duration.enteringScreen : theme.transitions.duration.leavingScreen
    })
  };
}
function getDrawerWidthTransitionMixin(isExpanded) {
  return {
    ...getDrawerSxTransitionMixin(isExpanded, "width"),
    overflowX: "hidden"
  };
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/DashboardSidebarPageItem.js
var React8 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/ExpandMore.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime());
var ExpandMore_default = createSvgIcon((0, import_jsx_runtime10.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/DashboardSidebarPageItem.js
var import_invariant = __toESM(require_browser(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/shared.js
var MINI_DRAWER_WIDTH = 84;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/DashboardSidebarPageItem.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var NavigationListItemButton = styled_default(ListItemButton_default)(({
  theme
}) => ({
  borderRadius: 8,
  "&.Mui-selected": {
    "& .MuiListItemIcon-root": {
      color: (theme.vars ?? theme).palette.primary.dark
    },
    "& .MuiTypography-root": {
      color: (theme.vars ?? theme).palette.primary.dark
    },
    "& .MuiSvgIcon-root": {
      color: (theme.vars ?? theme).palette.primary.dark
    },
    "& .MuiAvatar-root": {
      backgroundColor: (theme.vars ?? theme).palette.primary.dark
    },
    "& .MuiTouchRipple-child": {
      backgroundColor: (theme.vars ?? theme).palette.primary.dark
    }
  },
  "& .MuiSvgIcon-root": {
    color: (theme.vars ?? theme).palette.action.active
  },
  "& .MuiAvatar-root": {
    backgroundColor: (theme.vars ?? theme).palette.action.active
  }
}));
var LIST_ITEM_ICON_SIZE = 34;
function DashboardSidebarPageItem(props) {
  const navigationContext = React8.useContext(NavigationContext);
  const pageItemContextProps = React8.useContext(DashboardSidebarPageItemContext);
  (0, import_invariant.default)(pageItemContextProps, "No navigation page item context provided.");
  const contextAwareProps = {
    ...pageItemContextProps,
    ...props
  };
  const {
    item,
    href = getItemPath(navigationContext, item),
    LinkComponent: LinkComponentProp,
    expanded = false,
    selected = false,
    disabled = false,
    id,
    onClick,
    isMini = false,
    isSidebarFullyExpanded = true,
    isSidebarFullyCollapsed = false,
    renderNestedNavigation
  } = contextAwareProps;
  const [hoveredMiniSidebarItemId, setHoveredMiniSidebarItemId] = React8.useState(null);
  const handleClick = React8.useCallback(() => {
    onClick(id, item);
  }, [id, item, onClick]);
  let nestedNavigationCollapseSx = {
    display: "none"
  };
  if (isMini && isSidebarFullyCollapsed) {
    nestedNavigationCollapseSx = {
      fontSize: 18,
      position: "absolute",
      top: "41.5%",
      right: "2px",
      transform: "translateY(-50%) rotate(-90deg)"
    };
  } else if (!isMini && isSidebarFullyExpanded) {
    nestedNavigationCollapseSx = {
      ml: 0.5,
      transform: `rotate(${expanded ? 0 : -90}deg)`,
      transition: (theme) => theme.transitions.create("transform", {
        easing: theme.transitions.easing.sharp,
        duration: 100
      })
    };
  }
  const hasExternalHref = href.startsWith("http://") || href.startsWith("https://");
  const LinkComponent = LinkComponentProp ?? (hasExternalHref ? "a" : Link);
  const title = getItemTitle(item);
  const listItem = (0, import_jsx_runtime11.jsxs)(ListItem_default, {
    ...item.children && isMini ? {
      onMouseEnter: () => {
        setHoveredMiniSidebarItemId(id);
      },
      onMouseLeave: () => {
        setHoveredMiniSidebarItemId(null);
      }
    } : {},
    sx: {
      py: 0,
      px: 1,
      overflowX: "hidden"
    },
    children: [(0, import_jsx_runtime11.jsxs)(NavigationListItemButton, {
      selected,
      disabled,
      sx: {
        px: 1.4,
        height: isMini ? 60 : 48
      },
      ...item.children && !isMini ? {
        onClick: handleClick
      } : {},
      ...!item.children ? {
        LinkComponent,
        ...hasExternalHref ? {
          target: "_blank",
          rel: "noopener noreferrer"
        } : {},
        href,
        onClick: handleClick
      } : {},
      children: [item.icon || isMini ? (0, import_jsx_runtime11.jsxs)(Box_default, {
        sx: isMini ? {
          position: "absolute",
          left: "50%",
          top: "calc(50% - 6px)",
          transform: "translate(-50%, -50%)"
        } : {},
        children: [(0, import_jsx_runtime11.jsxs)(ListItemIcon_default, {
          sx: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: LIST_ITEM_ICON_SIZE
          },
          children: [item.icon ?? null, !item.icon && isMini ? (0, import_jsx_runtime11.jsx)(Avatar_default, {
            sx: {
              width: LIST_ITEM_ICON_SIZE - 7,
              height: LIST_ITEM_ICON_SIZE - 7,
              fontSize: 12
            },
            children: title.split(" ").slice(0, 2).map((titleWord) => titleWord.charAt(0).toUpperCase())
          }) : null]
        }), isMini ? (0, import_jsx_runtime11.jsx)(Typography_default, {
          variant: "caption",
          sx: {
            position: "absolute",
            bottom: -18,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 10,
            fontWeight: 500,
            textAlign: "center",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: MINI_DRAWER_WIDTH - 28
          },
          children: title
        }) : null]
      }) : null, !isMini ? (0, import_jsx_runtime11.jsx)(ListItemText_default, {
        primary: title,
        sx: {
          ml: 1.2,
          whiteSpace: "nowrap",
          zIndex: 1
        }
      }) : null, item.action && !isMini && isSidebarFullyExpanded ? item.action : null, item.children ? (0, import_jsx_runtime11.jsx)(ExpandMore_default, {
        sx: nestedNavigationCollapseSx
      }) : null]
    }), item.children && isMini ? (0, import_jsx_runtime11.jsx)(Grow_default, {
      in: id === hoveredMiniSidebarItemId,
      children: (0, import_jsx_runtime11.jsx)(Box_default, {
        sx: {
          position: "fixed",
          left: MINI_DRAWER_WIDTH - 2,
          pl: "6px"
        },
        children: (0, import_jsx_runtime11.jsx)(Paper_default, {
          sx: {
            pt: 0.5,
            pb: 0.5,
            transform: "translateY(calc(50% - 30px))"
          },
          children: renderNestedNavigation(item.children)
        })
      })
    }) : null]
  });
  return (0, import_jsx_runtime11.jsxs)(React8.Fragment, {
    children: [listItem, item.children && !isMini ? (0, import_jsx_runtime11.jsx)(Collapse_default, {
      in: expanded,
      timeout: "auto",
      unmountOnExit: true,
      children: renderNestedNavigation(item.children)
    }) : null]
  }, id);
}
true ? DashboardSidebarPageItem.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * If `true`, the item is disabled.
   * @default false
   */
  disabled: import_prop_types2.default.bool,
  /**
   * If `true`, expands any nested navigation in the item, otherwise collapse it.
   * @default false
   */
  expanded: import_prop_types2.default.bool,
  /**
   * Link `href` for when the item is rendered as a link.
   * @default getItemPath(navigationContext, item)
   */
  href: import_prop_types2.default.string,
  /**
   * Navigation page item definition.
   */
  item: import_prop_types2.default.shape({
    action: import_prop_types2.default.node,
    children: import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.object, import_prop_types2.default.shape({
      kind: import_prop_types2.default.oneOf(["header"]).isRequired,
      title: import_prop_types2.default.string.isRequired
    }), import_prop_types2.default.shape({
      kind: import_prop_types2.default.oneOf(["divider"]).isRequired
    })]).isRequired),
    icon: import_prop_types2.default.node,
    kind: import_prop_types2.default.oneOf(["page"]),
    pattern: import_prop_types2.default.string,
    segment: import_prop_types2.default.string,
    title: import_prop_types2.default.string
  }).isRequired,
  /**
   * The component used to render the item as a link.
   * @default Link
   */
  LinkComponent: import_prop_types2.default.elementType,
  /**
   * Use to apply selected styling.
   * @default false
   */
  selected: import_prop_types2.default.bool
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/DashboardSidebarSubNavigation.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
function DashboardSidebarSubNavigationPageItem({
  id,
  item,
  isExpanded,
  onClick,
  depth,
  onLinkClick,
  isMini,
  isFullyExpanded,
  isFullyCollapsed,
  sidebarExpandedWidth,
  renderPageItem
}) {
  const navigationContext = React9.useContext(NavigationContext);
  const activePage = useActivePage();
  const isActive = !!activePage && activePage.path === getItemPath(navigationContext, item);
  const isSelected = activePage && item.children && isMini ? hasSelectedNavigationChildren(navigationContext, item, activePage.path) : isActive && !item.children;
  const pageItemContextProps = React9.useMemo(() => ({
    expanded: isExpanded,
    selected: isSelected,
    id,
    onClick,
    isMini,
    isSidebarFullyExpanded: isFullyExpanded,
    isSidebarFullyCollapsed: isFullyCollapsed,
    renderNestedNavigation: () => (0, import_jsx_runtime12.jsx)(DashboardSidebarSubNavigation, {
      subNavigation: item.children ?? [],
      depth: depth + 1,
      onLinkClick,
      isPopover: isMini,
      sidebarExpandedWidth
    })
  }), [depth, id, isExpanded, isFullyCollapsed, isFullyExpanded, isMini, isSelected, item.children, onClick, onLinkClick, sidebarExpandedWidth]);
  return (0, import_jsx_runtime12.jsx)(DashboardSidebarPageItemContext.Provider, {
    value: pageItemContextProps,
    children: renderPageItem ? renderPageItem(item, {
      mini: isMini
    }) : (0, import_jsx_runtime12.jsx)(DashboardSidebarPageItem, {
      item
    })
  });
}
function DashboardSidebarSubNavigation({
  subNavigation,
  depth = 0,
  onLinkClick,
  isMini = false,
  isPopover = false,
  isFullyExpanded = true,
  isFullyCollapsed = false,
  hasDrawerTransitions = false,
  sidebarExpandedWidth,
  renderPageItem
}) {
  const navigationContext = React9.useContext(NavigationContext);
  const activePage = useActivePage();
  const initialExpandedItemIds = React9.useMemo(() => subNavigation.map((navigationItem, navigationItemIndex) => ({
    navigationItem,
    originalIndex: navigationItemIndex
  })).filter(({
    navigationItem
  }) => isPageItem(navigationItem) && !!activePage && hasSelectedNavigationChildren(navigationContext, navigationItem, activePage.path)).map(({
    originalIndex
  }) => `page-${depth}-${originalIndex}`), [activePage, depth, navigationContext, subNavigation]);
  const [expandedItemIds, setExpandedItemIds] = React9.useState(initialExpandedItemIds);
  const handlePageItemClick = React9.useCallback((itemId, item) => {
    if (item.children && !isMini) {
      setExpandedItemIds((previousValue) => previousValue.includes(itemId) ? previousValue.filter((previousValueItemId) => previousValueItemId !== itemId) : [...previousValue, itemId]);
    } else if (!item.children) {
      onLinkClick();
    }
  }, [isMini, onLinkClick]);
  return (0, import_jsx_runtime12.jsx)(List_default, {
    sx: {
      padding: 0,
      mt: isPopover && depth === 1 ? 0.5 : 0,
      mb: depth === 0 && !isPopover ? 4 : 0.5,
      pl: (isPopover ? 1 : 2) * (isPopover ? depth - 1 : depth),
      minWidth: isPopover && depth === 1 ? 240 : "auto",
      width: isMini ? MINI_DRAWER_WIDTH : "auto"
    },
    children: subNavigation.map((navigationItem, navigationItemIndex) => {
      if (navigationItem.kind === "header") {
        return (0, import_jsx_runtime12.jsx)(ListSubheader_default, {
          sx: {
            fontSize: 12,
            fontWeight: "700",
            height: isMini ? 0 : 40,
            ...hasDrawerTransitions ? getDrawerSxTransitionMixin(isFullyExpanded, "height") : {},
            px: 2,
            minWidth: sidebarExpandedWidth,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            zIndex: 2
          },
          children: getItemTitle(navigationItem)
        }, `subheader-${depth}-${navigationItemIndex}`);
      }
      if (navigationItem.kind === "divider") {
        const nextItem = subNavigation[navigationItemIndex + 1];
        return (0, import_jsx_runtime12.jsx)("li", {
          children: (0, import_jsx_runtime12.jsx)(Divider_default, {
            sx: {
              borderBottomWidth: 2,
              mx: 1,
              mt: 1,
              mb: nextItem?.kind === "header" && !isMini ? 0 : 1,
              ...hasDrawerTransitions ? getDrawerSxTransitionMixin(isFullyExpanded, "margin") : {}
            }
          })
        }, `divider-${depth}-${navigationItemIndex}`);
      }
      const pageItemId = `page-${depth}-${navigationItemIndex}`;
      return (0, import_jsx_runtime12.jsx)(DashboardSidebarSubNavigationPageItem, {
        id: pageItemId,
        item: navigationItem,
        isExpanded: expandedItemIds.includes(pageItemId),
        onClick: handlePageItemClick,
        depth,
        onLinkClick,
        isMini,
        isFullyExpanded,
        isFullyCollapsed,
        sidebarExpandedWidth,
        renderPageItem
      }, pageItemId);
    })
  });
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/DashboardLayout/DashboardLayout.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var _Toolbar;
function DashboardLayout(props) {
  const {
    children,
    branding,
    navigation: navigationProp,
    defaultSidebarCollapsed = false,
    disableCollapsibleSidebar = false,
    hideNavigation = false,
    sidebarExpandedWidth = 320,
    renderPageItem,
    slots,
    slotProps,
    sx
  } = props;
  if (navigationProp && true) {
    warnOnce("The navigation prop in the DashboardLayout component is deprecated and will eventually be removed. Set the navigation prop in the AppProvider instead (https://mui.com/toolpad/core/react-app-provider/#navigation).");
  }
  const theme = useTheme();
  const navigationContext = React10.useContext(NavigationContext);
  const appWindowContext = React10.useContext(WindowContext);
  const navigation = navigationProp ?? navigationContext;
  const [isDesktopNavigationExpanded, setIsDesktopNavigationExpanded] = React10.useState(!defaultSidebarCollapsed);
  const [isMobileNavigationExpanded, setIsMobileNavigationExpanded] = React10.useState(false);
  const isOverSmViewport = useMediaQuery_default(theme.breakpoints.up("sm"), appWindowContext && {
    matchMedia: appWindowContext.matchMedia
  });
  const isOverMdViewport = useMediaQuery_default(theme.breakpoints.up("md"), appWindowContext && {
    matchMedia: appWindowContext.matchMedia
  });
  const isNavigationExpanded = isOverMdViewport ? isDesktopNavigationExpanded : isMobileNavigationExpanded;
  const setIsNavigationExpanded = React10.useCallback((newExpanded) => {
    if (isOverMdViewport) {
      setIsDesktopNavigationExpanded(newExpanded);
    } else {
      setIsMobileNavigationExpanded(newExpanded);
    }
  }, [isOverMdViewport]);
  const [isNavigationFullyExpanded, setIsNavigationFullyExpanded] = React10.useState(isNavigationExpanded);
  const [isNavigationFullyCollapsed, setIsNavigationFullyCollapsed] = React10.useState(!isNavigationExpanded);
  React10.useEffect(() => {
    if (isNavigationExpanded) {
      const drawerWidthTransitionTimeout = setTimeout(() => {
        setIsNavigationFullyExpanded(true);
      }, theme.transitions.duration.enteringScreen);
      return () => clearTimeout(drawerWidthTransitionTimeout);
    }
    setIsNavigationFullyExpanded(false);
    return () => {
    };
  }, [isNavigationExpanded, theme]);
  React10.useEffect(() => {
    if (!isNavigationExpanded) {
      const drawerWidthTransitionTimeout = setTimeout(() => {
        setIsNavigationFullyCollapsed(true);
      }, theme.transitions.duration.leavingScreen);
      return () => clearTimeout(drawerWidthTransitionTimeout);
    }
    setIsNavigationFullyCollapsed(false);
    return () => {
    };
  }, [isNavigationExpanded, theme]);
  const handleSetNavigationExpanded = React10.useCallback((newExpanded) => () => {
    setIsNavigationExpanded(newExpanded);
  }, [setIsNavigationExpanded]);
  const handleToggleHeaderMenu = React10.useCallback((isExpanded) => {
    setIsNavigationExpanded(isExpanded);
  }, [setIsNavigationExpanded]);
  const handleNavigationLinkClick = React10.useCallback(() => {
    setIsMobileNavigationExpanded(false);
  }, [setIsMobileNavigationExpanded]);
  const isDesktopMini = !disableCollapsibleSidebar && !isDesktopNavigationExpanded;
  const isMobileMini = !disableCollapsibleSidebar && !isMobileNavigationExpanded;
  const hasDrawerTransitions = isOverSmViewport && (!disableCollapsibleSidebar || isOverMdViewport);
  const SidebarFooterSlot = slots?.sidebarFooter ?? null;
  const HeaderSlot = slots?.header ?? DashboardHeader;
  const headerSlotProps = React10.useMemo(() => ({
    branding,
    menuOpen: isNavigationExpanded,
    onToggleMenu: handleToggleHeaderMenu,
    hideMenuButton: hideNavigation || isOverMdViewport && disableCollapsibleSidebar,
    slots: {
      appTitle: slots?.appTitle,
      toolbarActions: slots?.toolbarActions,
      toolbarAccount: slots?.toolbarAccount
    },
    slotProps: {
      appTitle: slotProps?.appTitle,
      toolbarActions: slotProps?.toolbarActions,
      toolbarAccount: slotProps?.toolbarAccount
    },
    ...slotProps?.header
  }), [branding, isNavigationExpanded, handleToggleHeaderMenu, hideNavigation, isOverMdViewport, disableCollapsibleSidebar, slotProps, slots]);
  const getDrawerContent = React10.useCallback((isMini, viewport) => (0, import_jsx_runtime13.jsxs)(React10.Fragment, {
    children: [_Toolbar || (_Toolbar = (0, import_jsx_runtime13.jsx)(Toolbar_default, {})), (0, import_jsx_runtime13.jsxs)(Box_default, {
      component: "nav",
      "aria-label": `${viewport.charAt(0).toUpperCase()}${viewport.slice(1)}`,
      sx: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "auto",
        scrollbarGutter: isMini ? "stable" : "auto",
        overflowX: "hidden",
        pt: navigation[0]?.kind === "header" && !isMini ? 0 : 2,
        ...hasDrawerTransitions ? getDrawerSxTransitionMixin(isNavigationFullyExpanded, "padding") : {}
      },
      children: [(0, import_jsx_runtime13.jsx)(DashboardSidebarSubNavigation, {
        subNavigation: navigation,
        onLinkClick: handleNavigationLinkClick,
        isMini,
        isFullyExpanded: isNavigationFullyExpanded,
        isFullyCollapsed: isNavigationFullyCollapsed,
        hasDrawerTransitions,
        sidebarExpandedWidth,
        renderPageItem
      }), SidebarFooterSlot ? (0, import_jsx_runtime13.jsx)(SidebarFooterSlot, {
        mini: isMini,
        ...slotProps?.sidebarFooter
      }) : null]
    })]
  }), [SidebarFooterSlot, handleNavigationLinkClick, hasDrawerTransitions, isNavigationFullyCollapsed, isNavigationFullyExpanded, navigation, sidebarExpandedWidth, renderPageItem, slotProps?.sidebarFooter]);
  const getDrawerSharedSx = React10.useCallback((isMini, isTemporary) => {
    const drawerWidth = isMini ? MINI_DRAWER_WIDTH : sidebarExpandedWidth;
    return {
      displayPrint: "none",
      width: drawerWidth,
      flexShrink: 0,
      ...getDrawerWidthTransitionMixin(isNavigationExpanded),
      ...isTemporary ? {
        position: "absolute"
      } : {},
      [`& .MuiDrawer-paper`]: {
        position: "absolute",
        width: drawerWidth,
        boxSizing: "border-box",
        backgroundImage: "none",
        ...getDrawerWidthTransitionMixin(isNavigationExpanded)
      }
    };
  }, [isNavigationExpanded, sidebarExpandedWidth]);
  return (0, import_jsx_runtime13.jsxs)(Box_default, {
    sx: {
      position: "relative",
      display: "flex",
      overflow: "hidden",
      height: "100vh",
      width: "100vw",
      ...sx
    },
    children: [(0, import_jsx_runtime13.jsx)(HeaderSlot, {
      ...headerSlotProps
    }), !hideNavigation ? (0, import_jsx_runtime13.jsxs)(React10.Fragment, {
      children: [(0, import_jsx_runtime13.jsx)(Drawer_default, {
        container: appWindowContext?.document.body,
        variant: "temporary",
        open: isMobileNavigationExpanded,
        onClose: handleSetNavigationExpanded(false),
        ModalProps: {
          keepMounted: true
          // Better open performance on mobile.
        },
        sx: {
          display: {
            xs: "block",
            sm: disableCollapsibleSidebar ? "block" : "none",
            md: "none"
          },
          ...getDrawerSharedSx(false, true)
        },
        children: getDrawerContent(false, "phone")
      }), (0, import_jsx_runtime13.jsx)(Drawer_default, {
        variant: "permanent",
        sx: {
          display: {
            xs: "none",
            sm: disableCollapsibleSidebar ? "none" : "block",
            md: "none"
          },
          ...getDrawerSharedSx(isMobileMini, false)
        },
        children: getDrawerContent(isMobileMini, "tablet")
      }), (0, import_jsx_runtime13.jsx)(Drawer_default, {
        variant: "permanent",
        sx: {
          display: {
            xs: "none",
            md: "block"
          },
          ...getDrawerSharedSx(isDesktopMini, false)
        },
        children: getDrawerContent(isDesktopMini, "desktop")
      })]
    }) : null, (0, import_jsx_runtime13.jsxs)(Box_default, {
      sx: {
        display: "flex",
        flexDirection: "column",
        flex: 1,
        minWidth: 0
      },
      children: [(0, import_jsx_runtime13.jsx)(Toolbar_default, {
        sx: {
          displayPrint: "none"
        }
      }), (0, import_jsx_runtime13.jsx)(Box_default, {
        component: "main",
        sx: {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          overflow: "auto"
        },
        children
      })]
    })]
  });
}
true ? DashboardLayout.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Branding options for the dashboard.
   * @default null
   */
  branding: import_prop_types3.default.shape({
    homeUrl: import_prop_types3.default.string,
    logo: import_prop_types3.default.node,
    title: import_prop_types3.default.string
  }),
  /**
   * The content of the dashboard.
   */
  children: import_prop_types3.default.node,
  /**
   * Whether the sidebar should start collapsed in desktop size screens.
   * @default false
   */
  defaultSidebarCollapsed: import_prop_types3.default.bool,
  /**
   * Whether the sidebar should not be collapsible to a mini variant in desktop and tablet viewports.
   * @default false
   */
  disableCollapsibleSidebar: import_prop_types3.default.bool,
  /**
   * Whether the navigation bar and menu icon should be hidden.
   * @default false
   */
  hideNavigation: import_prop_types3.default.bool,
  /**
   * Navigation definition for the dashboard. [Find out more](https://mui.com/toolpad/core/react-dashboard-layout/#navigation).
   * @default []
   * @deprecated Set the navigation in the [AppProvider](https://mui.com/toolpad/core/react-app-provider/#navigation) instead.
   */
  navigation: import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.shape({
    action: import_prop_types3.default.node,
    children: import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.object, import_prop_types3.default.shape({
      kind: import_prop_types3.default.oneOf(["header"]).isRequired,
      title: import_prop_types3.default.string.isRequired
    }), import_prop_types3.default.shape({
      kind: import_prop_types3.default.oneOf(["divider"]).isRequired
    })]).isRequired),
    icon: import_prop_types3.default.node,
    kind: import_prop_types3.default.oneOf(["page"]),
    pattern: import_prop_types3.default.string,
    segment: import_prop_types3.default.string,
    title: import_prop_types3.default.string
  }), import_prop_types3.default.shape({
    kind: import_prop_types3.default.oneOf(["header"]).isRequired,
    title: import_prop_types3.default.string.isRequired
  }), import_prop_types3.default.shape({
    kind: import_prop_types3.default.oneOf(["divider"]).isRequired
  })]).isRequired),
  /**
   * Render each page item.
   *
   * @param {NavigationPageItem} item
   * @param {{ mini: boolean }} params
   * @returns {ReactNode}
   */
  renderPageItem: import_prop_types3.default.func,
  /**
   * Width of the sidebar when expanded.
   * @default 320
   */
  sidebarExpandedWidth: import_prop_types3.default.oneOfType([import_prop_types3.default.number, import_prop_types3.default.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: import_prop_types3.default.shape({
    appTitle: import_prop_types3.default.shape({
      branding: import_prop_types3.default.shape({
        homeUrl: import_prop_types3.default.string,
        logo: import_prop_types3.default.node,
        title: import_prop_types3.default.string
      })
    }),
    header: import_prop_types3.default.shape({
      branding: import_prop_types3.default.shape({
        homeUrl: import_prop_types3.default.string,
        logo: import_prop_types3.default.node,
        title: import_prop_types3.default.string
      }),
      hideMenuButton: import_prop_types3.default.bool,
      menuOpen: import_prop_types3.default.bool.isRequired,
      onToggleMenu: import_prop_types3.default.func.isRequired,
      slotProps: import_prop_types3.default.shape({
        appTitle: import_prop_types3.default.object,
        toolbarAccount: import_prop_types3.default.object,
        toolbarActions: import_prop_types3.default.object
      }),
      slots: import_prop_types3.default.shape({
        appTitle: import_prop_types3.default.elementType,
        toolbarAccount: import_prop_types3.default.elementType,
        toolbarActions: import_prop_types3.default.elementType
      })
    }),
    sidebarFooter: import_prop_types3.default.shape({
      mini: import_prop_types3.default.bool.isRequired
    }),
    toolbarAccount: import_prop_types3.default.shape({
      localeText: import_prop_types3.default.object,
      slotProps: import_prop_types3.default.shape({
        popover: import_prop_types3.default.object,
        popoverContent: import_prop_types3.default.object,
        preview: import_prop_types3.default.object,
        signInButton: import_prop_types3.default.object,
        signOutButton: import_prop_types3.default.object
      }),
      slots: import_prop_types3.default.shape({
        popover: import_prop_types3.default.elementType,
        popoverContent: import_prop_types3.default.elementType,
        preview: import_prop_types3.default.elementType,
        signInButton: import_prop_types3.default.elementType,
        signOutButton: import_prop_types3.default.elementType
      })
    }),
    toolbarActions: import_prop_types3.default.object
  }),
  /**
   * The components used for each slot inside.
   * @default {}
   */
  slots: import_prop_types3.default.shape({
    appTitle: import_prop_types3.default.elementType,
    header: import_prop_types3.default.elementType,
    sidebarFooter: import_prop_types3.default.elementType,
    toolbarAccount: import_prop_types3.default.elementType,
    toolbarActions: import_prop_types3.default.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types3.default.oneOfType([import_prop_types3.default.arrayOf(import_prop_types3.default.oneOfType([import_prop_types3.default.func, import_prop_types3.default.object, import_prop_types3.default.bool])), import_prop_types3.default.func, import_prop_types3.default.object])
} : void 0;

export {
  useSsr,
  ThemeSwitcher,
  ToolbarActions,
  DashboardHeader,
  DashboardSidebarPageItem,
  DashboardLayout
};
//# sourceMappingURL=chunk-DJXZEY3D.js.map
