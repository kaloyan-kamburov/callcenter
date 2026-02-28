import { baseApi } from "@/api/baseApi";
import type { Sip, SipUpsertPayload } from "@/types/Sip";
import type { ServerGridApiResponse, ServerGridParams, ServerGridResult } from "@/types/serverGrid";
import { buildServerGridQueryParams, normalizeServerGridResponse } from "@/utils/serverGrid";

export const sipsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSips: builder.query<ServerGridResult<Sip>, ServerGridParams | void>({
      query: (params) => ({
        url: "admin/sips",
        method: "GET",
        params: params ? buildServerGridQueryParams(params) : undefined,
      }),
      transformResponse: (response: ServerGridApiResponse<Sip>) =>
        normalizeServerGridResponse(response),
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
