import { Box, Button, Heading, Stack, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useState } from "react";
import { PageSection } from "@/components/layout/PageSection";
import { useTranslations } from "@/hooks";

export function Hero() {
  const t = useTranslations();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const onImageLoadingComplete = useCallback(
    () => setIsImageLoaded(true),
    [setIsImageLoaded]
  );

  return (
    <PageSection
      backgroundColor="gray.100"
      _dark={{ backgroundColor: "gray.600" }}
    >
      <Stack
        w="full"
        justify="center"
        bgGradient="linear(to-r, blackAlpha.200, transparent)"
        _dark={{ bgGradient: "linear(to-r, blackAlpha.600, transparent)" }}
        direction={{ base: "column", md: "row" }}
        align={{ base: "start", md: "center" }}
        px={{ base: 4, md: 0 }}
      >
        <Box maxW={{ base: 100, md: "100%" }}>
          <Image
            src="/mj.png"
            width={498 / 2.5}
            height={515 / 2.5}
            alt=""
            onLoadingComplete={onImageLoadingComplete}
          />
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
              animate={{ opacity: isImageLoaded ? 1 : 0 }}
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
