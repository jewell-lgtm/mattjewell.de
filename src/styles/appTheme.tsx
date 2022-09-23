import { extendTheme, ThemeComponents, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const components: ThemeComponents = {
  Link: {
    baseStyle: {
      color: "teal.600",
      textDecor: "underline",
    },
  },
};

export const appTheme = () => extendTheme({ config, components });
