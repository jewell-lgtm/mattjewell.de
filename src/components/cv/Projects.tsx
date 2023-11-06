import { type ResumeProjectItem, type ResumeSchema } from "@/loaders/cv";
import { Box, Heading, Tag, Text, VStack, Wrap } from "@chakra-ui/react";
import { formatTimespan } from "@/helpers/formatTimespan";
import { SectionHeading } from "@/components/SectionHeading";

export function Projects({ resume: { projects } }: { resume: ResumeSchema }) {
  return (
    <Box w="full">
      <SectionHeading>Projects</SectionHeading>
      <VStack spacing={4}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </VStack>
    </Box>
  );
}

function ProjectItem(props: { project: ResumeProjectItem }) {
  return (
    <Box p={4} w="full" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading mb={2} size="md">
        {props.project.name}
      </Heading>
      {props.project.startDate && (
        <Text fontSize="sm" color="gray.500" mb={3}>
          {formatTimespan(props.project.startDate, props.project.endDate)}
        </Text>
      )}
      <Text mb={3}>{props.project.summary}</Text>
      <Wrap>
        {props.project.keySkills.map((skill, keyIndex) => (
          <Tag key={keyIndex} size="md" borderRadius="full" m={1}>
            {skill}
          </Tag>
        ))}
      </Wrap>
    </Box>
  );
}
