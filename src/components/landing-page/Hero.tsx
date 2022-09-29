import {
  Button,
  Heading,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PageSection } from "@/components/layout/PageSection";
import { Logo } from "@/components/Logo";
import { useTranslations } from "@/hooks";

export function Hero() {
  const t = useTranslations();
  const logoSize = useBreakpointValue({ base: 120, md: 220 });
  const logoColor = useColorModeValue("#1d1d1d", "white");
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, [setIsLoaded]);

  return (
    <PageSection
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      px={4}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 4, md: 8 }}
        maxWidth="75%"
      >
        <Logo color={logoColor} width={logoSize} />

        <Stack direction="column" spacing={4}>
          <Heading as="h2" fontSize="4xl">
            {t("hero.1")}
          </Heading>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Heading as={motion.h3} fontSize="2xl">
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
      </Stack>
    </PageSection>
  );
}
