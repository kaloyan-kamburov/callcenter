import { baseApi } from "@/api/baseApi";
import type { Role } from "@/types/Role";

export const rolesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRoles: builder.query<Role[], void>({
      query: () => ({
        url: "admin/roles/assignable",
        method: "GET",
      }),
      providesTags: ["Roles"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetRolesQuery } = rolesApi;
