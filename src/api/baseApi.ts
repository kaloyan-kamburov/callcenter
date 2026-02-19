import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/utils/axiosBaseQuery";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Admins"],
  endpoints: () => ({}),
});
