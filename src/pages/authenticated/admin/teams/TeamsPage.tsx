import { useGetTeamsQuery } from "@/features/team/teamsApi";
import DataGrid from "@/components/common/DataGrid/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { Team } from "@/types/Team";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import TeamModal from "./TeamModal";
import DeleteTeamModal from "./DeleteTeamModal";
import { useTranslation } from "react-i18next";

export default function TeamsPage() {
  const { t } = useTranslation();
  const { open: openCreateModal, Modal: CreateModal } = useModal(TeamModal, "sm");
  const {
    open: openEditModal,
    isOpen: isEditModalOpen,
    Modal: EditModal,
  } = useModal(TeamModal, "sm");
  const { open: openDeleteModal, Modal: DeleteModal } = useModal(DeleteTeamModal, "xs");
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);

  const columns: GridColDef<Team>[] = [
    { field: "id", headerName: t("teams.columns.id"), flex: 0.5 },
    { field: "name", headerName: t("teams.columns.name"), flex: 1.2 },
    { field: "supervisorName", headerName: t("teams.columns.supervisorName"), flex: 1.2 },
    { field: "isActive", headerName: t("teams.columns.isActive"), type: "boolean", flex: 0.8 },
    { field: "isDeleted", headerName: t("teams.columns.isDeleted"), type: "boolean", flex: 0.8 },
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
      renderCell: (params: GridRenderCellParams<Team>) => (
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
              setSelectedTeam(params.row);
              openEditModal();
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setSelectedTeam(params.row);
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
      title={t("teams.title")}
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
            <Typography variant="h6">{t("teams.title")}</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openCreateModal}
            >
              {t("teams.addButton")}
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
          useQuery={useGetTeamsQuery}
          getRowId={(row) => row.id ?? 0}
          fullHeight
        />
      </Box>
      <CreateModal mode="create" />
      <EditModal
        mode="edit"
        teamId={selectedTeam?.id ?? undefined}
        team={selectedTeam ?? undefined}
        isOpen={isEditModalOpen}
      />
      <DeleteModal teamId={selectedTeam?.id ?? undefined} />
    </PageContainer>
  );
}
