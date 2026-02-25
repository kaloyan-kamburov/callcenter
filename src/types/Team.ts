import type { Agent } from "@/types/Agent";

export type Team = {
  id: number | null;
  name: string | null;
  supervisorId: number | null;
  supervisorName: string | null;
  isActive: boolean;
  isDeleted: boolean;
  agents: Agent[] | null;
};

export type TeamUpsertPayload = Team;
