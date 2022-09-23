import React from "react";
import { globals } from "@/globals";
import { HStack, Link, Text, useColorMode, VStack } from "@chakra-ui/react";

export function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <button onClick={() => toggleColorMode()}>
      {colorMode === "dark" ? "☀️" : "🌙"}
    </button>
  );
}

export function Footer() {
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
        <Link color="white" href="https://www.linkedin.com/in/mattjewell1/">
          Connect on LinkedIn
        </Link>
        <Link color="white" href="/rss.xml">
          Blog as RSS
        </Link>
      </HStack>
    </VStack>
  );
}
