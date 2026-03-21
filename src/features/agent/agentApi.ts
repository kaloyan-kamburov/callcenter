import { baseApi } from "@/api/baseApi";
import type { WorkStatus } from "@/types/Agent";
import {
  fallbackBrowserPhoneConfig,
  type BrowserPhoneConfig,
} from "@/types/BrowserPhoneConfig";
import type { CurrentAgentDto } from "@/types/CurrentAgent";

export type WorkLogPayload = {
  status: WorkStatus;
  workplaceid: number;
};

export type CreateCallRecordPayload = {
  campaignId?: number;
  scriptId?: number | null;
  scriptAnswers?: string | null;
  dialedNumber?: string | null;
};

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAgentMe: builder.query<CurrentAgentDto, void>({
      query: () => ({
        url: "agent/me",
        method: "GET",
      }),
    }),
    getBrowserPhoneConfig: builder.query<BrowserPhoneConfig, void>({
      query: () => ({
        url: "config-phone",
        method: "GET",
        onError: () => {},
      }),
      transformResponse: (response: Partial<BrowserPhoneConfig>) => ({
        ...fallbackBrowserPhoneConfig,
        ...response,
      }),
    }),
    setWorkLog: builder.mutation<unknown, WorkLogPayload>({
      query: (body) => ({
        url: "agent/work-log",
        method: "POST",
        data: body,
      }),
    }),
    createCallRecord: builder.mutation<void, CreateCallRecordPayload>({
      query: (body) => ({
        url: "agent/call-records",
        method: "POST",
        data: body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetAgentMeQuery,
  useGetBrowserPhoneConfigQuery,
  useSetWorkLogMutation,
  useCreateCallRecordMutation,
} = agentApi;
