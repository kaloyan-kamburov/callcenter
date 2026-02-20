import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/utils/axiosBaseQuery";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://revolutionlab-001-site31.anytempurl.com/api";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Admins", "Locations", "Roles"],
  endpoints: () => ({}),
});
