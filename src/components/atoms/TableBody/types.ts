import type { TableRowProps, TableColumnHeaderProps, TableBodyProps } from "@chakra-ui/react";
import type { ReactChild, ReactFragment, ReactNode, ReactPortal } from "react";
import type { TableHeadingItem } from "../TableHead/types";

export type bodyItem = {
  [x: string]: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined;
};

export type TbodyProps<T extends object> = {
  rowsBodyProps?: TableRowProps;
  tdProps?: TableColumnHeaderProps;
  bodyData: T[];
  headData: TableHeadingItem<T>[];
  action: { [x: string]: (v: T) => ReactNode };
} & TableBodyProps;
