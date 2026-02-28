import { baseApi } from "@/api/baseApi";
import type { Team, TeamUpsertPayload } from "@/types/Team";
import type { ServerGridApiResponse, ServerGridParams, ServerGridResult } from "@/types/serverGrid";
import { buildServerGridQueryParams, normalizeServerGridResponse } from "@/utils/serverGrid";

export const teamsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query<ServerGridResult<Team>, ServerGridParams | void>({
      query: (params) => ({
        url: "admin/teams",
        method: "GET",
        params: params ? buildServerGridQueryParams(params) : undefined,
      }),
      transformResponse: (response: ServerGridApiResponse<Team>) =>
        normalizeServerGridResponse(response),
      providesTags: ["Teams"],
    }),
    getTeam: builder.query<Team, number>({
      query: (id) => ({
        url: `admin/teams/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Teams", id }],
    }),
    createTeam: builder.mutation<Team, TeamUpsertPayload>({
      query: (body) => ({
        url: "admin/teams",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Teams"],
    }),
    updateTeam: builder.mutation<Team, TeamUpsertPayload>({
      query: (body) => ({
        url: "admin/teams",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => ["Teams", { type: "Teams", id: arg.id ?? 0 }],
    }),
    deleteTeam: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/teams/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => ["Teams", { type: "Teams", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetTeamsQuery,
  useGetTeamQuery,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} = teamsApi;
