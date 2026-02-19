import { authBaseApi } from "@/api/authBaseApi";
import type { RootState } from "@/store";
import type { AxiosError } from "axios";

export const authApi = authBaseApi.injectEndpoints({
  endpoints: (builder) => ({
    me: builder.query<unknown, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),
    login: builder.mutation<
      { accessToken: string; userId: number; role: string },
      {
        username: string;
        password: string;
        onError?: (error: AxiosError) => void;
      }
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
  overrideExisting: false,
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
