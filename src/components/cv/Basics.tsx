import {
  Box,
  Button,
  Divider,
  Heading,
  Text,
  useBreakpointValue,
  useColorMode,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaFilePdf, FaMoon, FaPrint, FaSun } from "react-icons/fa";
import { type ResumeSchema } from "@/loaders/cv";

export function BasicInfo({ resume: { basics } }: { resume: ResumeSchema }) {
  const locale = "en"; // TODO: useLocale();
  const cvLink = locale === "en" ? "/cv-en.pdf" : "/cv-de.pdf";
  const { colorMode, toggleColorMode } = useColorMode();
  const summaryPadding = useBreakpointValue({
    base: 0,
    md: 4,
    lg: 8,
  });
  const label = basics.label.split(" | ");

  return (
    <VStack spacing={4} align="center" pt={8}>
      {basics.image && (
        <Box
          mb={8}
          as="img"
          borderRadius="full"
          boxSize="150px"
          objectFit="cover"
          src={basics.image}
          alt={basics.name}
        />
      )}
      <Heading as="h1" size="xl">
        {basics.name}
      </Heading>

      <Text fontSize="md" color="gray.400" textAlign="center">
        {label.map((str, index) => {
          return (
            <React.Fragment key={`label-${index}`}>
              {str}
              {index !== label.length - 1 && (
                <Text as="span" color="gray.200">
                  {" | "}
                </Text>
              )}
            </React.Fragment>
          );
        })}
      </Text>

      <Wrap className="hide-print">
        <WrapItem>
          <Button
            onClick={toggleColorMode}
            variant="solid"
            leftIcon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
          >
            View in {colorMode === "dark" ? "light" : "dark"} mode
          </Button>
        </WrapItem>

        <WrapItem>
          <Link href={cvLink} target="_blank">
            <Button leftIcon={<FaFilePdf />} variant="solid">
              {locale === "en" ? "CV (English)" : "Lebenslauf (Deutsch)"}
            </Button>
          </Link>
        </WrapItem>

        <WrapItem>
          <Button
            leftIcon={<FaPrint />}
            variant="solid"
            onClick={() => {
              window.print();
            }}
          >
            Print
          </Button>
        </WrapItem>
      </Wrap>

      <Divider />
      <VStack
        spacing={4}
        align="start"
        textAlign="left"
        px={summaryPadding}
        py={8}
      >
        {basics.summary &&
          basics.summary.split("\n\n").map((paragraph, index) => (
            <Text px={2} key={`summary-${index}`} fontSize="lg">
              {paragraph}
            </Text>
          ))}
      </VStack>
    </VStack>
  );
}

/*
import React from 'react';
import { Box, Heading, Text, VStack, HStack, Divider, Wrap, WrapItem } from '@chakra-ui/react';
import { ResumeSchema } from './ResumeSchema'; // Import the appropriate type

export const BasicInfo = ({ resume: { basics } }: { resume: ResumeSchema }) => {
  return (

  );
};

 */
