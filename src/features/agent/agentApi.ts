import { baseApi } from "@/api/baseApi";
import type { WorkStatus } from "@/types/Agent";

export type WorkLogPayload = {
  status: WorkStatus;
  workplaceid: number;
};

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
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

export const { useSetWorkLogMutation } = agentApi;
