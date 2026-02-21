export type Campaign = {
  id: number | null;
  name: string;
  type: number;
  openUrlAutomatically: boolean;
  supportUrl: string;
  playCallTone: boolean;
  removeDuplicateNumbers: boolean;
  isActive: boolean;
  enableCallEnd: boolean;
  enableIntegration: boolean;
  fillSurveyThreshold: number;
  enableStopRecording: boolean;
};

export type CampaignUpsertPayload = Campaign;
