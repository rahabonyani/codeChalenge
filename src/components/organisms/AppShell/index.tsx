import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import type { AppShellProps } from "./types";

const AppShell = ({ children, sidebar, header }: AppShellProps) => {
  const [sideBarWidth, setSideBarWidth] = useState("10");

  // Mark for review, useCallback
  const handleShowSideBar = () => {
    // Mark for review, set based on prev value
    setSideBarWidth(sideBarWidth === "10" ? "80" : "10");
  };

  return (
    <Flex flexDirection="column" w="100vw" minH="100vh">
      <Flex width="100%" bgColor="white" height="16" borderBottom="1px" borderColor="gray.700" textColor="gray.900">
        {header}
      </Flex>
      <Flex h="calc(100vh - 64px)">
        <VStack
          width={{ base: sideBarWidth, lg: "80" }}
          height="100%"
          bgColor="white"
          borderEnd="1px"
          borderColor="gray.700"
          justifyContent="start"
          transition="0.3s all ease"
        >
          <Button
            colorScheme="gray"
            p="3"
            borderBottom="1px"
            borderBottomColor="gray.700"
            rounded="none"
            display={{ base: "flex", lg: "none" }}
            justifyContent="start"
            width="100%"
            onClick={handleShowSideBar}
          >
            <AiOutlineMenu fontSize="25px" />
          </Button>
          <Box width="100%">{sidebar}</Box>
        </VStack>
        <Box
          width={{
            base: `calc(100% - ${sideBarWidth === "10" ? "2.5rem" : "20rem"})`,
            lg: "calc(100% - 20rem)",
          }}
          transition="0.3s all ease"
          height="100%"
          bgColor="white"
          p="10"
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default AppShell;
