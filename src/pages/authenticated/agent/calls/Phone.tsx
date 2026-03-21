import { Box, CircularProgress, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetBrowserPhoneConfigQuery } from "@/features/agent/agentApi";
import {
  fallbackBrowserPhoneConfig,
  type BrowserPhoneConfig,
} from "@/types/BrowserPhoneConfig";

const BROWSER_PHONE_SRC = "/browser-phone/embedded.html";
const BROWSER_PHONE_CONFIG_KEY = "callcenter.browserPhone.config";

export default function Phone() {
  const { t } = useTranslation();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const {
    data,
    isLoading: isConfigLoading,
    isError,
  } = useGetBrowserPhoneConfigQuery();
  const phoneConfig: BrowserPhoneConfig | null =
    data ?? (isError ? fallbackBrowserPhoneConfig : null);

  useEffect(() => {
    if (!phoneConfig) return;

    window.localStorage.setItem(
      BROWSER_PHONE_CONFIG_KEY,
      JSON.stringify(phoneConfig),
    );
  }, [phoneConfig]);

  const syncConfigToIframe = () => {
    if (!phoneConfig) return;

    iframeRef.current?.contentWindow?.postMessage(
      {
        source: "callcenter",
        type: "browser-phone:configure",
        payload: phoneConfig,
      },
      window.location.origin,
    );
  };

  const handleLoad = () => {
    if (!phoneConfig) return;

    setIsLoaded(true);
    setHasError(false);
    syncConfigToIframe();
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        minHeight: 0,
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
        overflow: "hidden",
        bgcolor: "background.paper",
      }}
    >
      {(!isLoaded || isConfigLoading) && !hasError && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 1,
            bgcolor: "background.paper",
            zIndex: 1,
          }}
        >
          <CircularProgress size={28} />
          <Typography variant="body2" color="text.secondary">
            {t("agent.calls.phone.loading")}
          </Typography>
        </Box>
      )}

      {hasError ? (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Typography variant="body2" color="error">
            {t("agent.calls.phone.loadError")}
          </Typography>
        </Box>
      ) : phoneConfig ? (
        <Box
          component="iframe"
          ref={iframeRef}
          title="Browser Phone"
          src={BROWSER_PHONE_SRC}
          allow="microphone; autoplay; camera; display-capture"
          onLoad={handleLoad}
          onError={() => setHasError(true)}
          sx={{
            width: "100%",
            height: "100%",
            border: 0,
            display: "block",
            bgcolor: "background.paper",
          }}
        />
      ) : null}
    </Box>
  );
}
