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

export function axiosBaseQuery(
  options: AxiosBaseQueryOptions
): BaseQueryFn<AxiosBaseQueryArgs, unknown, unknown> {
  const { baseUrl, onError: globalOnError } = options;

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
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
      // Prefer per-request error handler, then global, else default toast
      if (onError) {
        onError(err);
      } else if (globalOnError) {
        globalOnError(err);
      } else {
        const respData = err.response?.data as unknown;
        let message = err.message;
        if (typeof respData === "string") {
          message = respData;
        } else if (
          respData &&
          typeof respData === "object" &&
          "message" in (respData as Record<string, unknown>)
        ) {
          const m = (respData as Record<string, unknown>).message;
          if (typeof m === "string") message = m;
        }
        toast.error(message);
      }
      return {
        error: {
          status: err.response?.status ?? 500,
          data: err.response?.data ?? err.message,
        },
      };
    }
  };
}
