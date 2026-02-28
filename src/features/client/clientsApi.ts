import { baseApi } from "@/api/baseApi";
import type { Client, CreateClientPayload, UpdateClientPayload } from "@/types/Client";
import type { ServerGridApiResponse, ServerGridParams, ServerGridResult } from "@/types/serverGrid";
import { buildServerGridQueryParams, normalizeServerGridResponse } from "@/utils/serverGrid";

export const clientsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClients: builder.query<ServerGridResult<Client>, ServerGridParams | void>({
      query: (params) => ({
        url: "admin/clients",
        method: "GET",
        params: params ? buildServerGridQueryParams(params) : undefined,
      }),
      transformResponse: (response: ServerGridApiResponse<Client>) =>
        normalizeServerGridResponse(response),
      providesTags: ["Clients"],
    }),
    getClient: builder.query<Client, number>({
      query: (id) => ({
        url: `admin/clients/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Clients", id }],
    }),
    createClient: builder.mutation<Client, CreateClientPayload>({
      query: (body) => ({
        url: "admin/clients",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Clients"],
    }),
    updateClient: builder.mutation<Client, UpdateClientPayload>({
      query: (body) => ({
        url: "admin/clients",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => ["Clients", { type: "Clients", id: arg.id }],
    }),
    deleteClient: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/clients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => ["Clients", { type: "Clients", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetClientsQuery,
  useGetClientQuery,
  useCreateClientMutation,
  useUpdateClientMutation,
  useDeleteClientMutation,
} = clientsApi;
