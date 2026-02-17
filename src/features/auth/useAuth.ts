import type { User } from "@/types/User";
import { useMeQuery } from "./authApi";

export function useAuth() {
  const token =
    typeof window !== "undefined" ? localStorage.getItem("authToken") : null;
  let user: User | null = null;
  if (typeof window !== "undefined") {
    const rawUser = localStorage.getItem("authUser");
    if (rawUser) {
      try {
        user = JSON.parse(rawUser) as User;
      } catch {
        user = null;
      }
    }
  }
  const { data, isLoading, isFetching, isError, error } = useMeQuery(
    undefined,
    { skip: true }
  );

  return {
    user: user ?? (data as User | null) ?? null,

    // auth state
    isAuthenticated: Boolean(token) || !!data,

    // status flags
    isLoading,
    isFetching,
    isError,
    error,
  };
}
