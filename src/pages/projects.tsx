import Head from "next/head";
import { type ResumeSchema } from "@/loaders/cv";
import { type GetStaticProps } from "next";
import { Box, Container, VStack } from "@chakra-ui/react";
import { BasicInfo } from "@/components/cv/Basics";
import { Projects } from "@/components/cv/Projects";
import { WorkHistory } from "@/components/cv/WorkHistory";

type Props = {
  resume: ResumeSchema;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resume = await fetch(
    `https://gist.githubusercontent.com/jewell-lgtm/9b53e9d1aa5f4f14425ba2337620aa2e/raw?q=${Math.random()}`
  ).then(result => result.json());
  return { props: { resume } };
};

const CvPage = ({ resume }: Props) => {
  return (
    <>
      <Head>
        <title>Matt Jewell | CV</title>
      </Head>
      <Box>
        <Container centerContent maxW="4xl" p={5}>
          <VStack
            shadow="md"
            borderWidth="1px"
            borderRadius="md"
            w="full"
            spacing={8}
          >
            <BasicInfo resume={resume} />
            <Projects resume={resume} />

            <WorkHistory resume={resume} />
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default CvPage;
