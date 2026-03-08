import { baseApi } from "@/api/baseApi";
import type { WorkStatus } from "@/types/Agent";
import type { CurrentAgentDto } from "@/types/CurrentAgent";

export type WorkLogPayload = {
  status: WorkStatus;
  workplaceid: number;
};

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAgentMe: builder.query<CurrentAgentDto, void>({
      query: () => ({
        url: "agent/me",
        method: "GET",
      }),
    }),
    setWorkLog: builder.mutation<unknown, WorkLogPayload>({
      query: (body) => ({
        url: "agent/work-log",
        method: "POST",
        data: body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetAgentMeQuery, useSetWorkLogMutation } = agentApi;
