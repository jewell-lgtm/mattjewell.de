import { type ResumeProjectItem, type ResumeSchema } from "@/loaders/cv";
import {
  Box,
  Heading,
  Link as ChakraLink,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { formatTimespan } from "@/helpers/formatTimespan";
import { SectionHeading } from "@/components/SectionHeading";
import { useLocale } from "@/hooks/useTranslations";

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

function ProjectItem({
  project: { endDate, company, keySkills, name, startDate, summary, url },
}: {
  project: ResumeProjectItem;
}) {
  const locale = useLocale();

  return (
    <Box p={4} w="full" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading mb={2} size="md">
        {name}
        {company && (
          <Text as="span" color="gray.300">
            {" - "}
            {company}
          </Text>
        )}
      </Heading>
      {startDate && (
        <Text fontSize="sm" color="gray.500" mb={3}>
          {formatTimespan(startDate, endDate, locale)}
        </Text>
      )}
      {summary.split("\n\n").map((text, i) => (
        <Text key={i} as="p" mb={3}>
          {text}
        </Text>
      ))}
      {url && (
        <ChakraLink
          href={url}
          isExternal
          mb={3}
          display="block"
          className="hide-print"
        >
          Visit project
        </ChakraLink>
      )}
      <Wrap>
        {keySkills.map((skill, keyIndex) => (
          <Tag key={keyIndex} size="md" borderRadius="full" m={1}>
            {skill}
          </Tag>
        ))}
      </Wrap>
    </Box>
  );
}
