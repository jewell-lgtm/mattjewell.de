import { type ResumeSchema } from "@/loaders/cv";
import {
  Box,
  Divider,
  Heading,
  HStack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";

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
      <HStack mb={8}>
        {basics.label &&
          basics.label.split(" | ").map(label => (
            <Tag key={label} size="lg" colorScheme="blue">
              {label}
            </Tag>
          ))}
      </HStack>
      <Divider />
      <VStack spacing={4}>
        {basics.summary &&
          basics.summary.split("\n\n").map((line, i) => (
            <Text px={5} key={`summary-${i}`} fontSize="lg">
              {line}
            </Text>
          ))}
      </VStack>
    </VStack>
  );
};
