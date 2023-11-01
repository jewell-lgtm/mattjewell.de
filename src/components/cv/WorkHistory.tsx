import {
  Box,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Link,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { type ResumeSchema, ResumeWorkItem } from "@/loaders/cv";
import { when } from "@/helpers/when";
import { chunk, flatMap } from "lodash";
import { useState } from "react";

type Props = {
  resume: ResumeSchema;
};

export const WorkHistory = ({ resume: { work } }: Props) => {
  const first = work.length > 0 ? work[0]! : null;
  const second = work.length > 1 ? work[1]! : null;
  const rest =
    work.length > 2 ? (chunk(work.slice(2), 2) as ResumeWorkItem[][]) : null;

  const [showAll, setShowAll] = useState(false);

  return (
    <VStack>
      <HStack w="full" justifyContent="space-between" px={5}>
        <Heading flex={1} as="h2" size="xl" w="full">
          Work Experience
        </Heading>

        <Box>
          <FormControl display="flex" alignItems="center">
            <FormLabel htmlFor="showAll" mb="0" mr={2}>
              Show All
            </FormLabel>
            <Switch
              id="showAll"
              checked={showAll}
              onChange={e => {
                setShowAll(e.target.checked);
              }}
            />
          </FormControl>
        </Box>
      </HStack>

      <VStack divider={<Divider />} spacing={5} align="stretch">
        {first && <Job job={first} />}
        {second && <Job job={second} />}
        {showAll &&
          rest &&
          rest.map((chunk, chunkI) => (
            <HStack>
              {chunk.map((job, jobI) => (
                <Box key={`${chunkI}-${jobI}`} flex={1}>
                  <Job job={job} />
                </Box>
              ))}
            </HStack>
          ))}
        {!showAll && rest && rest.length > 2 && (
          <Text px={5}>
            {flatMap(rest, it => it).length} more jobs hidden.{" "}
          </Text>
        )}
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
