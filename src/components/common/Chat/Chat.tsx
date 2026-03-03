import {
  CometChatMessageComposer,
  CometChatMessageHeader,
  CometChatMessageList,
  CometChatUIKit,
  CometChatUsers,
  UIKitSettingsBuilder,
} from "@cometchat/chat-uikit-react";
import { Box, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useEffect, useRef, useState } from "react";

/**
 * CometChat Constants - Replace with your actual credentials
 */
const COMETCHAT_CONSTANTS = {
  APP_ID: "1676088e7ef037d2a", // Replace with your actual App ID from CometChat
  REGION: "us", // Replace with your App's Region
  AUTH_KEY: "edcb0c5c4252702264ce26578212dc764239db7d", // Replace with your Auth Key (leave blank if using Auth Token)
  UID: "cometchat-uid-5",
};

const appId = COMETCHAT_CONSTANTS.APP_ID || localStorage.getItem("appId") || "";
const region =
  COMETCHAT_CONSTANTS.REGION || localStorage.getItem("region") || "";
const authKey =
  COMETCHAT_CONSTANTS.AUTH_KEY || localStorage.getItem("authKey") || "";
const uid = COMETCHAT_CONSTANTS.UID || "";

const uiKitSettings =
  appId && region && authKey
    ? new UIKitSettingsBuilder()
        .setAppId(appId)
        .setRegion(region)
        .setAuthKey(authKey)
        .subscribePresenceForAllUsers()
        .build()
    : null;

let initPromise: Promise<void> | null = null;

const initializeUIKit = () => {
  if (!uiKitSettings) {
    return Promise.reject(new Error("Missing CometChat credentials."));
  }

  const settings = uiKitSettings;

  if (!initPromise) {
    initPromise = Promise.resolve(CometChatUIKit.init(settings)).then(
      () => undefined,
    );
  }

  return initPromise;
};

