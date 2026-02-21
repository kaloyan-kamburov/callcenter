export type Client = {
  id: number;
  name: string;
  username: string;
  password?: string;
  isActive: boolean;
  createdAt?: string;
};

export type CreateClientPayload = {
  username: string;
  password: string;
  name: string;
  isActive: boolean;
};

export type UpdateClientPayload = Client;
