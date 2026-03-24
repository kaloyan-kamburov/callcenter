import {
  BrandingContext,
  NavigationContext,
  PaletteModeContext,
  RouterContext,
  WindowContext,
  require_browser
} from "./chunk-JANN4EKF.js";
import {
  Alert_default,
  Avatar_default,
  CssBaseline_default,
  DialogActions_default,
  DialogContentText_default,
  DialogContent_default,
  DialogTitle_default,
  SnackbarContent_default,
  Snackbar_default,
  Stack_default,
  useMediaQuery_default
} from "./chunk-42GR6C6U.js";
import {
  Dialog_default
} from "./chunk-CTHKH7H3.js";
import {
  Badge_default,
  Tooltip_default
} from "./chunk-JLVVOEPJ.js";
import {
  IconButton_default
} from "./chunk-YNVY4X22.js";
import {
  Divider_default
} from "./chunk-QHMHB2J3.js";
import {
  Typography_default
} from "./chunk-QGXQENJK.js";
import {
  Popover_default,
  TextField_default,
  useSlotProps_default
} from "./chunk-IGD3GWCX.js";
import {
  Box_default
} from "./chunk-UTQ6B6VX.js";
import {
  InitColorSchemeScript_default,
  ThemeProvider,
  useColorScheme
} from "./chunk-D56TNETT.js";
import {
  Button_default
} from "./chunk-KWGJN6L5.js";
import {
  Close_default
} from "./chunk-F7KOCRMX.js";
import {
  createSvgIcon
} from "./chunk-BKRUDB4B.js";
import {
  useEventCallback_default
} from "./chunk-FXCPMEQ2.js";
import {
  createTheme,
  require_prop_types,
  require_react_is,
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

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/Account.js
var React18 = __toESM(require_react(), 1);
var import_prop_types8 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/SignInButton.js
var React13 = __toESM(require_react(), 1);
var import_prop_types3 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/AppProvider/AppProvider.js
var React11 = __toESM(require_react(), 1);
var import_prop_types2 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useNotifications/useNotifications.js
var React2 = __toESM(require_react(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useNotifications/NotificationsContext.js
var React = __toESM(require_react(), 1);
var NotificationsContext = React.createContext(null);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useNotifications/useNotifications.js
var serverNotifications = {
  show: () => {
    throw new Error("Not supported on server side");
  },
  close: () => {
    throw new Error("Not supported on server side");
  }
};
function useNotifications() {
  const context = React2.useContext(NotificationsContext);
  if (context) {
    return context;
  }
  return serverNotifications;
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useNotifications/NotificationsProvider.js
var React5 = __toESM(require_react(), 1);

// node_modules/.pnpm/@toolpad+utils@0.16.0_react@19.2.3/node_modules/@toolpad/utils/esm/react.js
var React3 = __toESM(require_react());
var ReactIs = __toESM(require_react_is());
var import_jsx_runtime = __toESM(require_jsx_runtime());
function useNonNullableContext(context, name) {
  const maybeContext = React3.useContext(context);
  if (maybeContext === null || maybeContext === void 0) {
    throw new Error(`context "${name}" was used without a Provider`);
  }
  return maybeContext;
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/AppProvider/LocalizationProvider.js
var React4 = __toESM(require_react(), 1);
var import_prop_types = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/locales/getLocalization.js
var getLocalization = (translations) => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: {
            ...translations
          }
        }
      }
    }
  };
};

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/locales/hiIN.js
var hiINLabels = {
  // Account
  accountSignInLabel: "साइन इन करें",
  accountSignOutLabel: "साइन आउट करें",
  // AccountPreview
  accountPreviewTitle: "खाता",
  accountPreviewIconButtonLabel: "वर्तमान उपयोगकर्ता",
  // SignInPage
  signInTitle: (brandingTitle) => brandingTitle ? `${brandingTitle} में साइन इन करें ` : `साइन इन करें`,
  signInSubtitle: "स्वागत है उपयोगकर्ता, कृपया जारी रखने के लिए साइन इन करें",
  signInRememberMe: "मुझे याद रखें",
  providerSignInTitle: (provider) => `${provider} से साइन इन करें`,
  // Common authentication labels
  email: "ईमेल",
  password: "पासवर्ड",
  username: "उपयोगकर्ता नाम",
  passkey: "पासकी",
  // Common action labels
  save: "सहेजें",
  cancel: "रद्द करें",
  ok: "ठीक है",
  or: "या",
  to: "को",
  with: "के साथ",
  close: "बंद करें",
  delete: "हटाएं",
  alert: "सूचना",
  confirm: "पुष्टि करें",
  loading: "लोड हो रहा है..."
};
var hiIN_default = getLocalization(hiINLabels);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/locales/en.js
var enLabels = {
  // Account
  accountSignInLabel: "Sign In",
  accountSignOutLabel: "Sign Out",
  // AccountPreview
  accountPreviewTitle: "Account",
  accountPreviewIconButtonLabel: "Current User",
  // SignInPage
  signInTitle: (brandingTitle) => brandingTitle ? `Sign in to ${brandingTitle}` : "Sign in",
  signInSubtitle: "Welcome user, please sign in to continue",
  signInRememberMe: "Remember Me",
  providerSignInTitle: (provider) => `Sign in with ${provider}`,
  // Common authentication labels
  email: "Email",
  password: "Password",
  username: "Username",
  passkey: "Passkey",
  // Common action labels
  save: "Save",
  cancel: "Cancel",
  ok: "Ok",
  or: "Or",
  to: "To",
  with: "With",
  close: "Close",
  delete: "Delete",
  alert: "Alert",
  confirm: "Confirm",
  loading: "Loading...",
  // CRUD
  createNewButtonLabel: "Create new",
  reloadButtonLabel: "Reload data",
  createLabel: "Create",
  createSuccessMessage: "Item created successfully.",
  createErrorMessage: "Failed to create item. Reason:",
  editLabel: "Edit",
  editSuccessMessage: "Item edited successfully.",
  editErrorMessage: "Failed to edit item. Reason:",
  deleteLabel: "Delete",
  deleteConfirmTitle: "Delete item?",
  deleteConfirmMessage: "Do you wish to delete this item?",
  deleteConfirmLabel: "Delete",
  deleteCancelLabel: "Cancel",
  deleteSuccessMessage: "Item deleted successfully.",
  deleteErrorMessage: "Failed to delete item. Reason:",
  deletedItemMessage: "This item has been deleted."
};
var en_default = getLocalization(enLabels);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/AppProvider/LocalizationProvider.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var LocalizationContext = React4.createContext({});
var LocalizationProvider = function LocalizationProvider2(props) {
  const {
    localeText: propsLocaleText,
    children
  } = props;
  const theme = useTheme();
  const themeLocaleText = theme?.components?.MuiLocalizationProvider?.defaultProps?.localeText;
  const defaultLocaleText3 = en_default.components.MuiLocalizationProvider.defaultProps.localeText;
  const localeText = React4.useMemo(() => ({
    ...defaultLocaleText3,
    ...themeLocaleText,
    ...propsLocaleText
  }), [defaultLocaleText3, themeLocaleText, propsLocaleText]);
  return (0, import_jsx_runtime2.jsx)(LocalizationContext.Provider, {
    value: localeText,
    children
  });
};
true ? LocalizationProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types.default.node,
  /**
   * Locale for components texts
   */
  localeText: import_prop_types.default.object
} : void 0;
function useLocaleText() {
  return React4.useContext(LocalizationContext);
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useNotifications/NotificationsProvider.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var _CloseIcon;
var RootPropsContext = React5.createContext(null);
var defaultLocaleText = {
  close: "Close"
};
function Notification({
  notificationKey,
  open,
  message,
  options,
  badge
}) {
  const globalLocaleText = useLocaleText();
  const localeText = {
    ...defaultLocaleText,
    ...globalLocaleText
  };
  const {
    close
  } = useNonNullableContext(NotificationsContext);
  const {
    severity,
    actionText,
    onAction,
    autoHideDuration
  } = options;
  const handleClose = React5.useCallback((event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    close(notificationKey);
  }, [notificationKey, close]);
  const action = (0, import_jsx_runtime3.jsxs)(React5.Fragment, {
    children: [onAction ? (0, import_jsx_runtime3.jsx)(Button_default, {
      color: "inherit",
      size: "small",
      onClick: onAction,
      children: actionText ?? "Action"
    }) : null, (0, import_jsx_runtime3.jsx)(IconButton_default, {
      size: "small",
      "aria-label": localeText?.close,
      title: localeText?.close,
      color: "inherit",
      onClick: handleClose,
      children: _CloseIcon || (_CloseIcon = (0, import_jsx_runtime3.jsx)(Close_default, {
        fontSize: "small"
      }))
    })]
  });
  const props = React5.useContext(RootPropsContext);
  const SnackbarComponent = props?.slots?.snackbar ?? Snackbar_default;
  const snackbarSlotProps = useSlotProps_default({
    elementType: SnackbarComponent,
    ownerState: props,
    externalSlotProps: props?.slotProps?.snackbar,
    additionalProps: {
      open,
      autoHideDuration,
      onClose: handleClose,
      action
    }
  });
  return (0, import_jsx_runtime3.jsx)(SnackbarComponent, {
    ...snackbarSlotProps,
    children: (0, import_jsx_runtime3.jsx)(Badge_default, {
      badgeContent: badge,
      color: "primary",
      sx: {
        width: "100%"
      },
      children: severity ? (0, import_jsx_runtime3.jsx)(Alert_default, {
        severity,
        sx: {
          width: "100%"
        },
        action,
        children: message
      }) : (0, import_jsx_runtime3.jsx)(SnackbarContent_default, {
        message,
        action
      })
    })
  }, notificationKey);
}
function Notifications({
  state
}) {
  const currentNotification = state.queue[0] ?? null;
  return currentNotification ? (0, import_jsx_runtime3.jsx)(Notification, {
    ...currentNotification,
    badge: state.queue.length > 1 ? String(state.queue.length) : null
  }) : null;
}
var nextId = 0;
var generateId = () => {
  const id = nextId;
  nextId += 1;
  return id;
};
function NotificationsProvider(props) {
  const {
    children
  } = props;
  const [state, setState] = React5.useState({
    queue: []
  });
  const show = React5.useCallback((message, options = {}) => {
    const notificationKey = options.key ?? `::toolpad-internal::notification::${generateId()}`;
    setState((prev) => {
      if (prev.queue.some((n) => n.notificationKey === notificationKey)) {
        return prev;
      }
      return {
        ...prev,
        queue: [...prev.queue, {
          message,
          options,
          notificationKey,
          open: true
        }]
      };
    });
    return notificationKey;
  }, []);
  const close = React5.useCallback((key) => {
    setState((prev) => ({
      ...prev,
      queue: prev.queue.filter((n) => n.notificationKey !== key)
    }));
  }, []);
  const contextValue = React5.useMemo(() => ({
    show,
    close
  }), [show, close]);
  return (0, import_jsx_runtime3.jsx)(RootPropsContext.Provider, {
    value: props,
    children: (0, import_jsx_runtime3.jsxs)(NotificationsContext.Provider, {
      value: contextValue,
      children: [children, (0, import_jsx_runtime3.jsx)(Notifications, {
        state
      })]
    })
  });
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useDialogs/useDialogs.js
var import_invariant = __toESM(require_browser(), 1);
var React7 = __toESM(require_react(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useDialogs/DialogsContext.js
var React6 = __toESM(require_react(), 1);
var DialogsContext = React6.createContext(null);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useDialogs/useDialogs.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var defaultLocaleText2 = {
  alert: "Alert",
  confirm: "Confirm",
  cancel: "Cancel",
  ok: "Ok"
};
function useDialogLoadingButton(onClose) {
  const [loading, setLoading] = React7.useState(false);
  const handleClick = async () => {
    try {
      setLoading(true);
      await onClose();
    } finally {
      setLoading(false);
    }
  };
  return {
    onClick: handleClick,
    loading
  };
}
function AlertDialog({
  open,
  payload,
  onClose
}) {
  const appWindowContext = React7.useContext(WindowContext);
  const globalLocaleText = useLocaleText();
  const localeText = {
    ...defaultLocaleText2,
    ...globalLocaleText
  };
  const okButtonProps = useDialogLoadingButton(() => onClose());
  return (0, import_jsx_runtime4.jsxs)(Dialog_default, {
    maxWidth: "xs",
    fullWidth: true,
    open,
    onClose: () => onClose(),
    container: appWindowContext?.document.body,
    children: [(0, import_jsx_runtime4.jsx)(DialogTitle_default, {
      children: payload.title ?? localeText.alert
    }), (0, import_jsx_runtime4.jsx)(DialogContent_default, {
      children: payload.msg
    }), (0, import_jsx_runtime4.jsx)(DialogActions_default, {
      children: (0, import_jsx_runtime4.jsx)(Button_default, {
        disabled: !open,
        ...okButtonProps,
        children: payload.okText ?? localeText.ok
      })
    })]
  });
}
function ConfirmDialog({
  open,
  payload,
  onClose
}) {
  const appWindowContext = React7.useContext(WindowContext);
  const globalLocaleText = useLocaleText();
  const localeText = {
    ...defaultLocaleText2,
    ...globalLocaleText
  };
  const cancelButtonProps = useDialogLoadingButton(() => onClose(false));
  const okButtonProps = useDialogLoadingButton(() => onClose(true));
  return (0, import_jsx_runtime4.jsxs)(Dialog_default, {
    maxWidth: "xs",
    fullWidth: true,
    open,
    onClose: () => onClose(false),
    container: appWindowContext?.document.body,
    children: [(0, import_jsx_runtime4.jsx)(DialogTitle_default, {
      children: payload.title ?? localeText.confirm
    }), (0, import_jsx_runtime4.jsx)(DialogContent_default, {
      children: payload.msg
    }), (0, import_jsx_runtime4.jsxs)(DialogActions_default, {
      children: [(0, import_jsx_runtime4.jsx)(Button_default, {
        autoFocus: true,
        disabled: !open,
        ...cancelButtonProps,
        children: payload.cancelText ?? localeText.cancel
      }), (0, import_jsx_runtime4.jsx)(Button_default, {
        color: payload.severity,
        disabled: !open,
        ...okButtonProps,
        children: payload.okText ?? localeText.ok
      })]
    })]
  });
}
function PromptDialog({
  open,
  payload,
  onClose
}) {
  const appWindowContext = React7.useContext(WindowContext);
  const globalLocaleText = useLocaleText();
  const localeText = {
    ...defaultLocaleText2,
    ...globalLocaleText
  };
  const [input, setInput] = React7.useState("");
  const cancelButtonProps = useDialogLoadingButton(() => onClose(null));
  const [loading, setLoading] = React7.useState(false);
  const name = "input";
  return (0, import_jsx_runtime4.jsxs)(Dialog_default, {
    maxWidth: "xs",
    fullWidth: true,
    open,
    onClose: () => onClose(null),
    PaperProps: {
      component: "form",
      onSubmit: async (event) => {
        event.preventDefault();
        try {
          setLoading(true);
          const formData = new FormData(event.currentTarget);
          const value = formData.get(name) ?? "";
          (0, import_invariant.default)(typeof value === "string", "Value must come from a text input");
          await onClose(value);
        } finally {
          setLoading(false);
        }
      }
    },
    container: appWindowContext?.document.body,
    children: [(0, import_jsx_runtime4.jsx)(DialogTitle_default, {
      children: payload.title ?? localeText.confirm
    }), (0, import_jsx_runtime4.jsxs)(DialogContent_default, {
      children: [(0, import_jsx_runtime4.jsxs)(DialogContentText_default, {
        children: [payload.msg, " "]
      }), (0, import_jsx_runtime4.jsx)(TextField_default, {
        autoFocus: true,
        required: true,
        margin: "dense",
        id: "name",
        name,
        type: "text",
        fullWidth: true,
        variant: "standard",
        value: input,
        onChange: (event) => setInput(event.target.value)
      })]
    }), (0, import_jsx_runtime4.jsxs)(DialogActions_default, {
      children: [(0, import_jsx_runtime4.jsx)(Button_default, {
        disabled: !open,
        ...cancelButtonProps,
        children: payload.cancelText ?? localeText.cancel
      }), (0, import_jsx_runtime4.jsx)(Button_default, {
        disabled: !open,
        loading,
        type: "submit",
        children: payload.okText ?? localeText.ok
      })]
    })]
  });
}
function useDialogs() {
  const {
    open,
    close
  } = useNonNullableContext(DialogsContext);
  const alert = useEventCallback_default((msg, {
    onClose,
    ...options
  } = {}) => open(AlertDialog, {
    ...options,
    msg
  }, {
    onClose
  }));
  const confirm = useEventCallback_default((msg, {
    onClose,
    ...options
  } = {}) => open(ConfirmDialog, {
    ...options,
    msg
  }, {
    onClose
  }));
  const prompt = useEventCallback_default((msg, {
    onClose,
    ...options
  } = {}) => open(PromptDialog, {
    ...options,
    msg
  }, {
    onClose
  }));
  return React7.useMemo(() => ({
    alert,
    confirm,
    prompt,
    open,
    close
  }), [alert, close, confirm, open, prompt]);
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useDialogs/DialogsProvider.js
var import_invariant2 = __toESM(require_browser(), 1);
var React8 = __toESM(require_react(), 1);
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
function DialogsProvider(props) {
  const {
    children,
    unmountAfter = 1e3
  } = props;
  const [stack, setStack] = React8.useState([]);
  const keyPrefix = React8.useId();
  const nextId2 = React8.useRef(0);
  const dialogMetadata = React8.useRef(/* @__PURE__ */ new WeakMap());
  const requestDialog = useEventCallback_default(function open(Component, payload, options = {}) {
    const {
      onClose = async () => {
      }
    } = options;
    let resolve;
    const promise = new Promise((resolveImpl) => {
      resolve = resolveImpl;
    });
    (0, import_invariant2.default)(resolve, "resolve not set");
    const key = `${keyPrefix}-${nextId2.current}`;
    nextId2.current += 1;
    const newEntry = {
      key,
      open: true,
      promise,
      Component,
      payload,
      onClose,
      resolve
    };
    dialogMetadata.current.set(promise, newEntry);
    setStack((prevStack) => [...prevStack, newEntry]);
    return promise;
  });
  const closeDialogUi = useEventCallback_default(function closeDialogUi2(dialog) {
    setStack((prevStack) => prevStack.map((entry) => entry.promise === dialog ? {
      ...entry,
      open: false
    } : entry));
    setTimeout(() => {
      setStack((prevStack) => prevStack.filter((entry) => entry.promise !== dialog));
    }, unmountAfter);
  });
  const closeDialog = useEventCallback_default(async function closeDialog2(dialog, result) {
    const entryToClose = dialogMetadata.current.get(dialog);
    (0, import_invariant2.default)(entryToClose, "dialog not found");
    try {
      await entryToClose.onClose(result);
    } finally {
      entryToClose.resolve(result);
      closeDialogUi(dialog);
    }
    return dialog;
  });
  const contextValue = React8.useMemo(() => ({
    open: requestDialog,
    close: closeDialog
  }), [requestDialog, closeDialog]);
  return (0, import_jsx_runtime5.jsxs)(DialogsContext.Provider, {
    value: contextValue,
    children: [children, stack.map(({
      key,
      open,
      Component,
      payload,
      promise
    }) => (0, import_jsx_runtime5.jsx)(Component, {
      payload,
      open,
      onClose: async (result) => {
        await closeDialog(promise, result);
      }
    }, key))]
  });
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/AppProvider/AppThemeProvider.js
var React10 = __toESM(require_react(), 1);
var import_invariant3 = __toESM(require_browser(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/persistence/useStorageState.js
var React9 = __toESM(require_react(), 1);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/persistence/codec.js
var CODEC_DATE = {
  parse: (value) => new Date(value),
  stringify: (value) => value.toISOString()
};
var CODEC_DATE_ONLY = {
  parse: (value) => new Date(value),
  stringify: (value) => value.toISOString().split("T")[0]
};
var CODEC_NUMBER = {
  parse: (value) => Number(value),
  stringify: (value) => String(value)
};
var CODE_BOOLEAN = {
  parse: (value) => value === "true",
  stringify: (value) => String(value)
};
var CODEC_JSON = {
  parse: (value) => {
    try {
      return JSON.parse(value);
    } catch {
      return null;
    }
  },
  stringify: (value) => JSON.stringify(value)
};
var CODEC_JSON_STRICT = {
  parse: (value) => JSON.parse(value),
  stringify: (value) => JSON.stringify(value)
};
var CODEC_STRING = {
  parse: (value) => value,
  stringify: (value) => value
};

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/persistence/useStorageState.js
var currentTabChangeListeners = /* @__PURE__ */ new Map();
function onCurrentTabStorageChange(key, handler) {
  let listeners = currentTabChangeListeners.get(key);
  if (!listeners) {
    listeners = /* @__PURE__ */ new Set();
    currentTabChangeListeners.set(key, listeners);
  }
  listeners.add(handler);
}
function offCurrentTabStorageChange(key, handler) {
  const listeners = currentTabChangeListeners.get(key);
  if (!listeners) {
    return;
  }
  listeners.delete(handler);
  if (listeners.size === 0) {
    currentTabChangeListeners.delete(key);
  }
}
function emitCurrentTabStorageChange(key) {
  const listeners = currentTabChangeListeners.get(key);
  if (listeners) {
    listeners.forEach((listener) => listener());
  }
}
if (typeof window !== "undefined") {
  const origSetItem = window.localStorage.setItem;
  window.localStorage.setItem = function setItem(key, value) {
    const result = origSetItem.call(this, key, value);
    emitCurrentTabStorageChange(key);
    return result;
  };
}
function subscribe(area, key, callback) {
  if (!key) {
    return () => {
    };
  }
  const storageHandler = (event) => {
    if (event.storageArea === area && event.key === key) {
      callback();
    }
  };
  window.addEventListener("storage", storageHandler);
  onCurrentTabStorageChange(key, callback);
  return () => {
    window.removeEventListener("storage", storageHandler);
    offCurrentTabStorageChange(key, callback);
  };
}
function getSnapshot(area, key) {
  if (!key) {
    return null;
  }
  try {
    return area.getItem(key);
  } catch {
    return null;
  }
}
function setValue(area, key, value) {
  if (!key) {
    return;
  }
  try {
    if (value === null) {
      area.removeItem(key);
    } else {
      area.setItem(key, String(value));
    }
  } catch {
    return;
  }
  emitCurrentTabStorageChange(key);
}
var serverValue = [null, () => {
}];
function useStorageStateServer() {
  return serverValue;
}
function encode(codec, value) {
  return value === null ? null : codec.stringify(value);
}
function decode(codec, value) {
  return value === null ? null : codec.parse(value);
}
var getKeyServerSnapshot = () => null;
function useStorageState(area, key, initializer = null, options) {
  const codec = options?.codec ?? CODEC_STRING;
  const [initialValue] = React9.useState(initializer);
  const encodedInitialValue = React9.useMemo(() => encode(codec, initialValue), [codec, initialValue]);
  const subscribeKey = React9.useCallback((callback) => subscribe(area, key, callback), [area, key]);
  const getKeySnapshot = React9.useCallback(() => getSnapshot(area, key) ?? encodedInitialValue, [area, encodedInitialValue, key]);
  const encodedStoredValue = React9.useSyncExternalStore(subscribeKey, getKeySnapshot, getKeyServerSnapshot);
  const storedValue = React9.useMemo(() => decode(codec, encodedStoredValue), [codec, encodedStoredValue]);
  const setStoredValue = React9.useCallback((value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    const encodedValueToStore = encode(codec, valueToStore);
    setValue(area, key, encodedValueToStore);
  }, [area, codec, storedValue, key]);
  const [nonStoredValue, setNonStoredValue] = React9.useState(initialValue);
  if (!key) {
    return [nonStoredValue, setNonStoredValue];
  }
  return [storedValue, setStoredValue];
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/useLocalStorageState/useLocalStorageState.js
var useLocalStorageStateBrowser = (...args) => useStorageState(window.localStorage, ...args);
var useLocalStorageState = typeof window === "undefined" ? useStorageStateServer : useLocalStorageStateBrowser;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/AppProvider/AppThemeProvider.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
var _CssBaseline;
var _CssBaseline2;
var COLOR_SCHEME_STORAGE_KEY = "toolpad-color-scheme";
var MODE_STORAGE_KEY = "toolpad-mode";
function usePreferredMode(window2) {
  const prefersDarkMode = useMediaQuery_default("(prefers-color-scheme: dark)", window2 && {
    matchMedia: window2.matchMedia
  });
  return prefersDarkMode ? "dark" : "light";
}
function isCssVarsTheme(theme) {
  return "vars" in theme;
}
function LegacyThemeProvider(props) {
  const {
    children,
    theme,
    window: appWindow
  } = props;
  (0, import_invariant3.default)(!isCssVarsTheme(theme), "This provider only accepts legacy themes.");
  const isDualTheme = "light" in theme || "dark" in theme;
  const preferredMode = usePreferredMode(appWindow);
  const [userMode, setUserMode] = useLocalStorageState(MODE_STORAGE_KEY, "system");
  const paletteMode = !userMode || userMode === "system" ? preferredMode : userMode;
  const dualAwareTheme = React10.useMemo(() => isDualTheme ? theme[paletteMode === "dark" ? "dark" : "light"] ?? theme[paletteMode === "dark" ? "light" : "dark"] : theme, [isDualTheme, paletteMode, theme]);
  const paletteModeContextValue = React10.useMemo(() => ({
    paletteMode,
    setPaletteMode: setUserMode,
    isDualTheme
  }), [isDualTheme, paletteMode, setUserMode]);
  return (0, import_jsx_runtime6.jsx)(ThemeProvider, {
    theme: dualAwareTheme,
    children: (0, import_jsx_runtime6.jsxs)(PaletteModeContext.Provider, {
      value: paletteModeContextValue,
      children: [_CssBaseline || (_CssBaseline = (0, import_jsx_runtime6.jsx)(CssBaseline_default, {
        enableColorScheme: true
      })), children]
    })
  });
}
function CssVarsPaletteModeProvider(props) {
  const {
    children,
    window: appWindow
  } = props;
  const preferredMode = usePreferredMode(appWindow);
  const {
    mode,
    setMode,
    allColorSchemes
  } = useColorScheme();
  const paletteModeContextValue = React10.useMemo(() => {
    return {
      paletteMode: !mode || mode === "system" ? preferredMode : mode,
      setPaletteMode: setMode,
      isDualTheme: allColorSchemes.length > 1
    };
  }, [allColorSchemes, mode, preferredMode, setMode]);
  return (0, import_jsx_runtime6.jsx)(PaletteModeContext.Provider, {
    value: paletteModeContextValue,
    children
  });
}
function CssVarsThemeProvider(props) {
  const {
    children,
    theme,
    window: appWindow,
    nonce
  } = props;
  (0, import_invariant3.default)(isCssVarsTheme(theme), "This provider only accepts CSS vars themes.");
  return (0, import_jsx_runtime6.jsxs)(ThemeProvider, {
    theme,
    documentNode: appWindow?.document,
    colorSchemeNode: appWindow?.document.documentElement,
    disableNestedContext: true,
    colorSchemeStorageKey: COLOR_SCHEME_STORAGE_KEY,
    modeStorageKey: MODE_STORAGE_KEY,
    children: [(0, import_jsx_runtime6.jsx)(InitColorSchemeScript_default, {
      attribute: theme.colorSchemeSelector,
      colorSchemeStorageKey: COLOR_SCHEME_STORAGE_KEY,
      modeStorageKey: MODE_STORAGE_KEY,
      nonce
    }), (0, import_jsx_runtime6.jsxs)(CssVarsPaletteModeProvider, {
      window: appWindow,
      children: [_CssBaseline2 || (_CssBaseline2 = (0, import_jsx_runtime6.jsx)(CssBaseline_default, {
        enableColorScheme: true
      })), children]
    })]
  });
}
function AppThemeProvider(props) {
  const {
    children,
    theme,
    ...rest
  } = props;
  const useCssVarsProvider = isCssVarsTheme(theme);
  return useCssVarsProvider ? (0, import_jsx_runtime6.jsx)(CssVarsThemeProvider, {
    theme,
    ...rest,
    children
  }) : (0, import_jsx_runtime6.jsx)(LegacyThemeProvider, {
    theme,
    ...rest,
    children
  });
}

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/AppProvider/AppProvider.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
var AuthenticationContext = React11.createContext(null);
var SessionContext = React11.createContext(null);
function createDefaultTheme() {
  return createTheme({
    cssVariables: {
      colorSchemeSelector: "data-toolpad-color-scheme"
    },
    colorSchemes: {
      dark: true
    }
  });
}
function AppProvider(props) {
  const {
    children,
    theme = createDefaultTheme(),
    branding = null,
    navigation = [],
    localeText,
    router = null,
    authentication = null,
    session = null,
    window: appWindow,
    nonce
  } = props;
  return (0, import_jsx_runtime7.jsx)(WindowContext.Provider, {
    value: appWindow,
    children: (0, import_jsx_runtime7.jsx)(AuthenticationContext.Provider, {
      value: authentication,
      children: (0, import_jsx_runtime7.jsx)(SessionContext.Provider, {
        value: session,
        children: (0, import_jsx_runtime7.jsx)(RouterContext.Provider, {
          value: router,
          children: (0, import_jsx_runtime7.jsx)(AppThemeProvider, {
            theme,
            window: appWindow,
            nonce,
            children: (0, import_jsx_runtime7.jsx)(LocalizationProvider, {
              localeText,
              children: (0, import_jsx_runtime7.jsx)(NotificationsProvider, {
                children: (0, import_jsx_runtime7.jsx)(DialogsProvider, {
                  children: (0, import_jsx_runtime7.jsx)(BrandingContext.Provider, {
                    value: branding,
                    children: (0, import_jsx_runtime7.jsx)(NavigationContext.Provider, {
                      value: navigation,
                      children
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  });
}
true ? AppProvider.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * Authentication methods.
   * @default null
   */
  authentication: import_prop_types2.default.shape({
    signIn: import_prop_types2.default.func.isRequired,
    signOut: import_prop_types2.default.func.isRequired
  }),
  /**
   * Branding options for the app.
   * @default null
   */
  branding: import_prop_types2.default.shape({
    homeUrl: import_prop_types2.default.string,
    logo: import_prop_types2.default.node,
    title: import_prop_types2.default.string
  }),
  /**
   * The content of the app provider.
   */
  children: import_prop_types2.default.node,
  /**
   * Locale text for components
   */
  localeText: import_prop_types2.default.object,
  /**
   * Navigation definition for the app. [Find out more](https://mui.com/toolpad/core/react-app-provider/#navigation).
   * @default []
   */
  navigation: import_prop_types2.default.arrayOf(import_prop_types2.default.oneOfType([import_prop_types2.default.shape({
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
  }), import_prop_types2.default.shape({
    kind: import_prop_types2.default.oneOf(["header"]).isRequired,
    title: import_prop_types2.default.string.isRequired
  }), import_prop_types2.default.shape({
    kind: import_prop_types2.default.oneOf(["divider"]).isRequired
  })]).isRequired),
  /**
   * The nonce to be used for inline scripts.
   */
  nonce: import_prop_types2.default.string,
  /**
   * Router implementation used inside Toolpad components.
   * @default null
   */
  router: import_prop_types2.default.shape({
    Link: import_prop_types2.default.elementType,
    navigate: import_prop_types2.default.func.isRequired,
    pathname: import_prop_types2.default.string.isRequired,
    searchParams: import_prop_types2.default.instanceOf(URLSearchParams).isRequired
  }),
  /**
   * Session info about the current user.
   * @default null
   */
  session: import_prop_types2.default.shape({
    user: import_prop_types2.default.shape({
      email: import_prop_types2.default.string,
      id: import_prop_types2.default.string,
      image: import_prop_types2.default.string,
      name: import_prop_types2.default.string
    })
  }),
  /**
   * [Theme or themes](https://mui.com/toolpad/core/react-app-provider/#theming) to be used by the app in light/dark mode. A [CSS variables theme](https://mui.com/material-ui/customization/css-theme-variables/overview/) is recommended.
   * @default createDefaultTheme()
   */
  theme: import_prop_types2.default.object,
  /**
   * The window where the application is rendered.
   * This is needed when rendering the app inside an iframe, for example.
   * @default window
   */
  window: import_prop_types2.default.object
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/AccountLocaleContext.js
var React12 = __toESM(require_react(), 1);
var AccountLocaleContext = React12.createContext(null);

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/SignInButton.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
function SignInButton(props) {
  const authentication = React13.useContext(AuthenticationContext);
  const globalLocaleText = useLocaleText();
  const accountLocaleText = React13.useContext(AccountLocaleContext);
  const localeText = {
    ...globalLocaleText,
    ...accountLocaleText
  };
  return (0, import_jsx_runtime8.jsx)(Button_default, {
    disableElevation: true,
    variant: "contained",
    size: "small",
    onClick: authentication?.signIn,
    sx: {
      textTransform: "capitalize",
      filter: "opacity(0.9)",
      width: "50%",
      margin: (theme) => `${theme.spacing(1)} auto`,
      transition: "filter 0.2s ease-in",
      "&:hover": {
        filter: "opacity(1)"
      }
    },
    ...props,
    children: localeText?.accountSignInLabel
  });
}
true ? SignInButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types3.default.node
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/SignOutButton.js
var React14 = __toESM(require_react(), 1);
var import_prop_types4 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/Logout.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime());
var Logout_default = createSvgIcon((0, import_jsx_runtime9.jsx)("path", {
  d: "m17 7-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
}), "Logout");

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/SignOutButton.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);
var _LogoutIcon;
function SignOutButton(props) {
  const authentication = React14.useContext(AuthenticationContext);
  const globalLocaleText = useLocaleText();
  const accountLocaleText = React14.useContext(AccountLocaleContext);
  const localeText = {
    ...globalLocaleText,
    ...accountLocaleText
  };
  return (0, import_jsx_runtime10.jsx)(Button_default, {
    disabled: !authentication,
    variant: "outlined",
    size: "small",
    disableElevation: true,
    onClick: authentication?.signOut,
    sx: {
      textTransform: "capitalize",
      fontWeight: "normal",
      filter: "opacity(0.9)",
      transition: "filter 0.2s ease-in",
      "&:hover": {
        filter: "opacity(1)"
      }
    },
    startIcon: _LogoutIcon || (_LogoutIcon = (0, import_jsx_runtime10.jsx)(Logout_default, {})),
    ...props,
    children: localeText?.accountSignOutLabel
  });
}
true ? SignOutButton.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types4.default.node
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/AccountPreview.js
var React15 = __toESM(require_react(), 1);
var import_prop_types5 = __toESM(require_prop_types(), 1);

// node_modules/.pnpm/@mui+icons-material@7.3.7_@mui+material@7.3.7_@emotion+react@11.14.0_@types+react@19.2._1e6712ae5dd075c3ed43d1d3d27c7f8c/node_modules/@mui/icons-material/esm/MoreVert.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime());
var MoreVert_default = createSvgIcon((0, import_jsx_runtime11.jsx)("path", {
  d: "M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"
}), "MoreVert");

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/AccountPreview.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var _MoreVertIcon;
function AccountPreview(props) {
  const {
    slots,
    variant = "condensed",
    slotProps,
    open,
    handleClick,
    sx
  } = props;
  const session = React15.useContext(SessionContext);
  const globalLocaleText = useLocaleText();
  const accountLocaleText = React15.useContext(AccountLocaleContext);
  const localeText = {
    ...globalLocaleText,
    ...accountLocaleText
  };
  if (!session || !session.user) {
    return null;
  }
  const avatarContent = slots?.avatar ? (0, import_jsx_runtime12.jsx)(slots.avatar, {}) : (0, import_jsx_runtime12.jsx)(Avatar_default, {
    src: session.user?.image || "",
    alt: session.user?.name || session.user?.email || "",
    sx: {
      height: variant === "expanded" ? 48 : 32,
      width: variant === "expanded" ? 48 : 32
    },
    ...slotProps?.avatar
  });
  if (variant === "expanded") {
    return (0, import_jsx_runtime12.jsxs)(Stack_default, {
      direction: "row",
      justifyContent: "space-between",
      sx: {
        py: 1,
        px: 2,
        gap: 2,
        ...sx
      },
      children: [(0, import_jsx_runtime12.jsxs)(Stack_default, {
        direction: "row",
        justifyContent: "flex-start",
        spacing: 2,
        overflow: "hidden",
        children: [avatarContent, (0, import_jsx_runtime12.jsxs)(Stack_default, {
          direction: "column",
          justifyContent: "space-evenly",
          overflow: "hidden",
          children: [(0, import_jsx_runtime12.jsx)(Typography_default, {
            variant: "body2",
            fontWeight: "bolder",
            noWrap: true,
            children: session.user?.name
          }), (0, import_jsx_runtime12.jsx)(Typography_default, {
            variant: "caption",
            noWrap: true,
            children: session.user?.email
          })]
        })]
      }), handleClick && (slots?.moreIconButton ? (0, import_jsx_runtime12.jsx)(slots.moreIconButton, {}) : (0, import_jsx_runtime12.jsx)(IconButton_default, {
        size: "small",
        onClick: handleClick,
        ...slotProps?.moreIconButton,
        sx: {
          alignSelf: "center",
          ...slotProps?.moreIconButton?.sx
        },
        children: _MoreVertIcon || (_MoreVertIcon = (0, import_jsx_runtime12.jsx)(MoreVert_default, {
          fontSize: "small"
        }))
      }))]
    });
  }
  return (0, import_jsx_runtime12.jsx)(Tooltip_default, {
    title: session.user.name ?? accountLocaleText?.accountPreviewTitle,
    children: slots?.avatarIconButton ? (0, import_jsx_runtime12.jsx)(slots.avatarIconButton, {
      ...slotProps?.avatarIconButton
    }) : (0, import_jsx_runtime12.jsx)(Stack_default, {
      sx: {
        py: 0.5,
        ...sx
      },
      children: (0, import_jsx_runtime12.jsx)(IconButton_default, {
        onClick: handleClick,
        "aria-label": localeText?.accountPreviewIconButtonLabel,
        size: "small",
        "aria-controls": open ? "account-menu" : void 0,
        "aria-haspopup": "true",
        "aria-expanded": open ? "true" : void 0,
        ...slotProps?.avatarIconButton,
        sx: {
          width: "fit-content",
          margin: "0 auto",
          ...slotProps?.avatarIconButton?.sx
        },
        children: avatarContent
      })
    })
  });
}
true ? AccountPreview.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The handler used when the preview is expanded
   */
  handleClick: import_prop_types5.default.func,
  /**
   * The state of the Account popover
   * @default false
   */
  open: import_prop_types5.default.bool,
  /**
   * The props used for each slot inside.
   */
  slotProps: import_prop_types5.default.shape({
    avatar: import_prop_types5.default.object,
    avatarIconButton: import_prop_types5.default.object,
    moreIconButton: import_prop_types5.default.object
  }),
  /**
   * The components used for each slot inside.
   */
  slots: import_prop_types5.default.shape({
    avatar: import_prop_types5.default.elementType,
    avatarIconButton: import_prop_types5.default.elementType,
    moreIconButton: import_prop_types5.default.elementType
  }),
  /**
   * The prop used to customize the styling of the preview
   */
  sx: import_prop_types5.default.oneOfType([import_prop_types5.default.arrayOf(import_prop_types5.default.oneOfType([import_prop_types5.default.func, import_prop_types5.default.object, import_prop_types5.default.bool])), import_prop_types5.default.func, import_prop_types5.default.object]),
  /**
   * The type of account details to display.
   * @property {'condensed'} condensed - Shows only the user's avatar.
   * @property {'expanded'} expanded - Displays the user's avatar, name, and email if available.
   * @default 'condensed'
   */
  variant: import_prop_types5.default.oneOf(["condensed", "expanded"])
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/AccountPopoverHeader.js
var React16 = __toESM(require_react(), 1);
var import_prop_types6 = __toESM(require_prop_types(), 1);
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
function AccountPopoverHeader(props) {
  const {
    children,
    ...rest
  } = props;
  return (0, import_jsx_runtime13.jsx)(Stack_default, {
    ...rest,
    children
  });
}
true ? AccountPopoverHeader.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The content of the component.
   */
  children: import_prop_types6.default.node
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/AccountPopoverFooter.js
var React17 = __toESM(require_react(), 1);
var import_prop_types7 = __toESM(require_prop_types(), 1);
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
function AccountPopoverFooter(props) {
  const {
    children,
    ...rest
  } = props;
  return (0, import_jsx_runtime14.jsx)(Box_default, {
    ...rest,
    sx: {
      display: "flex",
      flexDirection: "row",
      p: 1,
      justifyContent: "flex-end",
      ...rest.sx
    },
    children
  });
}
true ? AccountPopoverFooter.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * @ignore
   */
  children: import_prop_types7.default.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types7.default.oneOfType([import_prop_types7.default.arrayOf(import_prop_types7.default.oneOfType([import_prop_types7.default.func, import_prop_types7.default.object, import_prop_types7.default.bool])), import_prop_types7.default.func, import_prop_types7.default.object])
} : void 0;

// node_modules/.pnpm/@toolpad+core@0.16.0_d46cabc535141b65151421393ad6a060/node_modules/@toolpad/core/esm/Account/Account.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);
var _AccountPopoverHeader;
var _Divider;
var defaultAccountLocaleText = {
  accountPreviewIconButtonLabel: "Current User",
  accountPreviewTitle: "Account",
  accountSignInLabel: "Sign in",
  accountSignOutLabel: "Sign out"
};
function Account(props) {
  const {
    localeText: propsLocaleText
  } = props;
  const globalLocaleText = useLocaleText();
  const localeText = React18.useMemo(() => ({
    ...defaultAccountLocaleText,
    ...globalLocaleText,
    ...propsLocaleText
  }), [globalLocaleText, propsLocaleText]);
  const {
    slots,
    slotProps
  } = props;
  const [anchorEl, setAnchorEl] = React18.useState(null);
  const session = React18.useContext(SessionContext);
  const authentication = React18.useContext(AuthenticationContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  if (!authentication) {
    return null;
  }
  let accountContent = null;
  if (!session?.user) {
    accountContent = slots?.signInButton ? (0, import_jsx_runtime15.jsx)(slots.signInButton, {
      onClick: authentication.signIn
    }) : (0, import_jsx_runtime15.jsx)(SignInButton, {
      ...slotProps?.signInButton
    });
  } else {
    accountContent = (0, import_jsx_runtime15.jsxs)(React18.Fragment, {
      children: [slots?.preview ? (0, import_jsx_runtime15.jsx)(slots.preview, {
        handleClick,
        open
      }) : (0, import_jsx_runtime15.jsx)(AccountPreview, {
        variant: "condensed",
        handleClick,
        open,
        ...slotProps?.preview
      }), slots?.popover ? (0, import_jsx_runtime15.jsx)(slots.popover, {
        open,
        onClick: handleClick,
        onClose: handleClose,
        ...slotProps?.popover
      }) : (0, import_jsx_runtime15.jsx)(Popover_default, {
        anchorEl,
        id: "account-menu",
        open,
        onClose: handleClose,
        onClick: handleClose,
        transformOrigin: {
          horizontal: "right",
          vertical: "top"
        },
        anchorOrigin: {
          horizontal: "right",
          vertical: "bottom"
        },
        ...slotProps?.popover,
        slotProps: {
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: (theme) => `drop-shadow(0px 2px 8px ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.32)"})`,
              mt: 1,
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0
              }
            }
          },
          ...slotProps?.popover?.slotProps
        },
        children: slots?.popoverContent ? (0, import_jsx_runtime15.jsx)(slots.popoverContent, {
          ...slotProps?.popoverContent
        }) : (0, import_jsx_runtime15.jsxs)(Stack_default, {
          direction: "column",
          ...slotProps?.popoverContent,
          children: [_AccountPopoverHeader || (_AccountPopoverHeader = (0, import_jsx_runtime15.jsx)(AccountPopoverHeader, {
            children: (0, import_jsx_runtime15.jsx)(AccountPreview, {
              variant: "expanded"
            })
          })), _Divider || (_Divider = (0, import_jsx_runtime15.jsx)(Divider_default, {})), (0, import_jsx_runtime15.jsx)(AccountPopoverFooter, {
            children: (0, import_jsx_runtime15.jsx)(SignOutButton, {
              ...slotProps?.signOutButton
            })
          })]
        })
      })]
    });
  }
  return (0, import_jsx_runtime15.jsx)(AccountLocaleContext.Provider, {
    value: localeText,
    children: accountContent
  });
}
true ? Account.propTypes = {
  // ┌────────────────────────────── Warning ──────────────────────────────┐
  // │ These PropTypes are generated from the TypeScript type definitions. │
  // │ To update them, edit the TypeScript types and run `pnpm proptypes`. │
  // └─────────────────────────────────────────────────────────────────────┘
  /**
   * The labels for the account component.
   */
  localeText: import_prop_types8.default.object,
  /**
   * The props used for each slot inside.
   */
  slotProps: import_prop_types8.default.shape({
    popover: import_prop_types8.default.object,
    popoverContent: import_prop_types8.default.object,
    preview: import_prop_types8.default.shape({
      handleClick: import_prop_types8.default.func,
      open: import_prop_types8.default.bool,
      slotProps: import_prop_types8.default.shape({
        avatar: import_prop_types8.default.object,
        avatarIconButton: import_prop_types8.default.object,
        moreIconButton: import_prop_types8.default.object
      }),
      slots: import_prop_types8.default.shape({
        avatar: import_prop_types8.default.elementType,
        avatarIconButton: import_prop_types8.default.elementType,
        moreIconButton: import_prop_types8.default.elementType
      }),
      sx: import_prop_types8.default.oneOfType([import_prop_types8.default.arrayOf(import_prop_types8.default.oneOfType([import_prop_types8.default.func, import_prop_types8.default.object, import_prop_types8.default.bool])), import_prop_types8.default.func, import_prop_types8.default.object]),
      variant: import_prop_types8.default.oneOf(["condensed", "expanded"])
    }),
    signInButton: import_prop_types8.default.object,
    signOutButton: import_prop_types8.default.object
  }),
  /**
   * The components used for each slot inside.
   */
  slots: import_prop_types8.default.shape({
    popover: import_prop_types8.default.elementType,
    popoverContent: import_prop_types8.default.elementType,
    preview: import_prop_types8.default.elementType,
    signInButton: import_prop_types8.default.elementType,
    signOutButton: import_prop_types8.default.elementType
  })
} : void 0;

export {
  useNotifications,
  hiIN_default,
  en_default,
  LocalizationContext,
  LocalizationProvider,
  useLocaleText,
  NotificationsProvider,
  AlertDialog,
  ConfirmDialog,
  PromptDialog,
  useDialogs,
  DialogsProvider,
  CODEC_DATE,
  CODEC_DATE_ONLY,
  CODEC_NUMBER,
  CODE_BOOLEAN,
  CODEC_JSON,
  CODEC_JSON_STRICT,
  CODEC_STRING,
  useStorageStateServer,
  useStorageState,
  useLocalStorageState,
  AuthenticationContext,
  SessionContext,
  AppProvider,
  SignInButton,
  SignOutButton,
  AccountPreview,
  AccountPopoverHeader,
  AccountPopoverFooter,
  Account
};
//# sourceMappingURL=chunk-MTM6HARS.js.map
