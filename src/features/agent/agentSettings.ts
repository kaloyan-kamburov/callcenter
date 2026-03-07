export const CURRENT_AGENT_SETTINGS_KEY = "currentAgentSettings";

export type AgentSettings = {
  workplaceId?: number;
  status?: string;
};

export function getAgentSettings(): AgentSettings {
  try {
    const raw = localStorage.getItem(CURRENT_AGENT_SETTINGS_KEY);
    if (!raw) return {};
    return JSON.parse(raw) as AgentSettings;
  } catch {
    return {};
  }
}

export function storeAgentSettings(settings: AgentSettings) {
  localStorage.setItem(CURRENT_AGENT_SETTINGS_KEY, JSON.stringify(settings));
  window.dispatchEvent(new CustomEvent("agentSettingsChanged"));
}
