import { baseApi } from "@/api/baseApi";
import type { Workplace, WorkplaceUpsertPayload } from "@/types/Workplace";
import type { ServerGridApiResponse, ServerGridParams, ServerGridResult } from "@/types/serverGrid";
import { buildServerGridQueryParams, normalizeServerGridResponse } from "@/utils/serverGrid";

export const workplacesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWorkplaces: builder.query<ServerGridResult<Workplace>, ServerGridParams | void>({
      query: (params) => ({
        url: "admin/workplaces",
        method: "GET",
        params: params ? buildServerGridQueryParams(params) : undefined,
      }),
      transformResponse: (response: ServerGridApiResponse<Workplace>) =>
        normalizeServerGridResponse(response),
      providesTags: ["Workplaces"],
    }),
    getWorkplace: builder.query<Workplace, number>({
      query: (id) => ({
        url: `admin/workplaces/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Workplaces", id }],
    }),
    createWorkplace: builder.mutation<Workplace, WorkplaceUpsertPayload>({
      query: (body) => ({
        url: "admin/workplaces",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Workplaces"],
    }),
    updateWorkplace: builder.mutation<Workplace, WorkplaceUpsertPayload>({
      query: (body) => ({
        url: "admin/workplaces",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        "Workplaces",
        { type: "Workplaces", id: arg.id ?? 0 },
      ],
    }),
    deleteWorkplace: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/workplaces/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => ["Workplaces", { type: "Workplaces", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetWorkplacesQuery,
  useGetWorkplaceQuery,
  useCreateWorkplaceMutation,
  useUpdateWorkplaceMutation,
  useDeleteWorkplaceMutation,
} = workplacesApi;
