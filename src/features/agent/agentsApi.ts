import { baseApi } from "@/api/baseApi";
import type { Agent, CreateAgentPayload, UpdateAgentPayload } from "@/types/Agent";

type AgentListResponse = Agent[] | { data?: Agent[] | null };

export const agentsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAgents: builder.query<Agent[], void>({
      query: () => ({
        url: "admin/agents",
        method: "GET",
      }),
      transformResponse: (response: AgentListResponse) =>
        Array.isArray(response) ? response : (response.data ?? []),
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
