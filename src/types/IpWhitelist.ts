export type IpWhitelistEntry = {
  id: number | null;
  ipAddress: string | null;
  name: string | null;
};

export type IpWhitelistUpsertPayload = IpWhitelistEntry;
