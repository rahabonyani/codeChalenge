import type { SlideOptions, ButtonProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

export type DrawerProps = {
  children: ReactNode;
  textButton?: ReactNode;
  placement?: SlideOptions["direction"] | "start" | "end";
  drawerTitle?: ReactNode;
  drawerSize?: (string & unknown) | "xl" | "sm" | "md" | "lg" | "xs" | "full";
  closeBUtton?: boolean;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
} & ButtonProps;
