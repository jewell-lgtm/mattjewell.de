import {
  Box,
  Divider,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { type ResumeSchema, type ResumeWorkItem } from "@/loaders/cv";
import { when } from "@/helpers/when";

type Props = {
  resume: ResumeSchema;
};

export const WorkHistory = ({ resume: { work } }: Props) => {
  return (
    <VStack>
      <Heading flex={1} as="h2" size="xl" w="full" px={5}>
        Work Experience
      </Heading>

      <VStack divider={<Divider />} spacing={5} align="stretch">
        {work.map((job, i) => (
          <Job key={i} job={job as ResumeWorkItem} />
        ))}
      </VStack>
    </VStack>
  );
};

function Job(props: { job: ResumeWorkItem }) {
  return (
    <Box p={5}>
      <Heading as="h3" size="md">
        {props.job.position} - {props.job.name}
      </Heading>
      <Text fontSize="sm" color="gray.600">
        {[
          when(props.job.startDate, format),
          when(props.job.endDate, format) ?? "Present",
        ].join(" - ")}
      </Text>
      {props.job.summary
        .split("\n")
        .filter(it => it?.length ?? -1 > 0)
        .map(line => (
          <Text mt={2}>{line}</Text>
        ))}
      {props.job.highlights && props.job.highlights.length > 0 && (
        <>
          <Heading as="h4" size="sm" mt={4} mb={2}>
            Highlights
          </Heading>
          <UnorderedList spacing={2}>
            {props.job.highlights.map((highlight, index) => (
              <ListItem key={index}>{highlight}</ListItem>
            ))}
          </UnorderedList>
        </>
      )}
      {props.job.url && (
        <Box mt={4}>
          <Link href={props.job.url} isExternal color="blue.500">
            Company Website
          </Link>
        </Box>
      )}
    </Box>
  );
}

function format(dateStr: string) {
  const date = new Date(dateStr);
  return `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}`;
}
