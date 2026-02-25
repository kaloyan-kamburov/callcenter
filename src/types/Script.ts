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
  id: number | null;
  title: string | null;
  type: ScriptType;
  content: string | null;
};

export type ScriptUpsertPayload = {
  id: number | null;
  title: string | null;
  type: ScriptType;
  content: string | null;
};
