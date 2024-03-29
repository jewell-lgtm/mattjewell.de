import {
  Box,
  Heading,
  List,
  ListItem,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import React from "react";
import { formatTimespan } from "@/helpers/formatTimespan";
import { useLocale } from "@/hooks/useTranslations";
import { type ResumeSchema, type ResumeWorkItem } from "@/loaders/cv";

export function WorkHistory({ resume: { work } }: { resume: ResumeSchema }) {
  return (
    <VStack w="full" spacing={4} pb={4}>
      <Heading size="xl" mb={2}>
        Work History
      </Heading>
      <VStack spacing={4}>
        {work.map((workItem, index) => (
          <WorkItem key={index} work={workItem} />
        ))}
      </VStack>
    </VStack>
  );
}

function WorkItem(props: { work: ResumeWorkItem }) {
  const locale = useLocale();
  return (
    <Box p={4} w="full" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading mb={2} size="md">
        {props.work.name} - {props.work.position}
      </Heading>
      {props.work.startDate && (
        <Text fontSize="sm" color="gray.500" mb={3}>
          {formatTimespan(props.work.startDate, props.work.endDate, locale)}
        </Text>
      )}
      <Text mb={3}>{props.work.summary}</Text>
      {props.work.technologies && (
        <Wrap mb={3}>
          {props.work.technologies.map((technology, techIndex) => (
            <Tag key={techIndex} size="md" borderRadius="full" m={1}>
              {technology}
            </Tag>
          ))}
        </Wrap>
      )}
      {props.work.highlights && (
        <>
          <Heading size="sm" mb={2}>
            Highlights
          </Heading>
          <List px={8} spacing={2} mb={3} styleType="disc">
            {props.work.highlights.map((highlight, highlightIndex) => (
              <ListItem key={highlightIndex}>{highlight}</ListItem>
            ))}
          </List>
        </>
      )}
    </Box>
  );
}
