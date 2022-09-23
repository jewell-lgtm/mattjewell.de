import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { useTranslations } from "@/hooks";
import { PageSection } from "@/components/layout/PageSection";
import Image from "next/image";

export function Hero() {
  const t = useTranslations();
  return (
    <PageSection backgroundColor={"gray.600"}>
      <HStack
        w={"full"}
        justify={"center"}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Box>
          <Image src="/mj.png" width={498 / 2} height={515 / 2} alt="" />
        </Box>
        <VStack px={useBreakpointValue({ base: 4, md: 8 })}>
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
              <Button variant="primary" as="a" href="mailto:m@mattjewell.de">
                {t("hero.cta1")}
              </Button>
              <Button variant="secondary" as="a" href="#more">
                {t("hero.cta2")}
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </HStack>
    </PageSection>
  );
}
