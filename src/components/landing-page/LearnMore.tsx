import { PageSection } from "@/components/layout";
import { Heading, Link, Text, VStack } from "@chakra-ui/react";
import NextLink from "next/link";

export function LearnMore() {
  return (
    <PageSection id="more" justifyContent="center" py={16}>
      <VStack>
        <Heading>More Information about me</Heading>
        <Text>Here is where you can learn a little bit more about me</Text>
        <NextLink href="/case-studies/ppro" passHref>
          <Link>PPRO Case Study</Link>
        </NextLink>
      </VStack>
    </PageSection>
  );
}
