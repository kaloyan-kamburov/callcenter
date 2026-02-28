import type {
  ServerGridApiResponse,
  ServerGridFilter,
  ServerGridParams,
  ServerGridResult,
} from "@/types/serverGrid";

const DEFAULT_PAGE = 0;
const DEFAULT_PAGE_SIZE = 20;

type QueryParamValue = string | number | boolean;

function toQueryFilterKey(filter: ServerGridFilter): string {
  const normalizedOperator = filter.operator?.toLowerCase();
  if (!normalizedOperator || normalizedOperator === "eq") {
    return `filter.${filter.field}`;
  }

  return `filter.${filter.field}.${normalizedOperator}`;
}

export function buildServerGridQueryParams(
  params?: ServerGridParams
): Record<string, QueryParamValue> {
  const query: Record<string, QueryParamValue> = {
    page: params?.page ?? DEFAULT_PAGE,
    pageSize: params?.pageSize ?? DEFAULT_PAGE_SIZE,
  };

  if (params?.sortField) {
    query.sortField = params.sortField;
  }

  if (params?.sortOrder) {
    query.sortOrder = params.sortOrder;
  }

  if (params?.search?.trim()) {
    query.search = params.search.trim();
  }

  params?.filters?.forEach((filter) => {
    const field = filter.field?.trim();
    const value = filter.value?.trim();

    if (!field || value === "") {
      return;
    }

    query[toQueryFilterKey({ ...filter, field, value })] = value;
  });

  return query;
}

export function normalizeServerGridResponse<TItem>(
  response: ServerGridApiResponse<TItem>
): ServerGridResult<TItem> {
  if (Array.isArray(response)) {
    return {
      data: response,
      totalCount: response.length,
      filterableColumns: [],
    };
  }

  return {
    data: response.data ?? [],
    totalCount: response.totalCount ?? 0,
    filterableColumns: response.filterableColumns ?? [],
  };
}
