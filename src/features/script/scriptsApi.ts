import { baseApi } from "@/api/baseApi";
import type { Script, ScriptUpsertPayload } from "@/types/Script";

type ScriptListResponse = Script[] | { data?: Script[] | null };

export const scriptsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getScripts: builder.query<Script[], void>({
      query: () => ({
        url: "admin/scripts",
        method: "GET",
      }),
      transformResponse: (response: ScriptListResponse) =>
        Array.isArray(response) ? response : (response.data ?? []),
      providesTags: ["Scripts"],
    }),
    getScript: builder.query<Script, number>({
      query: (id) => ({
        url: `admin/scripts/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Scripts", id }],
    }),
    createScript: builder.mutation<Script, ScriptUpsertPayload>({
      query: (body) => ({
        url: "admin/scripts",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Scripts"],
    }),
    updateScript: builder.mutation<Script, ScriptUpsertPayload>({
      query: (body) => ({
        url: "admin/scripts",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        "Scripts",
        { type: "Scripts", id: arg.id },
      ],
    }),
    deleteScript: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/scripts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => [
        "Scripts",
        { type: "Scripts", id },
      ],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetScriptsQuery,
  useGetScriptQuery,
  useCreateScriptMutation,
  useUpdateScriptMutation,
  useDeleteScriptMutation,
} = scriptsApi;
