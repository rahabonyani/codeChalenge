// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { ReactNode } from "react";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
};

const theme = extendTheme({ colors });

interface Props {
    children: ReactNode;
}

// 3. Pass the `theme` prop to the `ChakraProvider`
const ThemWrapper = ({ children }: Props) => {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemWrapper;
