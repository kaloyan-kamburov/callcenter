import { baseApi } from "@/api/baseApi";
import type { Location, LocationUpsertPayload } from "@/types/Location";

type LocationListResponse = Location[] | { data?: Location[] | null };

export const locationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getLocations: builder.query<Location[], void>({
      query: () => ({
        url: "admin/locations",
        method: "GET",
      }),
      transformResponse: (response: LocationListResponse) =>
        Array.isArray(response) ? response : (response.data ?? []),
      providesTags: ["Locations"],
    }),
    getLocation: builder.query<Location, number>({
      query: (id) => ({
        url: `admin/locations/${id}`,
        method: "GET",
      }),
      providesTags: (_result, _error, id) => [{ type: "Locations", id }],
    }),
    createLocation: builder.mutation<Location, LocationUpsertPayload>({
      query: (body) => ({
        url: "admin/locations",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Locations"],
    }),
    updateLocation: builder.mutation<Location, LocationUpsertPayload>({
      query: (body) => ({
        url: "admin/locations",
        method: "PUT",
        data: body,
      }),
      invalidatesTags: (_result, _error, arg) => [
        "Locations",
        { type: "Locations", id: arg.id ?? 0 },
      ],
    }),
    deleteLocation: builder.mutation<unknown, number>({
      query: (id) => ({
        url: `admin/locations/${id}`,
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
