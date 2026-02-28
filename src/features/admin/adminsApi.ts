import { baseApi } from "@/api/baseApi";
import type { Admin, AdminUpdatePayload, AdminUpsertPayload } from "@/types/Admin";
import type { ServerGridApiResponse, ServerGridParams, ServerGridResult } from "@/types/serverGrid";
import { buildServerGridQueryParams, normalizeServerGridResponse } from "@/utils/serverGrid";

export const adminsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdmins: builder.query<ServerGridResult<Admin>, ServerGridParams | void>({
      query: (params) => ({
        url: "admin/admins",
        method: "GET",
        params: params ? buildServerGridQueryParams(params) : undefined,
      }),
      transformResponse: (response: ServerGridApiResponse<Admin>) =>
        normalizeServerGridResponse(response),
      providesTags: ["Admins"],
    }),
    getAdmin: builder.query<Admin, number>({
      query: (id) => ({
        url: `admin/admins/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Admins", id }],
    }),
    createAdmin: builder.mutation<Admin, AdminUpsertPayload>({
      query: (body) => ({
        url: "admin/admins",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Admins"],
    }),
    updateAdmin: builder.mutation<Admin, AdminUpdatePayload>({
      query: (body) => ({
        url: "admin/admins",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => ["Admins", { type: "Admins", id: arg.id }],
    }),
    deleteAdmin: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/admins/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => ["Admins", { type: "Admins", id }],
    }),
    getAdminSupervisors: builder.query<Admin[], void>({
      query: () => ({
        url: "admin/admins/supervisors",
        method: "GET",
      }),
      transformResponse: (response: ServerGridApiResponse<Admin>) =>
        normalizeServerGridResponse(response).data,
      providesTags: ["Admins"],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAdminsQuery,
  useGetAdminQuery,
  useCreateAdminMutation,
  useUpdateAdminMutation,
  useDeleteAdminMutation,
  useGetAdminSupervisorsQuery,
} = adminsApi;
