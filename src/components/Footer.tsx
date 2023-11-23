import {
  HStack,
  Link,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { globals } from "@/globals";
import { useTranslations } from "@/hooks/useTranslations";

function DarkMode() {
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

  // Dynamic values based on color mode
  const textColor = useColorModeValue("gray.800", "white");
  const linkHoverColor = useColorModeValue("gray.600", "whiteAlpha.800");

  const bgGradient = useColorModeValue(
    "linear(to-r, gray.100, gray.50)",
    "linear(to-l, gray.700, gray.600)"
  );

  return (
    <div className="hide-print">
      <VStack
        as="footer"
        width="full"
        textAlign="center"
        bgGradient={bgGradient}
        color={textColor}
        pt={8}
        pb={8}
      >
        <DarkMode />
        <Text as="p" color={textColor}>{`© ${
          globals.yourName
        } ${new Date().getFullYear()}`}</Text>
        <HStack>
          <NextLink
            href={router.asPath}
            locale={router.locale === "en" ? "de" : "en"}
            passHref
          >
            <Link color={textColor} _hover={{ color: linkHoverColor }}>
              {t("footer.language")}
            </Link>
          </NextLink>
          <NextLink href="/" passHref>
            <Link color={textColor} _hover={{ color: linkHoverColor }}>
              Home
            </Link>
          </NextLink>
          <NextLink
            href={router.locale === "en" ? "/cv-en.pdf" : "/cv-de.pdf"}
            locale={router.locale}
            passHref
          >
            <Link color={textColor} _hover={{ color: linkHoverColor }}>
              {t("footer.cv")}
            </Link>
          </NextLink>
          <Link
            href="https://www.linkedin.com/in/mattjewell1/"
            isExternal
            color={textColor}
            _hover={{ color: linkHoverColor }}
          >
            {t("footer.ln")}
          </Link>
          <Link
            href="/rss.xml"
            isExternal
            color={textColor}
            _hover={{ color: linkHoverColor }}
          >
            {t("footer.rss")}
          </Link>
          <NextLink href="/coffee" passHref>
            <Link color={textColor} _hover={{ color: linkHoverColor }}>
              {t("footer.coffee")}
            </Link>
          </NextLink>
        </HStack>
      </VStack>
    </div>
  );
}
