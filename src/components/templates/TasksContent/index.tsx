import ListingTable from "components/molecules/ListingTable";
import { TasksContentProps } from "./types";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Box, useDisclosure } from "@chakra-ui/react";
import Drawer from "components/atoms/Drawers";
import TaskForm from "components/molecules/TaskForm";

const TaskContent = <T extends object>({ bodyTableContent, headTableContent, action }: TasksContentProps<T>) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Drawer
        onOpen={onOpen}
        onClose={onClose}
        isOpen={isOpen}
        textButton="Add Task"
        drawerSize="md"
        placement="end"
        bg="green.400"
        color="white"
        colorScheme="green"
        fontWeight={400}
        leftIcon={
          <Box fontSize="xl">
            <AiOutlineUserAdd />
          </Box>
        }
      >
        <TaskForm onCloseDrawer={onClose} />
      </Drawer>
      <ListingTable headData={headTableContent} bodyData={bodyTableContent} action={action} />
    </>
  );
};

export default TaskContent;
