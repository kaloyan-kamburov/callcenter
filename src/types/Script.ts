export const SCRIPT_TYPES = [
  "Community",
  "CustomerFeedback",
  "Demographics",
  "Education",
  "Events",
  "Healthcare",
  "HumanResources",
  "IndustrySpecific",
  "MarketResearch",
  "NonProfit",
  "Political",
] as const;

export type ScriptType = (typeof SCRIPT_TYPES)[number];

export type Script = {
  id: number;
  title: string;
  type: ScriptType;
  content: string;
};

export type ScriptUpsertPayload = {
  id: number;
  title: string;
  type: ScriptType;
  content: string;
};
