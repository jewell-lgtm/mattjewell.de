import { ResumeProjectItem, ResumeSchema } from "@/loaders/cv";
import { Divider, Heading, HStack, Tag, Text, VStack } from "@chakra-ui/react";

export function Projects(props: { resume: ResumeSchema }) {
  return (
    <VStack align="stretch" spacing={5}>
      <Heading as="h3" size="lg" p={5}>
        Projects
      </Heading>
      {props.resume.projects.map(project => (
        <ProjectItem key={project.name} project={project} />
      ))}
    </VStack>
  );
}

function ProjectItem({ project }: { project: ResumeProjectItem }) {
  return (
    <VStack divider={<Divider />} align="stretch" p={4} spacing={3}>
      <Heading size="sm">{project.name}</Heading>
      <Text fontSize="sm">{project.summary}</Text>
      {project.keySkills && (
        <HStack spacing={2}>
          {project.keySkills.map(skill => (
            <Tag size="sm" key={skill}>
              {skill}
            </Tag>
          ))}
        </HStack>
      )}
      <Text fontSize="xs" color="gray.500">
        <strong>Duration:</strong> {project.startDate} -{" "}
        {project.endDate ?? "Present"}
      </Text>
    </VStack>
  );
}
