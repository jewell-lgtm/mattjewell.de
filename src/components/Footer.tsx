import { HStack, Link, Text, useColorMode, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { globals } from "@/globals";
import { useTranslations } from "@/hooks/useTranslations";

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
      bgGradient="linear(to-r, blackAlpha.600, transparent)"
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
        <NextLink href="/" passHref>
          <Link color="white" _hover={{ color: "whiteAlpha.800" }}>
            Home
          </Link>
        </NextLink>
        <NextLink href="/cv" passHref>
          <Link color="white" _hover={{ color: "whiteAlpha.800" }}>
            {t("footer.cv")}
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
