
export type DataTableColumn = {
  label: string;
  tooltip?: string;
  class?: string;
  sortOrders?: { target: string; direction: string }[];
}

export type DataTableColumns = Record<string, DataTableColumn>;
