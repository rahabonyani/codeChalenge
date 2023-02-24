import { Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { useCallback } from "react";
import uuid from "react-uuid";
import type { TableHeadingItem } from "../TableHead/types";
import type { TbodyProps } from "./types";

const TableBody = <T extends object>({ headData, rowsBodyProps, tdProps, bodyData, action, ...props }: TbodyProps<T>) => {
  const getCell = useCallback(
    (item: TableHeadingItem<T>, row: T) => {
      if (item.action) {
        return <>{item.action(row, action)}</>;
      }
      if (item.dataIndex) {
        return <>{row[item.dataIndex]}</>;
      }
      return <Text>-</Text>;
    },
    [action]
  );

  return (
    <Tbody {...props}>
      {bodyData.map((itemRow) => (
        <Tr {...rowsBodyProps} key={uuid()}>
          {headData.map((item) => (
            <Td {...tdProps} key={uuid()}>
              {getCell(item, itemRow)}
            </Td>
          ))}
        </Tr>
      ))}
    </Tbody>
  );
};

export default TableBody;
