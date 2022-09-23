import React from "react";
import { globals } from "@/globals";
import { HStack, Link, Text, useColorMode, VStack } from "@chakra-ui/react";
import { useTranslations } from "@/hooks";
import { useRouter } from "next/router";
import NextLink from "next/link";

export function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <button onClick={() => toggleColorMode()}>
      {colorMode === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export function Footer() {
  const router = useRouter();
  const t = useTranslations();

  return (
    <VStack
      as="footer"
      width="full"
      textAlign="center"
      backgroundColor="gray.600"
      bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      color="white"
      pt={8}
      pb={4}
    >
      <DarkMode />
      <Text as="p">{`© ${globals.yourName} ${new Date().getFullYear()}`}</Text>
      <HStack>
        <NextLink
          href={router.asPath}
          locale={router.locale === "en" ? "de" : "en"}
          passHref
        >
          <Link color="white" _hover={{ color: "whiteAlpha.800" }}>
            {t("footer.language")}
          </Link>
        </NextLink>
        <Link
          color="white"
          _hover={{ color: "whiteAlpha.800" }}
          href="https://www.linkedin.com/in/mattjewell1/"
        >
          {t("footer.ln")}
        </Link>
        <Link
          color="white"
          _hover={{ color: "whiteAlpha.800" }}
          href="/rss.xml"
        >
          {t("footer.rss")}
        </Link>
      </HStack>
    </VStack>
  );
}
