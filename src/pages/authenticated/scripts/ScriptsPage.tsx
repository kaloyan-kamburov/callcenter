import { useGetScriptsQuery } from "@/features/script/scriptsApi";
import DataGrid from "@/components/common/DataGrid/DataGrid";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Button, IconButton, Typography } from "@mui/material";
import type { GridColDef, GridRenderCellParams } from "@mui/x-data-grid/models";
import type { Script } from "@/types/Script";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModal } from "@/hooks/useModal";
import { useState } from "react";
import ScriptModal from "./ScriptModal";
import DeleteScriptModal from "./DeleteScriptModal";
import { useTranslation } from "react-i18next";

export default function ScriptsPage() {
  const { t } = useTranslation();
  const { open: openScriptModal, Modal: ScriptCreateModal } = useModal(
    ScriptModal,
    "md",
  );
  const {
    open: openEditScriptModal,
    isOpen: isEditScriptModalOpen,
    Modal: ScriptEditModal,
  } = useModal(ScriptModal, "md");
  const { open: openDeleteScriptModal, Modal: ScriptDeleteModal } = useModal(
    DeleteScriptModal,
    "xs",
  );

  const [selectedScript, setSelectedScript] = useState<Script | null>(null);

  const columns: GridColDef<Script>[] = [
    { field: "id", headerName: t("scripts.columns.id"), flex: 0.5 },
    { field: "title", headerName: t("scripts.columns.title"), flex: 1.2 },
    {
      field: "type",
      headerName: t("scripts.columns.type"),
      flex: 1,
      renderCell: (params: GridRenderCellParams<Script>) =>
        t(`scripts.types.${params.row.type}`),
    },
    { field: "content", headerName: t("scripts.columns.content"), flex: 2 },
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
      renderCell: (params: GridRenderCellParams<Script>) => (
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
              setSelectedScript(params.row);
              openEditScriptModal();
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => {
              setSelectedScript(params.row);
              openDeleteScriptModal();
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
      title={t("scripts.title")}
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
            <Typography variant="h6">{t("scripts.title")}</Typography>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={openScriptModal}
            >
              {t("scripts.addButton")}
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
          useQuery={useGetScriptsQuery}
          getRowId={(row) => row.id}
          fullHeight
        />
      </Box>
      <ScriptCreateModal mode="create" />
      <ScriptEditModal
        mode="edit"
        scriptId={selectedScript?.id}
        script={selectedScript ?? undefined}
        isOpen={isEditScriptModalOpen}
      />
      <ScriptDeleteModal scriptId={selectedScript?.id} />
    </PageContainer>
  );
}
