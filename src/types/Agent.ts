export type AgentWorkSchedule = {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
};

export type Agent = {
  id: number | null;
  operatorName: string;
  username: string;
  password?: string;
  email: string;
  signature: string;
  timeZone: string;
  locationId: number | null;
  locationName?: string;
  interfaceLanguage: string;
  salesCode: string;
  autoDialerDelaySeconds: number | null;
  maxCallsPerAgent: number | null;
  phoneType: number;
  isActive: boolean;
  teamId: number | null;
  scriptId: number | null;
  workplaceId: number | null;
  workSchedule: AgentWorkSchedule[];
};

export type CreateAgentPayload = Omit<Agent, "id">;
export type UpdateAgentPayload = Agent;
