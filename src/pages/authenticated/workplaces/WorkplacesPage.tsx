import { useGetWorkplacesQuery } from "@/features/workplace/workplacesApi";
import DataGrid from "@/components/common/DataGrid/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { Workplace } from "@/types/Workplace";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import WorkplaceModal from "./WorkplaceModal";
import DeleteWorkplaceModal from "./DeleteWorkplaceModal";
import { useTranslation } from "react-i18next";

export default function WorkplacesPage() {
  const { t } = useTranslation();
  const { open: openCreateModal, Modal: CreateModal } = useModal(WorkplaceModal, "sm");
  const {
    open: openEditModal,
    isOpen: isEditModalOpen,
    Modal: EditModal,
  } = useModal(WorkplaceModal, "sm");
  const { open: openDeleteModal, Modal: DeleteModal } = useModal(
    DeleteWorkplaceModal,
    "xs",
  );
  const [selectedWorkplace, setSelectedWorkplace] = useState<Workplace | null>(null);

  const columns: GridColDef<Workplace>[] = [
    { field: "id", headerName: t("workplaces.columns.id"), flex: 0.5 },
    { field: "name", headerName: t("workplaces.columns.name"), flex: 1.2 },
    { field: "locationId", headerName: t("workplaces.columns.locationId"), flex: 0.8 },
    { field: "sipId", headerName: t("workplaces.columns.sipId"), flex: 0.8 },
    {
      field: "isPredictive",
      headerName: t("workplaces.columns.isPredictive"),
      type: "boolean",
      flex: 0.9,
    },
    {
      field: "isDeleted",
      headerName: t("workplaces.columns.isDeleted"),
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
      renderCell: (params: GridRenderCellParams<Workplace>) => (
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
              setSelectedWorkplace(params.row);
              openEditModal();
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setSelectedWorkplace(params.row);
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
      title={t("workplaces.title")}
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
            <Typography variant="h6">{t("workplaces.title")}</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openCreateModal}
            >
              {t("workplaces.addButton")}
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
          useQuery={useGetWorkplacesQuery}
          getRowId={(row) => row.id ?? 0}
          fullHeight
        />
      </Box>
      <CreateModal mode="create" />
      <EditModal
        mode="edit"
        workplaceId={selectedWorkplace?.id ?? undefined}
        workplace={selectedWorkplace ?? undefined}
        isOpen={isEditModalOpen}
      />
      <DeleteModal workplaceId={selectedWorkplace?.id ?? undefined} />
    </PageContainer>
  );
}
