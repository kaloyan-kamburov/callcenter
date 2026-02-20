import { baseApi } from "@/api/baseApi";
import type { Location, LocationUpsertPayload } from "@/types/Location";

export const locationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query<Location[], void>({
      query: () => ({
        url: "admin/Locations",
        method: "GET",
      }),
      providesTags: ["Locations"],
    }),
    getLocation: builder.query<Location, number>({
      query: (id) => ({
        url: `admin/Locations/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Locations", id }],
    }),
    createLocation: builder.mutation<Location, LocationUpsertPayload>({
      query: (body) => ({
        url: "admin/Locations",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Locations"],
    }),
    updateLocation: builder.mutation<Location, LocationUpsertPayload>({
      query: (body) => ({
        url: "admin/Locations",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => ["Locations", { type: "Locations", id: arg.id }],
    }),
    deleteLocation: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/Locations/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (_result, _error, id) => ["Locations", { type: "Locations", id }],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetLocationsQuery,
  useGetLocationQuery,
  useCreateLocationMutation,
  useUpdateLocationMutation,
  useDeleteLocationMutation,
} = locationsApi;
