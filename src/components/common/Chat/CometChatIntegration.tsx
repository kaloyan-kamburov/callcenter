/**
 * CometChat Integration - following https://www.cometchat.com/docs/ui-kit/react/v5/integration
 * Uses credentials from CometChat Dashboard
 * Auto-registers user as "user-{userId}" if they don't exist in CometChat
 */
import { useState, useEffect } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import {
  CometChatMessageComposer,
  CometChatMessageHeader,
  CometChatMessageList,
  CometChatUIKit,
  UIKitSettingsBuilder,
} from "@cometchat/chat-uikit-react";
import { Box } from "@mui/material";
import { alpha } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { useAuth } from "@/features/auth/useAuth";
import { CometChatSelector } from "./CometChatSelector";
import "./CometChatIntegration.css";

const getCometChatSettings = () => {
  const appId = import.meta.env.VITE_COMETCHAT_APP_ID ?? "";
  const region = import.meta.env.VITE_COMETCHAT_REGION ?? "us";
  const authKey = import.meta.env.VITE_COMETCHAT_AUTH_KEY ?? "";
  if (!appId || !authKey) return null;
  return new UIKitSettingsBuilder()
    .setAppId(appId)
    .setRegion(region)
    .setAuthKey(authKey)
    .subscribePresenceForAllUsers()
    .build();
};

export const CometChatIntegration = () => {
  const theme = useTheme();
  const { user: authUser } = useAuth();
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User | null>(null);
  const [selectedUser, setSelectedUser] = useState<CometChat.User | undefined>();
  const [selectedGroup, setSelectedGroup] = useState<CometChat.Group | undefined>();
  const [selectedCall, setSelectedCall] = useState<CometChat.Call | undefined>();
  const [isReady, setIsReady] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const uiKitSettings = getCometChatSettings();
    if (!uiKitSettings) {
      setErrorText(
        "Missing CometChat credentials. Set VITE_COMETCHAT_APP_ID, VITE_COMETCHAT_REGION, VITE_COMETCHAT_AUTH_KEY in .env",
      );
      return;
    }

    const initPromise = CometChatUIKit.init(uiKitSettings);
    if (!initPromise) {
      setErrorText("CometChat initialization failed.");
      return;
    }

    const cometchatUid =
      authUser?.id != null ? `user-${authUser.id}` : "user-anonymous";
    const cometchatName =
      authUser?.name ?? (authUser?.id != null ? `user-${authUser.id}` : "user-anonymous");

    initPromise
      .then(() => {
        console.log("CometChat initialization completed successfully");
        return CometChatUIKit.getLoggedinUser();
      })
      .then((user) => {
        if (!isMounted) return user;
        if (user) return user;
        return CometChatUIKit.login(cometchatUid).catch(async (loginErr) => {
          const errMsg = String(loginErr?.message ?? loginErr);
          const isUserNotFound =
            errMsg.includes("ERR_UID_NOT_FOUND") ||
            errMsg.includes("not found") ||
            errMsg.includes("does not exist");
          if (isUserNotFound) {
            const newUser = new CometChat.User(cometchatUid, cometchatName);
            await CometChatUIKit.createUser(newUser);
            return CometChatUIKit.login(cometchatUid);
          }
          throw loginErr;
        });
      })
      .then((user) => {
        if (!isMounted) return;
        setLoggedInUser(user as CometChat.User);
        setIsReady(true);
      })
      .catch((err) => {
        console.error("CometChat setup failed:", err);
        if (isMounted) {
          setErrorText("Unable to load chat. Check CometChat credentials/UID.");
        }
      });

    return () => {
      isMounted = false;
    };
  }, [authUser?.id, authUser?.name]);

  const handleSelectorItemClicked = (activeItem: CometChat.User | CometChat.Group | CometChat.Conversation | CometChat.Call) => {
    const item = activeItem instanceof CometChat.Conversation
      ? activeItem.getConversationWith()
      : activeItem;

    if (item instanceof CometChat.User) {
      setSelectedUser(item);
      setSelectedCall(undefined);
      setSelectedGroup(undefined);
    } else if (item instanceof CometChat.Group) {
      setSelectedUser(undefined);
      setSelectedGroup(item);
      setSelectedCall(undefined);
    } else if (item instanceof CometChat.Call) {
      setSelectedUser(undefined);
      setSelectedGroup(undefined);
      setSelectedCall(item);
    }
  };

  if (errorText) {
    return <div className="cometchat-integration-error">{errorText}</div>;
  }

  if (!isReady) {
    return <div className="cometchat-integration-loading">Loading chat...</div>;
  }

  return (
    <Box
      className="cometchat-container"
      sx={{
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
        "--cometchat-border-color-highlight": theme.palette.primary.main,
        "--cometchat-text-color-highlight": theme.palette.primary.main,
        "--cometchat-icon-color-highlight": theme.palette.primary.main,
        "--cometchat-primary-button-background": theme.palette.primary.main,
      }}
    >
      <div className="conversations-with-messages">
        <div className="conversations-wrapper">
          <CometChatSelector
            loggedInUser={loggedInUser}
            onSelectorItemClicked={handleSelectorItemClicked}
          />
        </div>
        {selectedUser || selectedGroup || selectedCall ? (
          <div className="messages-wrapper">
            <CometChatMessageHeader user={selectedUser} group={selectedGroup} />
            <div className="messages-list-area">
              <CometChatMessageList user={selectedUser} group={selectedGroup} />
            </div>
            <CometChatMessageComposer user={selectedUser} group={selectedGroup} />
          </div>
        ) : (
          <div className="empty-conversation">Select Conversation to start</div>
        )}
      </div>
    </Box>
  );
};
