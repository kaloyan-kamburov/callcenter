import { baseApi } from "@/api/baseApi";
import type { Sip, SipUpsertPayload } from "@/types/Sip";

type SipListResponse = Sip[] | { data?: Sip[] | null };

export const sipsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSips: builder.query<Sip[], void>({
      query: () => ({
        url: "admin/sips",
        method: "GET",
      }),
      transformResponse: (response: SipListResponse) =>
        Array.isArray(response) ? response : (response.data ?? []),
      providesTags: ["Sips"],
    }),
    getSip: builder.query<Sip, number>({
      query: (id) => ({
        url: `admin/sips/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Sips", id }],
    }),
    createSip: builder.mutation<Sip, SipUpsertPayload>({
      query: (body) => ({
        url: "admin/sips",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Sips"],
    }),
    updateSip: builder.mutation<Sip, SipUpsertPayload>({
      query: (body) => ({
        url: "admin/sips",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        "Sips",
        { type: "Sips", id: arg.id ?? 0 },
      ],
    }),
    deleteSip: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/sips/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => ["Sips", { type: "Sips", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetSipsQuery,
  useGetSipQuery,
  useCreateSipMutation,
  useUpdateSipMutation,
  useDeleteSipMutation,
} = sipsApi;
