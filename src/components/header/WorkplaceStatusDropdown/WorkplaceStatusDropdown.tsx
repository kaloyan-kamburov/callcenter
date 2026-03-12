import { useState, useEffect } from "react";
import { TextField, MenuItem, Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetAgentWorkplacesQuery } from "@/features/workplace/workplacesApi";
import { useGetWorkStatusesQuery } from "@/features/workStatus/workStatusesApi";
import {
  getAgentSettings,
  storeAgentSettings,
} from "@/features/agent/agentSettings";
import { useSetWorkLogMutation } from "@/features/agent/agentApi";
import { useAgentWorkLog } from "@/features/agent/AgentWorkLogContext";
import { useWorkStatus } from "@/features/agent/WorkStatusContext";
import { WorkStatus } from "@/types/Agent";
import Loader from "@/components/common/Loader/Loader";

export default function WorkplaceStatusDropdown() {
  const { t } = useTranslation();
  const workStatus = useWorkStatus();
  const [selectedWorkplaceId, setSelectedWorkplaceId] = useState<number | "">(
    () => getAgentSettings().workplaceId ?? "",
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(
    () => getAgentSettings().status ?? "",
  );

  const [setWorkLog, { isLoading: isSettingWorkLog }] = useSetWorkLogMutation();
  const { data: workplacesData, isLoading: isLoadingWorkplaces } =
    useGetAgentWorkplacesQuery({ page: 0, pageSize: 999999999 });
  const { data: statuses, isLoading: isLoadingStatuses } =
    useGetWorkStatusesQuery(undefined, {
      skip: selectedWorkplaceId === "",
    });
  const agentWorkLog = useAgentWorkLog();

  useEffect(() => {
    agentWorkLog?.setIsSettingWorkLog(isSettingWorkLog);
  }, [isSettingWorkLog, agentWorkLog]);

  useEffect(() => {
    const statusValue = selectedStatus || undefined;
    storeAgentSettings({
      ...getAgentSettings(),
      workplaceId: selectedWorkplaceId === "" ? undefined : selectedWorkplaceId,
      status: statusValue,
    });
    if (!isSettingWorkLog) {
      workStatus?.setStatus(statusValue);
    }
  }, [selectedWorkplaceId, selectedStatus, workStatus?.setStatus, isSettingWorkLog]);

  const workplaces = workplacesData?.data ?? [];
  const showWorkplaceDropdown = selectedWorkplaceId === "";
  const showStatusDropdown = selectedWorkplaceId !== "";

  return (isLoadingWorkplaces || isLoadingStatuses) && !isSettingWorkLog ? (
    <Loader size={25} />
  ) : (
    <>
      {showWorkplaceDropdown && (
        <TextField
          select
          size="small"
          value={selectedWorkplaceId}
          onChange={(e) =>
            setSelectedWorkplaceId(
              e.target.value === "" ? "" : Number(e.target.value),
            )
          }
          disabled={isLoadingWorkplaces}
          label={t("header.workplaceStatus.workplace")}
          sx={{ minWidth: 200 }}
        >
          {workplaces.map((wp) => (
            <MenuItem key={wp.id ?? 0} value={wp.id ?? 0}>
              {wp.name ?? ""}
            </MenuItem>
          ))}
        </TextField>
      )}
      {showStatusDropdown && (
        <>
          <Box sx={{ position: "relative" }}>
            {isSettingWorkLog && (
              <Loader
                size={20}
                sx={{
                  position: "absolute",
                  top: "10px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                }}
              />
            )}
            <TextField
              select
              size="small"
              value={selectedStatus}
              onChange={(e) => {
                const newStatus = e.target.value;
                if (Boolean(selectedWorkplaceId)) {
                  setWorkLog({
                    status: (newStatus as WorkStatus) ?? WorkStatus.Ready,
                    workplaceid: selectedWorkplaceId as number,
                  });
                }
                setSelectedStatus(newStatus);
              }}
              disabled={isLoadingStatuses || isSettingWorkLog}
              label={t("header.workplaceStatus.status")}
              sx={{ minWidth: 200 }}
              slotProps={{}}
            >
              {(statuses ?? []).map((status) => (
                <MenuItem key={status} value={status}>
                  {t(`header.workplaceStatus.statuses.${status}`, status)}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </>
      )}
    </>
  );
}
