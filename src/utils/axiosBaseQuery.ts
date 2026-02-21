import axios, { type AxiosError, type AxiosRequestConfig } from "axios";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { toast } from "react-hot-toast";

type AxiosBaseQueryArgs = {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: unknown;
  params?: unknown;
  headers?: AxiosRequestConfig["headers"];
  onError?: (error: AxiosError) => void; // optional per-request override
};

type AxiosBaseQueryOptions = {
  baseUrl: string;
  onError?: (error: AxiosError) => void; // optional global override
};

type ValidationErrorItem = {
  field?: string;
  errors?: string[];
};

function formatApiErrorMessage(responseData: unknown, fallback: string) {
  if (typeof responseData === "string") {
    return responseData;
  }

  if (!responseData || typeof responseData !== "object") {
    return fallback;
  }

  const payload = responseData as Record<string, unknown>;
  const lines: string[] = [];

  if (Array.isArray(payload.errors)) {
    (payload.errors as ValidationErrorItem[]).forEach((item) => {
      if (!item || !Array.isArray(item.errors)) return;
      item.errors.forEach((errorMessage) => {
        if (typeof errorMessage === "string" && errorMessage.trim()) {
          lines.push(errorMessage);
        }
      });
    });
  }

  // Also support object-shaped validation errors: { errors: { field: ["msg1", "msg2"] } }
  if (!lines.length && payload.errors && typeof payload.errors === "object") {
    Object.values(payload.errors as Record<string, unknown>).forEach((value) => {
      if (Array.isArray(value)) {
        value.forEach((errorMessage) => {
          if (typeof errorMessage === "string" && errorMessage.trim()) {
            lines.push(errorMessage);
          }
        });
      }
    });
  }

  if (lines.length) {
    return lines.join("\n");
  }

  if (typeof payload.message === "string" && payload.message.trim()) {
    return payload.message;
  }

  return fallback;
}

export function axiosBaseQuery(
  options: AxiosBaseQueryOptions
): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> {
  const { baseUrl, onError: globalOnError } = options;

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
  });

  axiosInstance.interceptors.request.use((config) => {
    const token =
      typeof window !== "undefined" ? localStorage.getItem("authToken") : null;

    if (token) {
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  return async ({ url, method = "GET", data, params, headers, onError }) => {
    try {
      const result = await axiosInstance.request({
        url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (error) {
      const err = error as AxiosError;
      const status = err.response?.status;

      if (status === 401 && typeof window !== "undefined") {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
        if (window.location.pathname !== "/login") {
          window.location.replace("/login");
        }
      }

      // Prefer per-request error handler, then global, else default toast
      if (onError) {
        onError(err);
      } else if (globalOnError) {
        globalOnError(err);
      } else {
        const respData = err.response?.data as unknown;
        const message = formatApiErrorMessage(respData, err.message);
        toast.error(message, { style: { whiteSpace: "pre-line" } });
      }
      return {
        error: {
          status: status ?? 500,
          data: err.response?.data ?? err.message,
        },
      };
    }
  };
}
