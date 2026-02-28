export type ServerGridSortOrder = "asc" | "desc";

export type ServerGridOperator = "ct" | "eq" | "in" | "gte" | "lte" | string;

export type ServerGridColumnType =
  | "string"
  | "number"
  | "integer"
  | "boolean"
  | "date"
  | "datetime"
  | string;

export type ServerGridFilter = {
  field: string;
  operator: ServerGridOperator;
  value: string;
};

export type ServerGridFilterableColumn = {
  name?: string | null;
  type?: ServerGridColumnType | null;
  operators?: ServerGridOperator[] | null;
};

export type ServerGridParams = {
  page?: number;
  pageSize?: number;
  sortField?: string;
  sortOrder?: ServerGridSortOrder;
  search?: string;
  filters?: ServerGridFilter[];
};

export type ServerGridResult<TItem> = {
  data: TItem[];
  totalCount: number;
  filterableColumns: ServerGridFilterableColumn[];
};

export type ServerGridApiResponse<TItem> =
  | TItem[]
  | {
      data?: TItem[] | null;
      totalCount?: number | null;
      filterableColumns?: ServerGridFilterableColumn[] | null;
    };
