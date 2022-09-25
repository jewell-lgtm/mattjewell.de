import {
  Box,
  Button,
  Heading,
  Stack,
  useBreakpointValue,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PageSection } from "@/components/layout/PageSection";
import { Logo } from "@/components/Logo";
import { useTranslations } from "@/hooks";

export function Hero() {
  const t = useTranslations();
  const logoSize = useBreakpointValue({ base: 120, md: 220 });
  const logoColor = useColorMode().colorMode === "dark" ? "white" : "#1d1d1d";
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  return (
    <PageSection
      backgroundColor="white"
      _dark={{ backgroundColor: "gray.600" }}
    >
      <Stack
        w="full"
        justify="center"
        bgGradient="linear(to-r, blackAlpha.100, transparent)"
        _dark={{ bgGradient: "linear(to-r, blackAlpha.600, transparent)" }}
        direction={{ base: "column", md: "row" }}
        align={{ base: "start", md: "center" }}
        px={{ base: 4, md: 0 }}
      >
        <Box>
          <Logo color={logoColor} width={logoSize} />
        </Box>
        <VStack px={{ base: 0, md: 8 }}>
          <Stack maxW="2xl" align="flex-start" spacing={6}>
            <Heading
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: "3xl", md: "4xl" }}
            >
              {t("hero.1")}
            </Heading>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              aria-hidden={false}
            >
              <Heading
                fontWeight={700}
                lineHeight={1.2}
                fontSize={{ base: "xl", md: "xl" }}
                color="blackAlpha.700"
                _dark={{ color: "whiteAlpha.800" }}
              >
                {t("hero.2")}
              </Heading>
            </motion.div>

            <Stack direction={{ base: "column", md: "row" }} width="full">
              <Button variant="primary" as="a" href="mailto:m@mattjewell.de">
                {t("hero.cta1")}
              </Button>

              <Button variant="secondary" as="a" href="#more">
                {t("hero.cta2")}
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Stack>
    </PageSection>
  );
}
