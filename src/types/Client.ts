export type Client = {
  id: number;
  name: string | null;
  username: string | null;
  password?: string | null;
  isActive: boolean;
  createdAt?: string;
};

export type CreateClientPayload = {
  username: string | null;
  password: string | null;
  name: string | null;
  isActive: boolean;
};

export type UpdateClientPayload = Client;
