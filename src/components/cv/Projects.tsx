import {
  Box,
  Heading,
  Link as ChakraLink,
  Tag,
  Text,
  VStack,
  Wrap,
} from "@chakra-ui/react";
import { useState } from "react";
import { formatTimespan } from "@/helpers/formatTimespan";
import { useLocale } from "@/hooks/useTranslations";
import { type ResumeProjectItem, type ResumeSchema } from "@/loaders/cv";

export function Projects({ resume: { projects } }: { resume: ResumeSchema }) {
  return (
    <VStack w="full" spacing={4} pb={4}>
      <Heading size="xl" mb={2}>
        Projects
      </Heading>
      <VStack spacing={4}>
        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </VStack>
    </VStack>
  );
}

function ProjectItem({
  project: {
    endDate,
    company,
    keySkills,
    name,
    startDate,
    summary,
    description,
    url,
  },
}: {
  project: ResumeProjectItem;
}) {
  const locale = useLocale();
  const [showFull, setShowFull] = useState(false);

  return (
    <Box p={4} w="full" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Heading mb={2} size="md">
        {name}
        {company && (
          <Text as="span" color="gray.300">
            {" - "}
            {url ? (
              <ChakraLink href={url} target="_blank">
                {company}
              </ChakraLink>
            ) : (
              company
            )}
          </Text>
        )}
      </Heading>
      {startDate && (
        <Text fontSize="sm" color="gray.500" mb={3}>
          {formatTimespan(startDate, endDate, locale)}
        </Text>
      )}
      <div className="hide-print">
        {showFull && description ? (
          <>
            {description.split("\n\n").map((text, i) => (
              <Text key={i} as="p" mb={3}>
                {preventWidows(text)}
              </Text>
            ))}
            <ChakraLink onClick={() => setShowFull(false)}>
              Read less…
            </ChakraLink>
          </>
        ) : (
          <>
            <Text as="p" mb={3}>
              {preventWidows(summary)}
            </Text>
            {description && (
              <ChakraLink onClick={() => setShowFull(true)}>
                Read more…
              </ChakraLink>
            )}
          </>
        )}
      </div>
      <div className="print-block">
        {summary.split("\n\n").map((text, i) => (
          <Text key={i} as="p" mb={3}>
            {text}
          </Text>
        ))}
      </div>

      <Box pt={4}>
        <Wrap>
          {keySkills.map((skill, keyIndex) => (
            <Tag key={keyIndex} size="md" borderRadius="full" m={1}>
              {skill}
            </Tag>
          ))}
        </Wrap>
      </Box>
    </Box>
  );
}

const preventWidows = (text: string, n = 3) => {
  const words = text.split(" ");
  if (words.length <= n) return text;
  // 3 words = 2 spaces
  const spaces = Math.max(n - 1, 1);
  const nbsp = "\u00A0";
  return (
    words.slice(0, -spaces).join(" ") + nbsp + words.slice(-spaces).join(nbsp)
  );
};
