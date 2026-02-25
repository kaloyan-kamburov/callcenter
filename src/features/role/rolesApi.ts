import { baseApi } from "@/api/baseApi";
import type { Role } from "@/types/Role";

type RoleListResponse = Role[] | { data?: Role[] | null };

export const rolesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRoles: builder.query<Role[], void>({
      query: () => ({
        url: "admin/roles/assignable",
        method: "GET",
      }),
      transformResponse: (response: RoleListResponse) =>
        Array.isArray(response) ? response : (response.data ?? []),
      providesTags: ["Roles"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetRolesQuery } = rolesApi;
