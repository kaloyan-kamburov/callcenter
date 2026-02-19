import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/utils/axiosBaseQuery";

const AUTH_API_BASE_URL = import.meta.env.VITE_AUTH_API_BASE_URL;

export const authBaseApi = createApi({
  reducerPath: "authBaseApi",
  baseQuery: axiosBaseQuery({
    baseUrl: AUTH_API_BASE_URL,
  }),
  tagTypes: ["Auth"],
  endpoints: () => ({}),
});
