import { baseApi } from "@/api/baseApi";
import type { Campaign, CampaignUpsertPayload } from "@/types/Campaign";
import type { ServerGridApiResponse, ServerGridParams, ServerGridResult } from "@/types/serverGrid";
import { buildServerGridQueryParams, normalizeServerGridResponse } from "@/utils/serverGrid";

export const campaignsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCampaigns: builder.query<ServerGridResult<Campaign>, ServerGridParams | void>({
      query: (params) => ({
        url: "admin/campaigns",
        method: "GET",
        params: params ? buildServerGridQueryParams(params) : undefined,
      }),
      transformResponse: (response: ServerGridApiResponse<Campaign>) =>
        normalizeServerGridResponse(response),
      providesTags: ["Campaigns"],
    }),
    getCampaign: builder.query<Campaign, number>({
      query: (id) => ({
        url: `admin/campaigns/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Campaigns", id }],
    }),
    createCampaign: builder.mutation<Campaign, CampaignUpsertPayload>({
      query: (body) => ({
        url: "admin/campaigns",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Campaigns"],
    }),
    updateCampaign: builder.mutation<Campaign, CampaignUpsertPayload>({
      query: (body) => ({
        url: "admin/campaigns",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        "Campaigns",
        { type: "Campaigns", id: arg.id ?? 0 },
      ],
    }),
    deleteCampaign: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/campaigns/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => ["Campaigns", { type: "Campaigns", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCampaignsQuery,
  useGetCampaignQuery,
  useCreateCampaignMutation,
  useUpdateCampaignMutation,
  useDeleteCampaignMutation,
} = campaignsApi;
