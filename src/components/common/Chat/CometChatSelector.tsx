import { useState } from "react";
import { CometChat } from "@cometchat/chat-sdk-javascript";
import type { Call, Conversation, Group, User } from "@cometchat/chat-sdk-javascript";
import {
  CometChatCallLogs,
  CometChatConversations,
  CometChatGroups,
  CometChatUsers,
} from "@cometchat/chat-uikit-react";
import { CometChatTabs } from "./CometChatTabs";
import "./CometChatSelector.css";

type SelectorItem = User | Group | Conversation | Call;

interface CometChatSelectorProps {
  loggedInUser: unknown;
  onSelectorItemClicked?: (input: SelectorItem, type: string) => void;
}

export const CometChatSelector = ({
  loggedInUser,
  onSelectorItemClicked = () => {},
}: CometChatSelectorProps) => {
  const [activeItem, setActiveItem] = useState<
    Conversation | User | Group | Call | undefined
  >();
  const [activeTab, setActiveTab] = useState<string>("users");

  if (!loggedInUser) {
    return null;
  }

  return (
    <div className="cometchat-selector">
      <div className="cometchat-selector__list">
      {activeTab === "chats" ? (
        <CometChatConversations
          activeConversation={
            activeItem instanceof CometChat.Conversation ? activeItem : undefined
          }
          onItemClick={(e) => {
            setActiveItem(e);
            onSelectorItemClicked(e, "updateSelectedItem");
          }}
        />
      ) : activeTab === "calls" ? (
        <CometChatCallLogs
          activeCall={
            activeItem instanceof CometChat.Call ? activeItem : undefined
          }
          onItemClick={(e: Call) => {
            setActiveItem(e);
            onSelectorItemClicked(e, "updateSelectedItemCall");
          }}
        />
      ) : activeTab === "users" ? (
        <CometChatUsers
          activeUser={
            activeItem instanceof CometChat.User ? activeItem : undefined
          }
          onItemClick={(e) => {
            setActiveItem(e);
            onSelectorItemClicked(e, "updateSelectedItemUser");
          }}
        />
      ) : activeTab === "groups" ? (
        <CometChatGroups
          activeGroup={
            activeItem instanceof CometChat.Group ? activeItem : undefined
          }
          onItemClick={(e) => {
            setActiveItem(e);
            onSelectorItemClicked(e, "updateSelectedItemGroup");
          }}
        />
      ) : null}
      </div>
      <CometChatTabs
        activeTab={activeTab}
        onTabClicked={(item) => setActiveTab(item.name.toLowerCase())}
      />
    </div>
  );
};
