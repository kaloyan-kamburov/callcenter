import { baseApi } from "@/api/baseApi";
import type { Team, TeamUpsertPayload } from "@/types/Team";

export const teamsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getTeams: builder.query<Team[], void>({
      query: () => ({
        url: "admin/teams",
        method: "GET",
      }),
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
