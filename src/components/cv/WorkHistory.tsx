import { Box, Divider, Heading, Link, Text, VStack } from "@chakra-ui/react";
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
      <Text mt={2}>{props.job.summary}</Text>
      {props.job.url && (
        <Link href={props.job.url} isExternal color="blue.500">
          Company Website
        </Link>
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
