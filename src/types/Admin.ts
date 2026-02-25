import type { AgentPhoneType } from "@/types/Agent";

export type Admin = {
  id: number;
  name: string | null;
  username: string | null;
  email: string | null;
  signature: string | null;
  timeZone: string | null;
  locationId: number | null;
  locationName: string | null;
  interfaceLanguage: string | null;
  phoneType: AgentPhoneType;
  isActive: boolean;
};

export type AdminUpsertPayload = {
  username: string | null;
  password: string | null;
  roleId: number;
  name: string | null;
  email: string | null;
  signature: string | null;
  timeZone: string | null;
  locationId: number | null;
  interfaceLanguage: string | null;
  phoneType: AgentPhoneType;
  isActive: boolean;
};

export type AdminUpdatePayload = {
  id: number;
  name: string | null;
  username: string | null;
  email: string | null;
  signature: string | null;
  timeZone: string | null;
  locationId: number | null;
  locationName: string | null;
  interfaceLanguage: string | null;
  phoneType: AgentPhoneType;
  isActive: boolean;
};
