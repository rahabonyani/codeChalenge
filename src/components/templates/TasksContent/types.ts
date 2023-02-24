import type { TableHeadingItem } from "components/atoms/TableHead/types";
import type { ReactNode } from "react";

export type TasksContentProps<T extends object> = {
  headTableContent: TableHeadingItem<T>[];
  bodyTableContent: T[];
  action: { [x: string]: (v: T) => ReactNode };
};
