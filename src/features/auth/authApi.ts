import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/utils/axiosBaseQuery";
import type { RootState } from "@/store";
import type { AxiosError } from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? import.meta.env.VITE_BASE_URL ?? "";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: axiosBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    me: builder.query<unknown, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
    login: builder.mutation<
      unknown,
      { email: string; password: string; onError?: (error: AxiosError) => void }
    >({
      query: ({ onError, ...payload }) => ({
        url: "/auth/login",
        method: "POST",
        data: payload,
        onError,
      }),
      invalidatesTags: ["Auth"],
    }),
    logout: builder.mutation<unknown, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    register: builder.mutation<
      unknown,
      { name?: string; email: string; password: string }
    >({
      query: (body) => ({
        url: "/auth/register",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Auth"],
    }),
    forgotPassword: builder.mutation<unknown, { email: string }>({
      query: (body) => ({
        url: "/auth/forgot-password",
        method: "POST",
        data: body,
      }),
    }),
    resetPassword: builder.mutation<
      unknown,
      { token: string; password: string }
    >({
      query: (body) => ({
        url: "/auth/reset-password",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Auth"],
    }),
    updateUser: builder.mutation<unknown, Record<string, unknown>>({
      query: (body) => ({
        url: "/auth/me",
        method: "PATCH",
        data: body,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useUpdateUserMutation,
} = authApi;
export const selectAuth = (state: RootState) => state[authApi.reducerPath];
export const selectCurrentUser = (state: RootState) =>
  authApi.endpoints.me.select(undefined)(state)?.data ?? null;
