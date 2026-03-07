import { useState, useEffect } from "react";
import { getAgentSettings } from "./agentSettings";

export function useAgentSettings() {
  const [settings, setSettings] = useState(getAgentSettings);

  useEffect(() => {
    const handler = () => setSettings(getAgentSettings());
    window.addEventListener("agentSettingsChanged", handler);
    return () => window.removeEventListener("agentSettingsChanged", handler);
  }, []);

  return settings;
}
