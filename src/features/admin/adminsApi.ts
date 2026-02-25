import { baseApi } from "@/api/baseApi";
import type { Admin, AdminUpdatePayload, AdminUpsertPayload } from "@/types/Admin";

type AdminListResponse = Admin[] | { data?: Admin[] | null };

export const adminsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdmins: builder.query<Admin[], void>({
      query: () => ({
        url: "admin/admins",
        method: "GET",
      }),
      transformResponse: (response: AdminListResponse) =>
        Array.isArray(response) ? response : (response.data ?? []),
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
      transformResponse: (response: AdminListResponse) =>
        Array.isArray(response) ? response : (response.data ?? []),
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
