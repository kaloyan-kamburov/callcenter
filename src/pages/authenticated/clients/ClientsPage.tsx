import { useGetClientsQuery } from "@/features/client/clientsApi";
import DataGrid from "@/components/common/DataGrid/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { Client } from "@/types/Client";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import ClientModal from "./ClientModal";
import DeleteClientModal from "./DeleteClientModal";
import { useTranslation } from "react-i18next";

export default function ClientsPage() {
  const { t } = useTranslation();
  const { open: openCreateClientModal, Modal: ClientCreateModal } = useModal(
    ClientModal,
    "sm",
  );
  const {
    open: openEditClientModal,
    isOpen: isEditClientModalOpen,
    Modal: ClientEditModal,
  } = useModal(ClientModal, "sm");
  const { open: openDeleteClientModal, Modal: ClientDeleteModal } = useModal(
    DeleteClientModal,
    "xs",
  );
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);

  const columns: GridColDef<Client>[] = [
    { field: "id", headerName: t("clients.columns.id"), flex: 0.6 },
    { field: "name", headerName: t("clients.columns.name"), flex: 1.1 },
    { field: "username", headerName: t("clients.columns.username"), flex: 1.1 },
    {
      field: "isActive",
      headerName: t("clients.columns.isActive"),
      type: "boolean",
      flex: 0.8,
    },
    { field: "createdAt", headerName: t("clients.columns.createdAt"), flex: 1.3 },
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
      renderCell: (params: GridRenderCellParams<Client>) => (
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
              setSelectedClient(params.row);
              openEditClientModal();
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setSelectedClient(params.row);
              openDeleteClientModal();
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
      title={t("clients.title")}
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
            <Typography variant="h6">{t("clients.title")}</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openCreateClientModal}
            >
              {t("clients.addButton")}
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
          useQuery={useGetClientsQuery}
          getRowId={(row) => row.id}
          fullHeight
        />
      </Box>
      <ClientCreateModal mode="create" />
      <ClientEditModal
        mode="edit"
        clientId={selectedClient?.id}
        client={selectedClient ?? undefined}
        isOpen={isEditClientModalOpen}
      />
      <ClientDeleteModal clientId={selectedClient?.id} />
    </PageContainer>
  );
}
