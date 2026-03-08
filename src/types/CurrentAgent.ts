import type { AgentPhoneType } from "./Agent";

export type CurrentAgentSipDto = {
  id: number | null;
  name: string | null;
};

export type CurrentAgentTeamDto = {
  id: number;
  name: string | null;
};

export type CurrentAgentWorkplaceDto = {
  id: number;
  name: string | null;
  sip: CurrentAgentSipDto | null;
};

export type CampaignType = "IN" | "OUT" | "BOTH";

export type CurrentAgentCampaignDto = {
  id: number;
  name: string | null;
  type: CampaignType;
};

export type ScriptType =
  | "Community"
  | "CustomerFeedback"
  | "Demographics"
  | "Education"
  | "Events"
  | "Healthcare"
  | "HumanResources"
  | "IndustrySpecific"
  | "MarketResearch"
  | "NonProfit"
  | "Political";

export type CurrentAgentScriptDto = {
  id: number | null;
  title: string | null;
  type: ScriptType;
  content: string | null;
};

export type CurrentAgentWorkScheduleDto = {
  dayOfWeek: string;
  startTime: string;
  endTime: string;
};

export type CurrentAgentDto = {
  agentId: number;
  operatorName: string | null;
  email: string | null;
  timeZone: string | null;
  interfaceLanguage: string | null;
  salesCode: string | null;
  autoDialerDelaySeconds: number | null;
  maxCallsPerAgent: number | null;
  phoneType: AgentPhoneType;
  team: CurrentAgentTeamDto | null;
  workplace: CurrentAgentWorkplaceDto | null;
  campaign: CurrentAgentCampaignDto | null;
  script: CurrentAgentScriptDto | null;
  workSchedules: CurrentAgentWorkScheduleDto[] | null;
  workStatuses: string[] | null;
};
