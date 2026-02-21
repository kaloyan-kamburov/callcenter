import type { Agent } from "@/types/Agent";

export type Team = {
  id: number | null;
  name: string;
  supervisorId: number | null;
  supervisorName: string;
  isActive: boolean;
  isDeleted: boolean;
  agents: Agent[];
};

export type TeamUpsertPayload = Team;
