export type Admin = {
  id: number;
  name: string;
  username: string;
  email: string;
  signature: string;
  timeZone: string;
  locationId: number;
  locationName: string;
  interfaceLanguage: string;
  phoneType: number;
  isActive: boolean;
};

export type AdminUpsertPayload = {
  username: string;
  password: string;
  roleId: number;
  name: string;
  email: string;
  signature: string;
  timeZone: string;
  locationId: number;
  interfaceLanguage: string;
  phoneType: number;
  isActive: boolean;
};

export type AdminUpdatePayload = {
  id: number;
  name: string;
  username: string;
  email: string;
  signature: string;
  timeZone: string;
  locationId: number;
  locationName: string;
  interfaceLanguage: string;
  phoneType: number;
  isActive: boolean;
};
