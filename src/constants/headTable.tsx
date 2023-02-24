import { Checkbox, Text } from "@chakra-ui/react";
import type { TableHeadingItem } from "components/atoms/TableHead/types";
import { ChangeEvent } from "react";

export const taskHeadTable: TableHeadingItem<{
  title: string;
  description: string;
  completed: boolean;
  id: string;
}>[] = [
  { label: "title", dataIndex: "title", id: 0 },
  { label: "description", dataIndex: "description", id: 0 },
  {
    label: "Completed",
    id: 5,
    action: (props, action) => {
      const handleChangeComplete = (e: ChangeEvent<HTMLInputElement>) => {
        const data = { ...props };
        data["completed"] = e.target.checked;
        action.editTask(data);
      };

      return (
        <Checkbox colorScheme="green" isChecked={props.completed} onChange={(e) => handleChangeComplete(e)}>
          {props.completed ? <Text>Completed</Text> : <Text>Not complete</Text>}
        </Checkbox>
      );
    },
  },
];
