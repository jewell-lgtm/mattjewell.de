import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useTranslations } from "@/hooks/useTranslations";

export function LearnMore() {
  const t = useTranslations();
  return (
    <Container minWidth="240" maxWidth="2xl" id="form">
      <VStack maxWidth="80ch" px={16} spacing={6}>
        <Heading width="full">{t("more.header")}</Heading>
        <Heading width="full" fontSize="lg">
          {t("more.1")}
        </Heading>
        <Text>{t("more.2")}</Text>
        <Text>{t("more.3")}</Text>
        <Text>{t("more.4")}</Text>
        <Text>{t("more.5")}</Text>
      </VStack>
    </Container>
  );
}
