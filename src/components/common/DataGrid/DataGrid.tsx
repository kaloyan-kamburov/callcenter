import { Alert, Box, Typography } from "@mui/material";
import { DataGrid as MuiDataGrid } from "@mui/x-data-grid/DataGrid";
import type { GridColDef, GridValidRowModel } from "@mui/x-data-grid/models";

type QueryHookResult<TRow> = {
  data?: TRow[];
  error?: unknown;
  isLoading: boolean;
};

type DataGridProps<TRow extends GridValidRowModel> = {
  title?: string;
  columns: GridColDef<TRow>[];
  useQuery: () => QueryHookResult<TRow>;
  getRowId: (row: TRow) => string | number;
  fullHeight?: boolean;
  height?: number | string;
};

export default function DataGrid<TRow extends GridValidRowModel>({
  title,
  columns,
  useQuery,
  getRowId,
  fullHeight = false,
  height = 560,
}: DataGridProps<TRow>) {
  const { data, error, isLoading } = useQuery();

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
            rows={data ?? []}
            columns={columns}
            loading={isLoading}
            disableRowSelectionOnClick
            getRowId={getRowId}
            autoHeight={false}
            sx={
              fullHeight
                ? { flex: 1, minHeight: 0, height: "100%", width: "100%" }
                : { height: "100%", width: "100%" }
            }
          />
        </Box>
      )}
    </Box>
  );
}
