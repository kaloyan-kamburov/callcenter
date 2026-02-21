import { useGetCampaignsQuery } from "@/features/campaign/campaignsApi";
import DataGrid from "@/components/common/DataGrid/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { Campaign } from "@/types/Campaign";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import CampaignModal from "./CampaignModal";
import DeleteCampaignModal from "./DeleteCampaignModal";
import { useTranslation } from "react-i18next";

export default function CampaignsPage() {
  const { t } = useTranslation();
  const { open: openCreateModal, Modal: CreateModal } = useModal(CampaignModal, "md");
  const {
    open: openEditModal,
    isOpen: isEditModalOpen,
    Modal: EditModal,
  } = useModal(CampaignModal, "md");
  const { open: openDeleteModal, Modal: DeleteModal } = useModal(
    DeleteCampaignModal,
    "xs",
  );
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);

  const columns: GridColDef<Campaign>[] = [
    { field: "id", headerName: t("campaigns.columns.id"), flex: 0.5 },
    { field: "name", headerName: t("campaigns.columns.name"), flex: 1.2 },
    { field: "type", headerName: t("campaigns.columns.type"), flex: 0.8 },
    {
      field: "isActive",
      headerName: t("campaigns.columns.isActive"),
      type: "boolean",
      flex: 0.8,
    },
    {
      field: "enableIntegration",
      headerName: t("campaigns.columns.enableIntegration"),
      type: "boolean",
      flex: 1,
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
      renderCell: (params: GridRenderCellParams<Campaign>) => (
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
              setSelectedCampaign(params.row);
              openEditModal();
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setSelectedCampaign(params.row);
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
      title={t("campaigns.title")}
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
            <Typography variant="h6">{t("campaigns.title")}</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openCreateModal}
            >
              {t("campaigns.addButton")}
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
          useQuery={useGetCampaignsQuery}
          getRowId={(row) => row.id ?? 0}
          fullHeight
        />
      </Box>
      <CreateModal mode="create" />
      <EditModal
        mode="edit"
        campaignId={selectedCampaign?.id ?? undefined}
        campaign={selectedCampaign ?? undefined}
        isOpen={isEditModalOpen}
      />
      <DeleteModal campaignId={selectedCampaign?.id ?? undefined} />
    </PageContainer>
  );
}
