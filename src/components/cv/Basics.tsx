import { type ResumeSchema } from "@/loaders/cv";
import { Box, Divider, Heading, Text, VStack, Wrap } from "@chakra-ui/react";

export const BasicInfo = ({ resume: { basics } }: { resume: ResumeSchema }) => {
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
      <Wrap justify="center" mb={8}>
        <Text fontSize="md" color="gray.400">
          {basics.label}
        </Text>
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
