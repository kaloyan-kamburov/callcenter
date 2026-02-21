export type IpWhitelistEntry = {
  id: number | null;
  ipAddress: string;
  name: string;
};

export type IpWhitelistUpsertPayload = IpWhitelistEntry;
