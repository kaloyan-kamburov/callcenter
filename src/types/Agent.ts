export const AGENT_PHONE_TYPES = ["WebRTC", "SoftPhone", "WebRTCOld"] as const;
export const DAY_OF_WEEK_VALUES = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

export type AgentPhoneType = (typeof AGENT_PHONE_TYPES)[number];
export type DayOfWeek = (typeof DAY_OF_WEEK_VALUES)[number];

export type AgentWorkSchedule = {
  dayOfWeek: DayOfWeek;
  startTime: string;
  endTime: string;
};

export type Agent = {
  id: number | null;
  operatorName: string | null;
  username: string | null;
  password: string | null;
  email: string | null;
  signature: string | null;
  timeZone: string | null;
  locationId: number | null;
  locationName: string | null;
  interfaceLanguage: string | null;
  salesCode: string | null;
  autoDialerDelaySeconds: number | null;
  maxCallsPerAgent: number | null;
  phoneType: AgentPhoneType;
  isActive: boolean;
  teamId: number | null;
  workplaceId: number | null;
  workSchedule: AgentWorkSchedule[] | null;
};

export type CreateAgentPayload = Omit<Agent, "id" | "locationName">;
export type UpdateAgentPayload = Agent;
