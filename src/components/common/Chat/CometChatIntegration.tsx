/**
 * CometChat Integration - following https://www.cometchat.com/docs/ui-kit/react/v5/integration
 * Uses credentials from CometChat Dashboard
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
import { CometChatSelector } from "./CometChatSelector";
import "./CometChatIntegration.css";

const COMETCHAT_CONSTANTS = {
  APP_ID: "1676088e7ef037d2a",
  REGION: "us",
  AUTH_KEY: "edcb0c5c4252702264ce26578212dc764239db7d",
  UID: "cometchat-uid-1",
};

const uiKitSettings = new UIKitSettingsBuilder()
  .setAppId(COMETCHAT_CONSTANTS.APP_ID)
  .setRegion(COMETCHAT_CONSTANTS.REGION)
  .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
  .subscribePresenceForAllUsers()
  .build();

export const CometChatIntegration = () => {
  const theme = useTheme();
  const [loggedInUser, setLoggedInUser] = useState<CometChat.User | null>(null);
  const [selectedUser, setSelectedUser] = useState<CometChat.User | undefined>();
  const [selectedGroup, setSelectedGroup] = useState<CometChat.Group | undefined>();
  const [selectedCall, setSelectedCall] = useState<CometChat.Call | undefined>();
  const [isReady, setIsReady] = useState(false);
  const [errorText, setErrorText] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (!uiKitSettings) {
      setErrorText("Missing CometChat credentials.");
      return;
    }

    const initPromise = CometChatUIKit.init(uiKitSettings);
    if (!initPromise) {
      setErrorText("CometChat initialization failed.");
      return;
    }

    initPromise
      .then(() => {
        console.log("CometChat initialization completed successfully");
        return CometChatUIKit.getLoggedinUser();
      })
      .then((user) => {
        if (!isMounted) return;
        if (!user) {
          return CometChatUIKit.login(COMETCHAT_CONSTANTS.UID);
        }
        return user;
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
  }, []);

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
