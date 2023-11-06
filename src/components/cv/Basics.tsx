import { type ResumeSchema } from "@/loaders/cv";
import {
  Box,
  Button,
  Divider,
  Heading,
  Text,
  useColorMode,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaFilePdf, FaMoon, FaSun } from "react-icons/fa";

export const BasicInfo = ({ resume: { basics } }: { resume: ResumeSchema }) => {
  const locale = "en"; // TODO: useLocale();
  const cvLink = locale === "en" ? "/cv-en.pdf" : "/cv-de.pdf";
  const { colorMode, toggleColorMode } = useColorMode();

  const label = basics.label.split(" | ");
  return (
    <VStack spacing={4} align="center" pb={8} pt={8}>
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

      <Text fontSize="md" color="gray.400">
        {label.map((str, index) => {
          return (
            <>
              {str}
              {index !== label.length - 1 && (
                <Text as="span" color="gray.200">
                  {" | "}
                </Text>
              )}
            </>
          );
        })}
      </Text>

      <Wrap>
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
              {locale === "en" ? "CV in English" : "Lebenslauf auf Deutsch"}
            </Button>
          </Link>
        </WrapItem>
      </Wrap>

      <Divider />
      <VStack spacing={4} align="start" textAlign="left" px={12}>
        {basics.summary &&
          basics.summary.split("\n\n").map((paragraph, index) => (
            <Text px={2} key={`summary-${index}`} fontSize="lg">
              {paragraph}
            </Text>
          ))}
      </VStack>
    </VStack>
  );
};

/*
import React from 'react';
import { Box, Heading, Text, VStack, HStack, Divider, Wrap, WrapItem } from '@chakra-ui/react';
import { ResumeSchema } from './ResumeSchema'; // Import the appropriate type

export const BasicInfo = ({ resume: { basics } }: { resume: ResumeSchema }) => {
  return (

  );
};

 */
