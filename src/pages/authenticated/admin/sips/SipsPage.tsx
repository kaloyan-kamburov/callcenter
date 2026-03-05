import { useGetSipsQuery } from "@/features/sip/sipsApi";
import DataGrid from "@/components/common/DataGrid/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { Sip } from "@/types/Sip";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import SipModal from "./SipModal";
import DeleteSipModal from "./DeleteSipModal";
import { useTranslation } from "react-i18next";

export default function SipsPage() {
  const { t } = useTranslation();
  const { open: openSipModal, Modal: SipCreateModal } = useModal(SipModal, "xs");
  const {
    open: openEditSipModal,
    isOpen: isEditSipModalOpen,
    Modal: SipEditModal,
  } = useModal(SipModal, "xs");
  const { open: openDeleteSipModal, Modal: SipDeleteModal } = useModal(
    DeleteSipModal,
    "xs",
  );

  const [selectedSip, setSelectedSip] = useState<Sip | null>(null);

  const columns: GridColDef<Sip>[] = [
    { field: "id", headerName: t("sips.columns.id"), flex: 0.5 },
    { field: "name", headerName: t("sips.columns.name"), flex: 1.5 },
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
      renderCell: (params: GridRenderCellParams<Sip>) => (
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
              setSelectedSip(params.row);
              openEditSipModal();
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setSelectedSip(params.row);
              openDeleteSipModal();
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
      title={t("sips.title")}
      breadcrumbs={[]}
      maxWidth={false}
      disableGutters
      sx={{
        minHeight: 0,
        height: "100%",
        width: "100%",
        "& > .MuiStack-root": {
          my: 0,
          minHeight: 0,
          width: "100%",
        },
        "& > .MuiStack-root > .MuiBox-root": {
          minHeight: 0,
          width: "100%",
        },
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
            <Typography variant="h6">{t("sips.title")}</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openSipModal}
            >
              {t("sips.addButton")}
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
          useQuery={useGetSipsQuery}
          getRowId={(row) => row.id ?? 0}
          fullHeight
        />
      </Box>
      <SipCreateModal mode="create" />
      <SipEditModal
        mode="edit"
        sipId={selectedSip?.id ?? undefined}
        sip={selectedSip ?? undefined}
        isOpen={isEditSipModalOpen}
      />
      <SipDeleteModal sipId={selectedSip?.id ?? undefined} />
    </PageContainer>
  );
}