const Chat = () => {
  const [isReady, setIsReady] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);
  const [activeUser, setActiveUser] = useState<CometChat.User | null>(null);
  const messageListWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isMounted = true;

    const prepareChat = async () => {
      try {
        await initializeUIKit();
        const user = await CometChatUIKit.getLoggedinUser();

        if (!user) {
          if (!uid) {
            throw new Error("Missing CometChat UID.");
          }
          await CometChatUIKit.login(uid);
        }

        if (isMounted) {
          setIsReady(true);
        }
      } catch (error) {
        console.error("CometChat UI Kit setup failed:", error);
        if (isMounted) {
          setErrorText("Unable to load chat. Check CometChat credentials/UID.");
        }
      }
    };

    prepareChat();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!activeUser || !messageListWrapperRef.current) return;
    const scrollable = messageListWrapperRef.current.querySelector(
      ".cometchat-message-list"
    )?.parentElement as HTMLElement | undefined;
    if (!scrollable) return;
    const scrollToBottom = () => {
      scrollable.scrollTop = scrollable.scrollHeight;
    };
    scrollToBottom();
    const observer = new MutationObserver(scrollToBottom);
    observer.observe(scrollable, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [activeUser]);

  if (errorText) {
    return <Box p={2}>{errorText}</Box>;
  }

  if (!isReady) {
    return <Box p={2}>Loading chat...</Box>;
  }

  const usersHeaderView = (
    <Box sx={{ px: 2, py: 1 }}>
      <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
        Chats
      </Typography>
    </Box>
  );

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        flex: 1,
        minHeight: 0,
        width: "100%",
        borderRadius: 3,
        overflow: "hidden",
        border: `1px solid ${theme.palette.divider}`,
        backgroundColor: "#f2ecfb",
        boxShadow: `0 10px 28px ${alpha(theme.palette.common.black, 0.07)}`,
        "--cometchat-font-family":
          '"Nunito Sans",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif',
        "--cometchat-primary-color": theme.palette.primary.main,
        "--cometchat-extended-primary-color-50": alpha(
          theme.palette.primary.main,
          0.06,
        ),
        "--cometchat-extended-primary-color-100": alpha(
          theme.palette.primary.main,
          0.1,
        ),
        "--cometchat-extended-primary-color-200": alpha(
          theme.palette.primary.main,
          0.2,
        ),
        "--cometchat-background-color-01": "#ffffff",
        "--cometchat-background-color-02": "#f8f5fd",
        "--cometchat-background-color-03": "#f0eafa",
        "--cometchat-border-color-light": "#eeeeee",
        "--cometchat-border-color-default": theme.palette.divider,
        "--cometchat-border-color-highlight": theme.palette.primary.main,
        "--cometchat-text-color-primary": theme.palette.text.primary,
        "--cometchat-text-color-secondary": theme.palette.text.secondary,
        "--cometchat-text-color-highlight": theme.palette.primary.main,
        "--cometchat-icon-color-highlight": theme.palette.primary.main,
        "--cometchat-primary-button-background": theme.palette.primary.main,
        "--cometchat-primary-button-text": theme.palette.common.white,
        "--cometchat-font-body-regular":
          '300 14px/20px "Nunito Sans",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif',
        "--cometchat-font-body-medium":
          '600 14px/20px "Nunito Sans",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif',
        "--cometchat-font-heading4-regular":
          '300 16px/22px "Nunito Sans",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif',
        "--cometchat-font-heading4-medium":
          '600 16px/22px "Nunito Sans",-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif',
        "& .cometchat-users, & .cometchat-message-list, & .cometchat-message-header, & .cometchat-message-composer":
          {
            backgroundColor: "transparent",
          },
        "& .cometchat-message-header": {
          backgroundColor: "transparent",
          borderBottom: `1px solid ${theme.palette.divider}`,
          minHeight: 58,
          px: 1.5,
        },
        "& .cometchat-message-composer": {
          border: "none",
          borderTop: `1px solid ${theme.palette.divider}`,
          borderRadius: 0,
          backgroundColor: theme.palette.common.white,
          width: "100%",
          height: "auto",
          minHeight: 64,
          mx: 0,
          my: 0,
          display: "flex",
          flexDirection: "column",
          padding: "8px 10px 10px",
        },
        "& .cometchat-search-bar": {
          borderRadius: 1,
          border: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.common.white,
          minHeight: 40,
          height: 40,
          padding: "0 12px",
          boxSizing: "border-box",
          transition: "border-color .15s ease, box-shadow .15s ease",
        },
        "& .cometchat-users .cometchat-list__header": {
          padding: "0 12px 8px",
          marginTop: 0,
        },
        "& .cometchat-search-bar:focus-within": {
          borderColor: theme.palette.primary.main,
          boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.15)}`,
        },
        "& .cometchat-search-bar__icon": {
          display: "none",
        },
        "& .cometchat-search-bar__input": {
          fontSize: 14,
          lineHeight: "20px",
          color: theme.palette.text.primary,
          paddingLeft: 0,
          fontFamily: '"Nunito Sans", Arial, sans-serif',
        },
        "& .cometchat-search-bar__input::placeholder": {
          color: theme.palette.text.secondary,
          opacity: 1,
        },
        "& .cometchat-message-composer__input": {
          borderBottom: "none",
          border: `1px solid ${theme.palette.divider}`,
          borderRadius: 1,
          backgroundColor: theme.palette.common.white,
          minHeight: 40,
          maxHeight: 120,
          margin: "0",
          padding: "12px 82px 12px 14px",
          fontSize: 14,
          lineHeight: "20px",
          boxSizing: "border-box",
          transition: "border-color .15s ease, box-shadow .15s ease",
          order: 2,
        },
        "& .cometchat-message-composer__input:focus": {
          borderColor: theme.palette.primary.main,
          boxShadow: `0 0 0 2px ${alpha(theme.palette.primary.main, 0.15)}`,
        },
        "& .cometchat-message-composer__input:empty:before": {
          color: theme.palette.text.secondary,
          fontSize: 14,
        },
        "& .cometchat-message-composer__buttons": {
          display: "flex",
          alignItems: "center",
          gap: "4px",
          padding: "0",
          minHeight: 32,
          position: "absolute",
          top: "50%",
          right: "16px",
          transform: "translateY(-50%)",
          overflow: "visible",
          zIndex: 3,
          width: "auto",
          order: 3,
        },
        "& .cometchat-message-composer__buttons .cometchat-button": {
          width: "24px",
          height: "24px",
          minWidth: "24px",
          padding: 0,
          border: "none",
          background: "transparent",
          boxShadow: "none",
        },
        "& .cometchat-message-composer__buttons .cometchat-button:not(:disabled), & .cometchat-message-composer__buttons .cometchat-button:not(:disabled) .cometchat-button__icon":
          {
            cursor: "pointer",
          },
        "& .cometchat-message-composer__buttons .cometchat-button:disabled, & .cometchat-message-composer__buttons .cometchat-button:disabled .cometchat-button__icon":
          {
            cursor: "default",
          },
        "& .cometchat-message-composer__buttons .cometchat-button__icon": {
          width: "20px",
          height: "20px",
          background: theme.palette.text.secondary,
          WebkitMaskSize: "contain",
          maskSize: "contain",
        },
        "& .cometchat-message-composer__emoji-keyboard-button-active .cometchat-button__icon, & .cometchat-message-composer__secondary-button-view-attachment-button-active .cometchat-button__icon":
          {
            background: theme.palette.primary.main,
          },
        "& .cometchat-message-composer__default-buttons": {
          gap: "10px",
          marginRight: "auto",
        },
        "& .cometchat-message-composer__auxilary-button-view, & .cometchat-message-composer__sticker-button-view":
          {
            gap: "10px",
          },
        "& .cometchat-message-composer__secondary-button-view-attachment-button, & .cometchat-message-composer__emoji-keyboard-button":
          {
            position: "relative",
          },
        "& .cometchat-message-composer__secondary-button-view-attachment-button .cometchat-button":
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
            padding: 0,
          },
        "& .cometchat-message-composer__secondary-button-view-attachment-button .cometchat-button__icon":
          {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "20px",
            height: "20px",
            margin: 0,
          },
        "& .cometchat-message-composer__secondary-button-view-attachment-button .cometchat-popover__content":
          {
            zIndex: 1400,
            minWidth: 180,
            borderRadius: 2,
            border: `1px solid ${theme.palette.divider}`,
            backgroundColor: theme.palette.common.white,
            boxShadow: `0 10px 24px ${alpha(theme.palette.common.black, 0.14)}`,
            position: "absolute !important",
            top: "auto !important",
            bottom: "calc(100% + 8px) !important",
            left: "0 !important",
            transform: "none !important",
          },
        "& .cometchat-message-composer__secondary-button-view-attachment-button .cometchat-action-sheet":
          {
            minWidth: 180,
            height: "auto",
            maxHeight: 260,
            backgroundColor: theme.palette.common.white,
          },
        "& .cometchat-action-sheet__item": {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          padding: "10px 12px",
          gap: "10px",
          cursor: "pointer",
          backgroundColor: theme.palette.common.white,
        },
        "& .cometchat-action-sheet__item:hover": {
          background: alpha(theme.palette.primary.main, 0.08),
        },
        "& .cometchat-action-sheet__item-icon": {
          width: 20,
          height: 20,
          background: theme.palette.primary.main,
          flexShrink: 0,
          cursor: "pointer",
        },
        "& .cometchat-action-sheet__item-body": {
          display: "block",
          fontSize: "14px",
          lineHeight: "20px",
          color: theme.palette.text.primary,
          cursor: "pointer",
        },
        "& .cometchat-message-composer__emoji-keyboard-button .cometchat-popover__content":
          {
            zIndex: 1400,
            borderRadius: 2,
            border: `1px solid ${theme.palette.divider}`,
            boxShadow: `0 10px 24px ${alpha(theme.palette.common.black, 0.14)}`,
            position: "absolute !important",
            top: "auto !important",
            bottom: "calc(100% + 8px) !important",
            left: "-120px !important",
            transform: "none !important",
            width: "320px !important",
            height: "320px !important",
            overflow: "hidden",
          },
        "& .cometchat-emoji-keyboard": {
          width: "320px",
          height: "320px",
          border: "none",
          boxShadow: "none",
          position: "relative",
          backgroundColor: theme.palette.common.white,
        },
        "& .cometchat-emoji-keyboard__tabs": {
          minHeight: 44,
          padding: "6px 8px",
          gap: "4px",
        },
        "& .cometchat-emoji-keyboard__tab": {
          width: 28,
          height: 28,
        },
        "& .cometchat-emoji-keyboard__list": {
          padding: "0 10px 10px",
          gap: "6px",
        },
        "& .cometchat-emoji-keyboard__emoji-list": {
          gap: "4px",
        },
        "& .cometchat-emoji-keyboard__list-item": {
          width: 30,
          height: 30,
          fontSize: "22px",
        },
        "& .cometchat-users .cometchat-list-item": {
          borderRadius: 1.5,
          margin: "4px 8px",
          backgroundColor: alpha(theme.palette.common.white, 0.95),
          boxShadow: `0 2px 8px ${alpha(theme.palette.common.black, 0.05)}`,
          transition: "all 0.2s ease",
          minHeight: 58,
          padding: "8px 10px",
          overflow: "hidden",
          cursor: "pointer",
        },
        "& .cometchat-users .cometchat-list-item__body, & .cometchat-users .cometchat-list-item__title-container, & .cometchat-users .cometchat-list-item__body-title, & .cometchat-users .cometchat-list-item__body-subtitle":
          {
            cursor: "pointer",
          },
        "& .cometchat-users__list-item": {
          cursor: "pointer",
        },
        "& .cometchat-users .cometchat-list-item:hover": {
          backgroundColor: alpha(theme.palette.primary.main, 0.08),
          transform: "none",
        },
        "& .cometchat-users__list-item-active .cometchat-list-item": {
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0.86)})`,
          boxShadow: `0 8px 22px ${alpha(theme.palette.primary.main, 0.35)}`,
        },
        "& .cometchat-users__list-item-active .cometchat-list-item__body-title, & .cometchat-users__list-item-active .cometchat-list-item__body-subtitle, & .cometchat-users__list-item-active .cometchat-list-item__trailing-view":
          {
            color: theme.palette.common.white,
          },
        "& .cometchat-users .cometchat-list__body": {
          paddingBottom: 1,
        },
        "& div.cometchat:has(> .cometchat-message-list)": {
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
          overflowY: "auto !important",
          WebkitOverflowScrolling: "touch",
        },
        "& .cometchat-message-list": {
          backgroundColor: "#f7f3fc",
          flex: "0 0 auto",
          display: "flex",
          flexDirection: "column",
        },
        "& .cometchat-message-list__body": {
          flex: "0 0 auto",
        },
        "& .cometchat-message-list__list": {
          paddingBottom: 8,
        },
        "& .cometchat-message-bubble-incoming, & .cometchat-message-bubble-outgoing":
          {
            width: "100%",
          },
        "& .cometchat-message-bubble-incoming .cometchat-message-bubble__body-wrapper":
          {
            marginRight: "auto",
            marginLeft: 0,
            maxWidth: "100%",
          },
        "&  .cometchat-message-bubble.cometchat-message-bubble-outgoing .cometchat-message-bubble__body-wrapper:not([class*='cometchat-message-list__bubble-moderation-approved'])":
          {
            maxWidth: "100%",
          },
        "& .cometchat-message-bubble-outgoing .cometchat-message-bubble__body-wrapper":
          {
            marginLeft: "auto",
            marginRight: 0,
            maxWidth: "100%",
          },
        "& .cometchat-message-list .cometchat-message-bubble-incoming .cometchat-message-bubble__body":
          {
            backgroundColor: theme.palette.common.white,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.12)}`,
            borderRadius: 2,
            boxShadow: `0 1px 4px ${alpha(theme.palette.common.black, 0.06)}`,
          },
        "& .cometchat-message-list .cometchat-message-bubble-outgoing .cometchat-message-bubble__body":
          {
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0.88)})`,
            borderRadius: 2,
            boxShadow: `0 6px 14px ${alpha(theme.palette.primary.main, 0.28)}`,
          },
        "& .cometchat-message-bubble__body": {
          padding: "6px",
          width: "fit-content",
          maxWidth: "100%",
        },
        "& .cometchat-message-bubble__status-info-view": {
          padding: "1px 4px 0 4px",
          gap: "2px",
          lineHeight: 1,
        },
        "& .cometchat-message-bubble .cometchat-date, & .cometchat-message-bubble__status-info-view-helper-text":
          {
            lineHeight: 1.1,
            paddingBottom: 0,
          },
        "& .cometchat-text-bubble__read-more, & .cometchat-text-bubble__read-less":
          {
            display: "none !important",
          },
        "& .cometchat-message-bubble-outgoing .cometchat-text-bubble__body-text, & .cometchat-message-bubble-outgoing .cometchat-date, & .cometchat-message-bubble-outgoing .cometchat-message-bubble__status-info-view-helper-text":
          {
            color: theme.palette.common.white,
          },
        "& .cometchat-message-bubble__body-wrapper": {
          paddingBottom: "12px",
        },
        "& .cometchat-text-bubble__body-text": {
          margin: 0,
          lineHeight: "20px",
          marginBottom: "5px",
        },
        "& .cometchat-date": {
          fontSize: "12px",
        },
        "& .cometchat-message-list__date-header": {
          margin: "5px",
        },
        "& .cometchat-message-bubble__options": {
          display: "none",
        },
        "& .cometchat-message-composer__send-button": {
          borderRadius: 1.5,
          width: 38,
          height: 34,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0.82)})`,
          boxShadow: `0 4px 10px ${alpha(theme.palette.primary.main, 0.25)}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "& .cometchat-message-composer__send-button-active": {
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.main, 0.82)})`,
        },
        "& .cometchat-message-composer__send-button .cometchat-button, & .cometchat-message-composer__send-button .cometchat-button:hover":
          {
            background: "transparent",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 0,
          },
        "& .cometchat-message-composer__send-button .cometchat-button__icon": {
          background: `${theme.palette.common.white} !important`,
          width: 18,
          height: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "& .cometchat-list-item__leading-view": {
          width: 34,
          height: 34,
          minWidth: 34,
          padding: 0,
          overflow: "hidden",
          borderRadius: "50%",
        },
        "& .cometchat-list-item .cometchat-avatar, & .cometchat-list-item .cometchat-avatar__image":
          {
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
          },
        "& .cometchat-list-item__body-title": {
          fontSize: "14px",
        },
        "& .cometchat-list-item__body-subtitle": {
          fontSize: "12px",
        },
      })}
    >
      <Box
        sx={{
          width: 280,
          minWidth: 240,
          maxWidth: 320,
          borderRight: "1px solid",
          borderColor: "divider",
          minHeight: 0,
          overflow: "hidden",
          backgroundColor: "#efe8fa",
        }}
      >
        <CometChatUsers
          activeUser={activeUser ?? undefined}
          onItemClick={setActiveUser}
          hideSearch
          showSectionHeader={false}
          headerView={usersHeaderView}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          minWidth: 0,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          bgcolor: "#f7f3fc",
          p: 1.5,
        }}
      >
        {activeUser ? (
          <>
            <CometChatMessageHeader user={activeUser} />
            <Box
              ref={messageListWrapperRef}
              sx={{
                flex: 1,
                minHeight: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CometChatMessageList
                user={activeUser}
                showScrollbar
                scrollToBottomOnNewMessages
              />
            </Box>
            <CometChatMessageComposer
              user={activeUser}
              hideEmojiKeyboardButton
              hideVoiceRecordingButton
              hideStickersButton
              hideCollaborativeDocumentOption
              hideCollaborativeWhiteboardOption
            />
          </>
        ) : (
          <Box sx={{ p: 3, color: "text.secondary" }}>
            Select a user to start messaging.
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Chat;
