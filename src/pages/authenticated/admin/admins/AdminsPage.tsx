import { useGetAdminsQuery } from "@/features/admin/adminsApi";
import DataGrid from "@/components/common/DataGrid/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { Admin } from "@/types/Admin";
import type { AgentPhoneType } from "@/types/Agent";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import AdminModalContent from "./AdminModal";
import DeleteAdminModalComponent from "./DeleteAdminModal";
import { useTranslation } from "react-i18next";

export default function AdminsPage() {
  const { t } = useTranslation();
  const getPhoneTypeLabel = (value: AgentPhoneType) => t(`phoneTypes.${value}`);
  const { open: openAdminModal, Modal: AdminModal } =
    useModal(AdminModalContent);
  const {
    open: openEditAdminModal,
    isOpen: isEditAdminModalOpen,
    Modal: EditAdminModal,
  } = useModal(AdminModalContent);
  const { open: openDeleteAdminModal, Modal: DeleteAdminModal } = useModal(
    DeleteAdminModalComponent,
    "xs",
  );
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const columns: GridColDef<Admin>[] = [
    { field: "id", headerName: t("admins.columns.id"), flex: 0.5 },
    { field: "name", headerName: t("admins.columns.name"), flex: 1 },
    { field: "username", headerName: t("admins.columns.username"), flex: 1 },
    { field: "email", headerName: t("admins.columns.email"), flex: 1 },
    { field: "signature", headerName: t("admins.columns.signature"), flex: 1 },
    { field: "timeZone", headerName: t("admins.columns.timeZone"), flex: 1 },
    { field: "locationId", headerName: t("admins.columns.locationId"), flex: 0.8 },
    { field: "locationName", headerName: t("admins.columns.locationName"), flex: 1 },
    {
      field: "interfaceLanguage",
      headerName: t("admins.columns.language"),
      flex: 0.8,
    },
    {
      field: "phoneType",
      headerName: t("admins.columns.phoneType"),
      flex: 0.8,
      valueGetter: (value) => getPhoneTypeLabel(value as AgentPhoneType),
    },
    {
      field: "isActive",
      headerName: t("admins.columns.active"),
      type: "boolean",
      flex: 0.7,
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
              {t("admins.addButton")}
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
