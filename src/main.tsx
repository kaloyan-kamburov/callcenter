import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import AppRouter from "./router/AppRouter";
import { Provider } from "react-redux";
import { store } from "./store";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { theme } from "./theme";
import { Toaster } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import "./i18n";

function PageTitleSync() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t("app.pageTitle");
  }, [i18n.language, t]);

  return null;
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <PageTitleSync />
        <Toaster position="bottom-center" />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
