import { baseApi } from "@/api/baseApi";
import type { IpWhitelistEntry, IpWhitelistUpsertPayload } from "@/types/IpWhitelist";

export const ipWhitelistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getIpWhitelistEntries: builder.query<IpWhitelistEntry[], void>({
      query: () => ({
        url: "admin/ip-whitelist",
        method: "GET",
      }),
      providesTags: ["IpWhitelist"],
    }),
    getIpWhitelistEntry: builder.query<IpWhitelistEntry, number>({
      query: (id) => ({
        url: `admin/ip-whitelist/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "IpWhitelist", id }],
    }),
    createIpWhitelistEntry: builder.mutation<IpWhitelistEntry, IpWhitelistUpsertPayload>({
      query: (body) => ({
        url: "admin/ip-whitelist",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["IpWhitelist"],
    }),
    updateIpWhitelistEntry: builder.mutation<IpWhitelistEntry, IpWhitelistUpsertPayload>({
      query: (body) => ({
        url: "admin/ip-whitelist",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        "IpWhitelist",
        { type: "IpWhitelist", id: arg.id ?? 0 },
      ],
    }),
    deleteIpWhitelistEntry: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/ip-whitelist/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => ["IpWhitelist", { type: "IpWhitelist", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetIpWhitelistEntriesQuery,
  useGetIpWhitelistEntryQuery,
  useCreateIpWhitelistEntryMutation,
  useUpdateIpWhitelistEntryMutation,
  useDeleteIpWhitelistEntryMutation,
} = ipWhitelistApi;
