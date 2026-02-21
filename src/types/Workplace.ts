export type Workplace = {
  id: number | null;
  name: string;
  locationId: number | null;
  sipId: number | null;
  isPredictive: boolean;
  isDeleted: boolean;
};

export type WorkplaceUpsertPayload = Workplace;
