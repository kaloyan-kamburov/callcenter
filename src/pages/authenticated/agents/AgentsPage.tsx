import { useGetAgentsQuery } from "@/features/agent/agentsApi";
import DataGrid from "@/components/common/DataGrid/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { Agent } from "@/types/Agent";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import AgentModal from "./AgentModal";
import DeleteAgentModal from "./DeleteAgentModal";
import { useTranslation } from "react-i18next";

export default function AgentsPage() {
  const { t } = useTranslation();
  const getPhoneTypeLabel = (value: number) => {
    switch (value) {
      case 0:
        return t("phoneTypes.0");
      case 1:
        return t("phoneTypes.1");
      case 2:
        return t("phoneTypes.2");
      default:
        return String(value);
    }
  };
  const { open: openCreateModal, Modal: CreateModal } = useModal(
    AgentModal,
    "md",
  );
  const {
    open: openEditModal,
    isOpen: isEditModalOpen,
    Modal: EditModal,
  } = useModal(AgentModal, "md");
  const { open: openDeleteModal, Modal: DeleteModal } = useModal(
    DeleteAgentModal,
    "xs",
  );
  const [selectedAgent, setSelectedAgent] = useState<Agent | null>(null);

  const columns: GridColDef<Agent>[] = [
    { field: "id", headerName: t("agents.columns.id"), flex: 0.5 },
    {
      field: "operatorName",
      headerName: t("agents.columns.operatorName"),
      flex: 1.1,
    },
    { field: "username", headerName: t("agents.columns.username"), flex: 1.1 },
    { field: "email", headerName: t("agents.columns.email"), flex: 1.2 },
    {
      field: "locationName",
      headerName: t("agents.columns.location"),
      flex: 1,
    },
    { field: "teamId", headerName: t("agents.columns.team"), flex: 0.7 },
    {
      field: "workplaceId",
      headerName: t("agents.columns.workplace"),
      flex: 0.8,
    },
    {
      field: "phoneType",
      headerName: t("agents.columns.phoneType"),
      flex: 0.8,
      valueGetter: (value) => getPhoneTypeLabel(Number(value)),
    },
    {
      field: "isActive",
      headerName: t("agents.columns.isActive"),
      type: "boolean",
      flex: 0.8,
    },
    {
      field: "actions",
      headerName: t("common.actions"),
      headerAlign: "center",
      disableColumnMenu: true,
      align: "center",
      sortable: false,
      filterable: false,
      flex: 0.8,
      minWidth: 100,
      maxWidth: 100,
      renderCell: (params: GridRenderCellParams<Agent>) => (
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.5,
          }}
        >
          <IconButton
            size="small"
            onClick={() => {
              setSelectedAgent(params.row);
              openEditModal();
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setSelectedAgent(params.row);
              openDeleteModal();
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <PageContainer
      title={t("agents.title")}
      breadcrumbs={[]}
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: 0,
        height: "100%",
        width: "100%",
        "& > .MuiStack-root": { my: 0, minHeight: 0, width: "100%" },
        "& > .MuiStack-root > .MuiBox-root": { minHeight: 0, width: "100%" },
      }}
      slots={{
        header: () => (
          <Box
            sx={{
              minHeight: 0,
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">{t("agents.title")}</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openCreateModal}
            >
              {t("agents.addButton")}
            </Button>
          </Box>
        ),
      }}
    >
      <Box
        sx={{
          flex: 1,
          minHeight: 0,
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <DataGrid
          columns={columns}
          useQuery={useGetAgentsQuery}
          getRowId={(row) => row.id ?? 0}
          fullHeight
        />
      </Box>
      <CreateModal mode="create" />
      <EditModal
        mode="edit"
        agentId={selectedAgent?.id ?? undefined}
        agent={selectedAgent ?? undefined}
        isOpen={isEditModalOpen}
      />
      <DeleteModal agentId={selectedAgent?.id ?? undefined} />
    </PageContainer>
  );
}
