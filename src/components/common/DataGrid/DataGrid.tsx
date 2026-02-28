import { useEffect, useMemo, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Dialog,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid/DataGrid";
import type {
  GridColDef,
  GridPaginationModel,
  GridSortModel,
  GridValidRowModel,
} from "@mui/x-data-grid/models";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import type {
  ServerGridFilter,
  ServerGridParams,
  ServerGridResult,
} from "@/types/serverGrid";
import ServerFiltersModal from "./ServerFiltersModal";
import { useTranslation } from "react-i18next";

type QueryHookResult<TRow> = {
  data?: ServerGridResult<TRow>;
  error?: unknown;
  isLoading: boolean;
  isFetching?: boolean;
};

type DataGridProps<TRow extends GridValidRowModel> = {
  title?: string;
  columns: GridColDef<TRow>[];
  useQuery: (params?: ServerGridParams) => QueryHookResult<TRow>;
  getRowId: (row: TRow) => string | number;
  fullHeight?: boolean;
  height?: number | string;
  serverMode?: boolean;
};

export default function DataGrid<TRow extends GridValidRowModel>({
  title,
  columns,
  useQuery,
  getRowId,
  fullHeight = false,
  height = 560,
  serverMode = true,
}: DataGridProps<TRow>) {
  const { t } = useTranslation();
  const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
    page: 0,
    pageSize: 20,
  });
  const [sortModel, setSortModel] = useState<GridSortModel>([]);
  const [filters, setFilters] = useState<ServerGridFilter[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState<string | undefined>(
    undefined,
  );
  const [isFiltersModalOpen, setIsFiltersModalOpen] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      const trimmed = searchInput.trim();
      setDebouncedSearch(trimmed.length >= 2 ? trimmed : undefined);
    }, 500);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [searchInput]);

  useEffect(() => {
    setPaginationModel((current) => ({ ...current, page: 0 }));
  }, [debouncedSearch]);

  const queryParams = useMemo<ServerGridParams | undefined>(() => {
    if (!serverMode) {
      return undefined;
    }

    const activeSort = sortModel[0];
    return {
      page: paginationModel.page,
      pageSize: paginationModel.pageSize,
      sortField: activeSort?.field,
      sortOrder: activeSort?.sort ?? undefined,
      search: debouncedSearch,
      filters,
    };
  }, [
    debouncedSearch,
    filters,
    paginationModel.page,
    paginationModel.pageSize,
    serverMode,
    sortModel,
  ]);

  const { data, error, isLoading, isFetching } = useQuery(queryParams);
  const rows = data?.data ?? [];
  const rowCount = data?.totalCount ?? rows.length;
  const filterableColumns = data?.filterableColumns ?? [];
  const showFilterButton = serverMode && filterableColumns.length > 0;
  const showToolbar = serverMode;

  return (
    <Box
      sx={
        fullHeight
          ? {
              flex: 1,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              minHeight: 0,
            }
          : { width: "100%" }
      }
    >
      {title ? (
        <Typography variant="h6" sx={{ mb: 2 }}>
          {title}
        </Typography>
      ) : null}
      {showToolbar ? (
        <Box
          sx={{
            mb: 1,
            display: "flex",
            justifyContent: "space-between",
            gap: 1.5,
          }}
        >
          <TextField
            size="small"
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder={t("dataGrid.search.placeholder")}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              },
            }}
            sx={{ minWidth: 220, maxWidth: 360, width: "100%" }}
          />
          {showFilterButton ? (
            <Box
              sx={{
                position: "relative",
                display: "inline-flex",
                flexShrink: 0,
              }}
            >
              <Button
                variant="outlined"
                startIcon={<FilterListIcon />}
                onClick={() => setIsFiltersModalOpen(true)}
              >
                {t("dataGrid.filters.button")}
              </Button>
              {filters.length > 0 ? (
                <Box
                  sx={{
                    position: "absolute",
                    right: "-7px",
                    top: "-7px",
                    minWidth: 18,
                    height: 18,
                    px: 0.5,
                    borderRadius: "999px",
                    display: "grid",
                    placeItems: "center",
                    bgcolor: "primary.main",
                    color: "common.white",
                    fontSize: 11,
                    fontWeight: 700,
                    lineHeight: 1,
                  }}
                >
                  {filters.length}
                </Box>
              ) : null}
            </Box>
          ) : (
            <Box />
          )}
        </Box>
      ) : null}
      {error ? (
        <Alert severity="error">{JSON.stringify(error)}</Alert>
      ) : (
        <Box
          sx={
            fullHeight
              ? {
                  flex: 1,
                  minHeight: 0,
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                }
              : { height, width: "100%" }
          }
        >
          <MuiDataGrid
            rows={rows}
            columns={columns}
            loading={isLoading || Boolean(isFetching)}
            disableRowSelectionOnClick
            getRowId={getRowId}
            autoHeight={false}
            pagination
            paginationMode={serverMode ? "server" : "client"}
            sortingMode={serverMode ? "server" : "client"}
            filterMode={serverMode ? "server" : "client"}
            rowCount={serverMode ? rowCount : undefined}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[20, 50, 100]}
            slotProps={{
              basePagination: {
                material: {
                  labelRowsPerPage: t("dataGrid.pagination.rowsPerPage"),
                  labelDisplayedRows: ({ from, to, count }) =>
                    `${from}-${to} ${t("dataGrid.pagination.of")} ${
                      count !== -1
                        ? count
                        : `${t("dataGrid.pagination.moreThan")} ${to}`
                    }`,
                },
              },
            }}
            sortModel={sortModel}
            onSortModelChange={(model) => {
              setSortModel(model.slice(0, 1));
              setPaginationModel((current) => ({ ...current, page: 0 }));
            }}
            sx={
              fullHeight
                ? { flex: 1, minHeight: 0, height: "100%", width: "100%" }
                : { height: "100%", width: "100%" }
            }
          />
        </Box>
      )}
      <Dialog
        open={isFiltersModalOpen}
        onClose={() => setIsFiltersModalOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <ServerFiltersModal
          close={() => setIsFiltersModalOpen(false)}
          filterableColumns={filterableColumns}
          filters={filters}
          onApply={(nextFilters: ServerGridFilter[]) => {
            setFilters(nextFilters);
            setPaginationModel((current) => ({ ...current, page: 0 }));
          }}
        />
      </Dialog>
    </Box>
  );
}
