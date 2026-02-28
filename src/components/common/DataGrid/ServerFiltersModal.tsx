import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import type {
  ServerGridFilter,
  ServerGridFilterableColumn,
} from "@/types/serverGrid";
import { useTranslation } from "react-i18next";

type FilterDraft = {
  operator: string;
  value: string;
};

type ServerFiltersModalProps = {
  close: () => void;
  filterableColumns: ServerGridFilterableColumn[];
  filters: ServerGridFilter[];
  onApply: (filters: ServerGridFilter[]) => void;
};

function getDefaultOperator(column: ServerGridFilterableColumn): string {
  const operators = column.operators?.filter(Boolean) ?? [];
  return operators[0] ?? "eq";
}

function getInputType(
  columnType?: string | null,
): "text" | "number" | "date" | "datetime-local" {
  const normalizedType = columnType?.toLowerCase();
  if (normalizedType === "number" || normalizedType === "integer") {
    return "number";
  }

  if (normalizedType === "date") {
    return "date";
  }

  if (normalizedType === "datetime" || normalizedType === "date-time") {
    return "datetime-local";
  }

  return "text";
}

function isBooleanColumn(columnType?: string | null): boolean {
  return columnType?.toLowerCase() === "boolean";
}

export default function ServerFiltersModal({
  close,
  filterableColumns,
  filters,
  onApply,
}: ServerFiltersModalProps) {
  const { t } = useTranslation();
  const [drafts, setDrafts] = useState<Record<string, FilterDraft>>({});

  const initialDrafts = useMemo<Record<string, FilterDraft>>(() => {
    const byField = new Map(filters.map((filter) => [filter.field, filter]));

    return filterableColumns.reduce<Record<string, FilterDraft>>(
      (acc, column) => {
        const field = column.name?.trim();
        if (!field) {
          return acc;
        }

        const existingFilter = byField.get(field);
        acc[field] = {
          operator: existingFilter?.operator ?? getDefaultOperator(column),
          value: existingFilter?.value ?? "",
        };

        return acc;
      },
      {},
    );
  }, [filterableColumns, filters]);

  useEffect(() => {
    setDrafts(initialDrafts);
  }, [initialDrafts]);

  const applyFilters = () => {
    const nextFilters = filterableColumns.reduce<ServerGridFilter[]>(
      (acc, column) => {
        const field = column.name?.trim();
        if (!field) {
          return acc;
        }

        const draft = drafts[field];
        if (!draft || draft.value.trim() === "") {
          return acc;
        }

        acc.push({
          field,
          operator: draft.operator || getDefaultOperator(column),
          value: draft.value.trim(),
        });

        return acc;
      },
      [],
    );

    onApply(nextFilters);
    close();
  };

  const clearFilters = () => {
    const clearedDrafts = filterableColumns.reduce<Record<string, FilterDraft>>(
      (acc, column) => {
        const field = column.name?.trim();
        if (!field) {
          return acc;
        }

        acc[field] = {
          operator: getDefaultOperator(column),
          value: "",
        };
        return acc;
      },
      {},
    );

    setDrafts(clearedDrafts);
    onApply([]);
    close();
  };

  return (
    <>
      <DialogTitle>{t("dataGrid.filters.title")}</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 0.5 }}>
          {filterableColumns.map((column) => {
            const field = column.name?.trim();
            if (!field) {
              return null;
            }

            const operators = (column.operators?.filter(Boolean) ?? ["eq"]).map(
              (operator) => operator.toLowerCase(),
            );
            const draft = drafts[field] ?? {
              operator: getDefaultOperator(column),
              value: "",
            };
            const inputType = getInputType(column.type);

            return (
              <Box
                key={field}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    md: "minmax(180px, 1fr) minmax(220px, 2fr)",
                  },
                  gap: 1.5,
                  alignItems: "center",
                }}
              >
                <FormControl fullWidth>
                  <InputLabel>{t("dataGrid.filters.operator")}</InputLabel>
                  <Select
                    label={t("dataGrid.filters.operator")}
                    value={draft.operator}
                    size="small"
                    onChange={(event) => {
                      const value = event.target.value;
                      setDrafts((current) => ({
                        ...current,
                        [field]: { ...draft, operator: value },
                      }));
                    }}
                  >
                    {operators.map((operator) => (
                      <MenuItem key={operator} value={operator}>
                        {t(`dataGrid.filters.operators.${operator}`)}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                {isBooleanColumn(column.type) ? (
                  <FormControl fullWidth>
                    <InputLabel>{field}</InputLabel>
                    <Select
                      label={field}
                      value={draft.value}
                      size="small"
                      onChange={(event) => {
                        const value = event.target.value;
                        setDrafts((current) => ({
                          ...current,
                          [field]: { ...draft, value },
                        }));
                      }}
                    >
                      <MenuItem value="">
                        {t("dataGrid.filters.emptyValue")}
                      </MenuItem>
                      <MenuItem value="true">
                        {t("dataGrid.filters.boolean.true")}
                      </MenuItem>
                      <MenuItem value="false">
                        {t("dataGrid.filters.boolean.false")}
                      </MenuItem>
                    </Select>
                  </FormControl>
                ) : (
                  <TextField
                    fullWidth
                    type={inputType}
                    size="small"
                    label={
                      draft.operator === "in"
                        ? t("dataGrid.filters.valueIn", { field })
                        : t("dataGrid.filters.value", { field })
                    }
                    value={draft.value}
                    onChange={(event) => {
                      const value = event.target.value;
                      setDrafts((current) => ({
                        ...current,
                        [field]: { ...draft, value },
                      }));
                    }}
                    slotProps={{
                      inputLabel: {
                        shrink:
                          draft.value.trim().length > 0 ||
                          inputType === "date" ||
                          inputType === "datetime-local",
                      },
                    }}
                  />
                )}
              </Box>
            );
          })}

          {!filterableColumns.length ? (
            <Typography variant="body2" color="text.secondary">
              {t("dataGrid.filters.noColumns")}
            </Typography>
          ) : null}
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={close}>{t("common.cancel")}</Button>
        <Button onClick={clearFilters} color="inherit">
          {t("dataGrid.filters.clear")}
        </Button>
        <Button onClick={applyFilters} variant="contained">
          {t("dataGrid.filters.apply")}
        </Button>
      </DialogActions>
    </>
  );
}
