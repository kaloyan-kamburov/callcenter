import { useGetLocationsQuery } from "@/features/location/locationsApi";
import DataGrid from "@/components/common/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { Location } from "@/types/Location";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import LocationModal from "./LocationModal";
import DeleteLocationModal from "./DeleteLocationModal";

export default function LocationsPage() {
  const { open: openLocationModal, Modal: LocationCreateModal } =
    useModal(LocationModal);
  const {
    open: openEditLocationModal,
    isOpen: isEditLocationModalOpen,
    Modal: LocationEditModal,
  } = useModal(LocationModal);
  const { open: openDeleteLocationModal, Modal: LocationDeleteModal } =
    useModal(DeleteLocationModal);

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null,
  );

  const columns: GridColDef<Location>[] = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "name", headerName: "Name", flex: 1.5 },
    {
      field: "actions",
      headerName: "Actions",
      headerAlign: "center",
      disableColumnMenu: true,
      align: "center",
      sortable: false,
      filterable: false,
      flex: 0.8,
      minWidth: 100,
      maxWidth: 100,
      renderCell: (params: GridRenderCellParams<Location>) => (
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
              setSelectedLocation(params.row);
              openEditLocationModal();
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setSelectedLocation(params.row);
              openDeleteLocationModal();
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
      title="Locations"
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
            <Typography variant="h6">Locations</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openLocationModal}
            >
              Add Location
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
          useQuery={useGetLocationsQuery}
          getRowId={(row) => row.id}
          fullHeight
        />
      </Box>
      <LocationCreateModal mode="create" />
      <LocationEditModal
        mode="edit"
        locationId={selectedLocation?.id}
        location={selectedLocation ?? undefined}
        isOpen={isEditLocationModalOpen}
      />
      <LocationDeleteModal locationId={selectedLocation?.id} />
    </PageContainer>
  );
}
