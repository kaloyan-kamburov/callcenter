import { useState, useEffect } from "react";
import { TextField, MenuItem } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useGetAgentWorkplacesQuery } from "@/features/workplace/workplacesApi";
import { useGetWorkStatusesQuery } from "@/features/workStatus/workStatusesApi";
import {
  getAgentSettings,
  storeAgentSettings,
} from "@/features/agent/agentSettings";
import { useSetWorkLogMutation } from "@/features/agent/agentApi";
import { WorkStatus } from "@/types/Agent";
import Loader from "@/components/common/Loader/Loader";

export default function WorkplaceStatusDropdown() {
  const { t } = useTranslation();
  const [selectedWorkplaceId, setSelectedWorkplaceId] = useState<number | "">(
    () => getAgentSettings().workplaceId ?? "",
  );
  const [selectedStatus, setSelectedStatus] = useState<string>(
    () => getAgentSettings().status ?? "",
  );

  useEffect(() => {
    storeAgentSettings({
      workplaceId: selectedWorkplaceId === "" ? undefined : selectedWorkplaceId,
      status: selectedStatus || undefined,
    });
  }, [selectedWorkplaceId, selectedStatus]);

  const { data: workplacesData, isLoading: isLoadingWorkplaces } =
    useGetAgentWorkplacesQuery({ page: 0, pageSize: 999999999 });
  const { data: statuses, isLoading: isLoadingStatuses } =
    useGetWorkStatusesQuery(undefined, {
      skip: selectedWorkplaceId === "",
    });
  const [setWorkLog, { isLoading: isSettingWorkLog }] = useSetWorkLogMutation();

  const workplaces = workplacesData?.data ?? [];
  const showWorkplaceDropdown = selectedWorkplaceId === "";
  const showStatusDropdown = selectedWorkplaceId !== "";

  return isLoadingWorkplaces || isLoadingStatuses ? (
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
        <TextField
          select
          size="small"
          value={selectedStatus}
          onChange={async (e) => {
            const newStatus = e.target.value;
            setSelectedStatus(newStatus);
            if (Boolean(selectedWorkplaceId)) {
              await setWorkLog({
                status: WorkStatus.Ready,
                workplaceid: selectedWorkplaceId as number,
              });
            }
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
      )}
    </>
  );
}
