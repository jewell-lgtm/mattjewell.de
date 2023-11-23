import {
  Heading,
  Stack,
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { PageSection } from "@/components/layout/PageSection";
import { Logo } from "@/components/Logo";

export function Hero({
  hero1,
  hero2,
  buttons,
}: {
  hero1: string;
  hero2: string;
  buttons: ReactNode;
}) {
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
            {hero1}
          </Heading>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Heading as={motion.h3} fontSize="2xl">
              {hero2}
            </Heading>
          </motion.div>
          <Stack direction={{ base: "column", md: "row" }} width="full">
            {buttons}
          </Stack>
        </Stack>
      </Stack>
    </PageSection>
  );
}
