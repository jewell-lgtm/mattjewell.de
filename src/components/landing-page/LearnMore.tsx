import {
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { PageSection } from "@/components/layout";
import { useTranslations } from "@/hooks";

export function LearnMore() {
  const t = useTranslations();
  return (
    <PageSection
      id="more"
      py={16}
      backgroundColor="gray.100"
      _dark={{ backgroundColor: "gray.900" }}
      alignItems="center"
      justifyContent="space-around"
      flexDirection="column"
    >
      <VStack maxWidth="80ch" px={16} spacing={6}>
        <Heading width="full">{t("more.header")}</Heading>
        <Heading width="full" fontSize="lg">
          {t("more.1")}
        </Heading>
        <Text>{t("more.2")}</Text>
        <Text>{t("more.3")}</Text>
        <Text>{t("more.4")}</Text>
        <Text>{t("more.5")}</Text>

        <Heading width="full">Case Studies:</Heading>
        <UnorderedList>
          <ListItem>
            <NextLink href="/case-studies/ppro" passHref>
              <Link>PPRO Case Study</Link>
            </NextLink>
          </ListItem>
        </UnorderedList>
      </VStack>
    </PageSection>
  );
}
