import { baseApi } from "@/api/baseApi";
import type { Agent, CreateAgentPayload, UpdateAgentPayload } from "@/types/Agent";
import type { ServerGridApiResponse, ServerGridParams, ServerGridResult } from "@/types/serverGrid";
import { buildServerGridQueryParams, normalizeServerGridResponse } from "@/utils/serverGrid";

export const agentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAgents: builder.query<ServerGridResult<Agent>, ServerGridParams | void>({
      query: (params) => ({
        url: "admin/agents",
        method: "GET",
        params: params ? buildServerGridQueryParams(params) : undefined,
      }),
      transformResponse: (response: ServerGridApiResponse<Agent>) =>
        normalizeServerGridResponse(response),
      providesTags: ["Agents"],
    }),
    getAgent: builder.query<Agent, number>({
      query: (id) => ({
        url: `admin/agents/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Agents", id }],
    }),
    createAgent: builder.mutation<Agent, CreateAgentPayload>({
      query: (body) => ({
        url: "admin/agents",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Agents"],
    }),
    updateAgent: builder.mutation<Agent, UpdateAgentPayload>({
      query: (body) => ({
        url: "admin/agents",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        "Agents",
        { type: "Agents", id: arg.id ?? 0 },
      ],
    }),
    deleteAgent: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/agents/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => ["Agents", { type: "Agents", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAgentsQuery,
  useGetAgentQuery,
  useCreateAgentMutation,
  useUpdateAgentMutation,
  useDeleteAgentMutation,
} = agentsApi;
