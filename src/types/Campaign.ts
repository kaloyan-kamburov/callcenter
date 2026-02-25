export const CAMPAIGN_TYPES = ["IN", "OUT", "BOTH"] as const;

export type CampaignType = (typeof CAMPAIGN_TYPES)[number];

export type CampaignTeam = {
  id: number;
  name: string | null;
};

export type Campaign = {
  id: number | null;
  name: string | null;
  type: CampaignType;
  scriptId: number | null;
  clientId: number | null;
  openUrlAutomatically: boolean;
  supportUrl: string | null;
  playCallTone: boolean;
  removeDuplicateNumbers: boolean;
  isActive: boolean | null;
  enableCallEnd: boolean;
  enableIntegration: boolean;
  fillSurveyThreshold: number;
  enableStopRecording: boolean;
  teams: CampaignTeam[] | null;
};

export type CampaignUpsertPayload = Campaign;
