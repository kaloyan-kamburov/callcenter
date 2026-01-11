import { useMeQuery } from "./authApi";

export function useAuth() {
  const { data, isLoading, isFetching, isError, error } = useMeQuery();

  return {
    user: data ?? null,

    // auth state
    isAuthenticated: !!data,

    // status flags
    isLoading,
    isFetching,
    isError,
    error,
  };
}
