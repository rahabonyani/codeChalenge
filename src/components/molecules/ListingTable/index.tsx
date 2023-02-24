import TableBody from "components/atoms/TableBody";
import TableHead from "components/atoms/TableHead";
import { Box, Table } from "@chakra-ui/react";
import type { ListingTableProps } from "./types";

const ListingTable = <T extends object>({ headData, bodyData, action }: ListingTableProps<T>) => {
  return (
    <Box borderColor="whiteAlpha.300" overflow="auto" borderWidth={1} rounded="5" mt="8">
      <Table variant="striped">
        <TableHead headData={headData} bg="gray.900" position="sticky" top={0} zIndex={1} />
        <TableBody bodyData={bodyData} bg="gray.300" headData={headData} action={action} />
      </Table>
    </Box>
  );
};

export default ListingTable;
