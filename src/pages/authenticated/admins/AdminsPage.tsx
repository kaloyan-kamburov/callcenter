import { useGetAdminsQuery } from "@/features/admin/adminsApi";
import DataGrid from "@/components/common/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { Admin } from "@/types/Admin";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import AdminModalContent from "./AdminModal";
import DeleteAdminModalComponent from "./DeleteAdminModal";

export default function AdminsPage() {
  const { open: openAdminModal, Modal: AdminModal } = useModal(AdminModalContent);
  const {
    open: openEditAdminModal,
    isOpen: isEditAdminModalOpen,
    Modal: EditAdminModal,
  } = useModal(AdminModalContent);
  const { open: openDeleteAdminModal, Modal: DeleteAdminModal } = useModal(
    DeleteAdminModalComponent,
  );
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const columns: GridColDef<Admin>[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1 },
    { field: "username", headerName: "Username", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "signature", headerName: "Signature", flex: 1 },
    { field: "timeZone", headerName: "Time Zone", flex: 1 },
    { field: "locationId", headerName: "Location ID", flex: 0.8 },
    { field: "locationName", headerName: "Location Name", flex: 1 },
    {
      field: "interfaceLanguage",
      headerName: "Language",
      flex: 0.8,
    },
    { field: "phoneType", headerName: "Phone Type", flex: 0.8 },
    {
      field: "isActive",
      headerName: "Active",
      type: "boolean",
      flex: 0.7,
    },
    {
      field: "actions",
      headerName: "Actions",
      align: "center",
      sortable: false,
      filterable: false,
      flex: 0.8,
      minWidth: 100,
      renderCell: (params: GridRenderCellParams<Admin>) => (
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
              setSelectedAdmin(params.row);
              openEditAdminModal();
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setSelectedAdmin(params.row);
              openDeleteAdminModal();
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
      title="Admins"
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
          // flex: 1,
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
            <Typography variant="h6">Admins</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openAdminModal}
            >
              Add Admin
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
          useQuery={useGetAdminsQuery}
          getRowId={(row) => row.id}
          fullHeight
        />
      </Box>
      <AdminModal mode="create" />
      <EditAdminModal
        mode="edit"
        adminId={selectedAdmin?.id}
        admin={selectedAdmin ?? undefined}
        isOpen={isEditAdminModalOpen}
      />
      <DeleteAdminModal adminId={selectedAdmin?.id} />
    </PageContainer>
  );
}
