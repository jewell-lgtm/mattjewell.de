import {
  Button,
  Flex,
  Heading,
  Stack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useTranslations } from "@/copy/useTranslations";

export function Hero() {
  const t = useTranslations();
  return (
    <Flex w={"full"} h={"100vh"} backgroundColor={"gray.600"}>
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            {t("hero.1")}
          </Heading>
          <Heading
            color={"white"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "xl", md: "xl" })}
          >
            {t("hero.2")}
          </Heading>
          <Stack direction={"row"}>
            <Button
              bg={"blue.400"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "blue.500" }}
              as="a"
              href="mailto:m@mattjewell.de"
            >
              {t("hero.cta1")}
            </Button>
            <Button
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
              as="a"
              href={
                'javascript:alert("Here is where we\'ll scroll you somewhere")'
              }
            >
              {t("hero.cta2")}
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
