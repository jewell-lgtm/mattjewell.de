import { extendTheme, ThemeComponents, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  brand: {
    300: "#e77878",
    400: "#e75e5e",
    500: "#EB4242",
    600: "#d03232",
  },
};

const components: ThemeComponents = {
  Link: {
    baseStyle: {
      color: "teal.600",
      textDecor: "underline",
      _hover: {
        color: "teal.900",
      },
      _dark: {
        color: "teal.200",
        _hover: {
          color: "teal.100",
        },
      },
    },
  },
  Button: {
    variants: {
      primary: {
        bg: "brand.500",
        color: "white",
        _hover: {
          bg: "brand.600",
        },
        _dark: {
          _hover: {
            bg: "brand.300",
          },
        },
      },
      secondary: {
        bg: "blackAlpha.200",
        _hover: { bg: "blackAlpha.500" },
        _dark: {
          bg: "whiteAlpha.300",
          color: "white",
          _hover: {
            bg: "whiteAlpha.500",
          },
        },
      },
    },
  },
};

export const appTheme = () => extendTheme({ config, components, colors });
