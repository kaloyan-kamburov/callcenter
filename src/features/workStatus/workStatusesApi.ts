import { baseApi } from "@/api/baseApi";

type WorkStatusListResponse = string[] | { data?: string[] | null };

export const workStatusesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getWorkStatuses: builder.query<string[], void>({
      query: () => ({
        url: "work-statuses",
        method: "GET",
      }),
      transformResponse: (response: WorkStatusListResponse) =>
        Array.isArray(response) ? response : (response.data ?? []),
      providesTags: ["WorkStatuses"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetWorkStatusesQuery } = workStatusesApi;
