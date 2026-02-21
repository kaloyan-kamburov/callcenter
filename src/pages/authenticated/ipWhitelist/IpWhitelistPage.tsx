import { useGetIpWhitelistEntriesQuery } from "@/features/ipWhitelist/ipWhitelistApi";
import DataGrid from "@/components/common/DataGrid/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { IpWhitelistEntry } from "@/types/IpWhitelist";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import IpWhitelistModal from "./IpWhitelistModal";
import DeleteIpWhitelistModal from "./DeleteIpWhitelistModal";
import { useTranslation } from "react-i18next";

export default function IpWhitelistPage() {
  const { t } = useTranslation();
  const { open: openCreateModal, Modal: CreateModal } = useModal(IpWhitelistModal, "sm");
  const {
    open: openEditModal,
    isOpen: isEditModalOpen,
    Modal: EditModal,
  } = useModal(IpWhitelistModal, "sm");
  const { open: openDeleteModal, Modal: DeleteModal } = useModal(
    DeleteIpWhitelistModal,
    "xs",
  );
  const [selectedEntry, setSelectedEntry] = useState<IpWhitelistEntry | null>(null);

  const columns: GridColDef<IpWhitelistEntry>[] = [
    { field: "id", headerName: t("ipWhitelist.columns.id"), flex: 0.6 },
    { field: "name", headerName: t("ipWhitelist.columns.name"), flex: 1.2 },
    { field: "ipAddress", headerName: t("ipWhitelist.columns.ipAddress"), flex: 1.5 },
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
      renderCell: (params: GridRenderCellParams<IpWhitelistEntry>) => (
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
              setSelectedEntry(params.row);
              openEditModal();
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setSelectedEntry(params.row);
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
      title={t("ipWhitelist.title")}
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
            <Typography variant="h6">{t("ipWhitelist.title")}</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openCreateModal}
            >
              {t("ipWhitelist.addButton")}
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
          useQuery={useGetIpWhitelistEntriesQuery}
          getRowId={(row) => row.id ?? 0}
          fullHeight
        />
      </Box>
      <CreateModal mode="create" />
      <EditModal
        mode="edit"
        entryId={selectedEntry?.id ?? undefined}
        entry={selectedEntry ?? undefined}
        isOpen={isEditModalOpen}
      />
      <DeleteModal entryId={selectedEntry?.id ?? undefined} />
    </PageContainer>
  );
}
