import { baseApi } from "@/api/baseApi";
import type { Workplace, WorkplaceUpsertPayload } from "@/types/Workplace";

type WorkplaceListResponse = Workplace[] | { data?: Workplace[] | null };

export const workplacesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWorkplaces: builder.query<Workplace[], void>({
      query: () => ({
        url: "admin/workplaces",
        method: "GET",
      }),
      transformResponse: (response: WorkplaceListResponse) =>
        Array.isArray(response) ? response : (response.data ?? []),
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
