import { baseApi } from "@/api/baseApi";
import type { Script, ScriptUpsertPayload } from "@/types/Script";
import type { ServerGridApiResponse, ServerGridParams, ServerGridResult } from "@/types/serverGrid";
import { buildServerGridQueryParams, normalizeServerGridResponse } from "@/utils/serverGrid";

export const scriptsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getScripts: builder.query<ServerGridResult<Script>, ServerGridParams | void>({
      query: (params) => ({
        url: "admin/scripts",
        method: "GET",
        params: params ? buildServerGridQueryParams(params) : undefined,
      }),
      transformResponse: (response: ServerGridApiResponse<Script>) =>
        normalizeServerGridResponse(response),
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
        { type: "Scripts", id: arg.id ?? 0 },
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
