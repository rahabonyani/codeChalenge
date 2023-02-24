import { Drawer as DrawerChakra, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, Button } from "@chakra-ui/react";
import type { DrawerProps } from "./types";

const Drawer = ({
  children,
  textButton,
  placement = "right",
  drawerTitle,
  drawerSize = "sm",
  closeBUtton = true,
  isOpen,
  onOpen,
  onClose,
  ...props
}: DrawerProps) => {
  return (
    <>
      <Button onClick={onOpen} {...props}>
        {textButton}
      </Button>
      <DrawerChakra isOpen={isOpen} placement={placement} onClose={onClose} size={drawerSize}>
        <DrawerOverlay />
        <DrawerContent>
          {closeBUtton && <DrawerCloseButton />}
          <DrawerHeader>{drawerTitle}</DrawerHeader>

          {children}
        </DrawerContent>
      </DrawerChakra>
    </>
  );
};

export default Drawer;
