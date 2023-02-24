import type { TableHeadingItem } from "components/atoms/TableHead/types";
import type { ReactNode } from "react";

export type ListingTableProps<T extends object> = {
  headData: TableHeadingItem<T>[];
  bodyData: T[];
  action: { [x: string]: (v: T) => ReactNode };
};
