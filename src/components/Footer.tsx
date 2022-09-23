import React from "react";
import { globals } from "@/globals";
import { Link, Text, VStack, HStack } from "@chakra-ui/react";

export const Footer: React.FC = () => (
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
