import { ComponentSingleStyleConfig, extendTheme } from "@chakra-ui/react"

export const appTheme = () =>
  extendTheme({
    components: {
      Link: {
        baseStyle: {
          color: "teal.600",
          textDecor: "underline",
        },
      } as ComponentSingleStyleConfig,
    },
  })
