import { useState } from "react";
import { getLocalizedString } from "@cometchat/chat-uikit-react";
import "./CometChatTabs.css";

interface TabItem {
  name: string;
  icon?: string;
}

interface CometChatTabsProps {
  onTabClicked?: (tabItem: TabItem) => void;
  activeTab?: string;
}

export const CometChatTabs = ({
  onTabClicked = () => {},
  activeTab,
}: CometChatTabsProps) => {
  const [hoverTab, setHoverTab] = useState("");

  const tabItems: TabItem[] = [
    { name: getLocalizedString("CHATS") ?? "Chats" },
    { name: getLocalizedString("CALLS") ?? "Calls" },
    { name: getLocalizedString("USERS") ?? "Users" },
    { name: getLocalizedString("GROUPS") ?? "Groups" },
  ];

  return (
    <div className="cometchat-tab-component">
      {tabItems.map((tabItem) => (
        <div
          key={tabItem.name}
          className="cometchat-tab-component__tab"
          onClick={() => onTabClicked(tabItem)}
        >
          <div
            className={
              activeTab === tabItem.name.toLowerCase() ||
              hoverTab === tabItem.name.toLowerCase()
                ? "cometchat-tab-component__tab-text cometchat-tab-component__tab-text-active"
                : "cometchat-tab-component__tab-text"
            }
            onMouseEnter={() => setHoverTab(tabItem.name.toLowerCase())}
            onMouseLeave={() => setHoverTab("")}
          >
            {tabItem.name}
          </div>
        </div>
      ))}
    </div>
  );
};
