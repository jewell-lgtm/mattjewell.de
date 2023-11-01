import Head from "next/head";
import { jsonResume, type ResumeSchema } from "@/loaders/cv";
import { type GetStaticProps } from "next";
import { Box, Container, Divider, Heading, VStack } from "@chakra-ui/react";
import { BasicInfo } from "@/components/cv/Basics";
import { WorkHistory } from "@/components/cv/WorkHistory";
import { FriendlyJSON } from "@/components/cv/FriendlyJSon";
import { Projects } from "@/components/cv/Projects";

type Props = {
  resume: ResumeSchema;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  return { props: { resume: jsonResume } };
};

const CvPage = ({ resume }: Props) => {
  return (
    <>
      <Head>
        <title>Matt Jewell | CV</title>
      </Head>
      <Box>
        <Container centerContent maxW="4xl" p={5}>
          <VStack shadow="md" borderWidth="1px" borderRadius="md" w="full">
            <BasicInfo resume={resume} />
            <WorkHistory resume={resume} />
            <Projects resume={resume} />
            <Divider />

            <Heading>Download my CV as JSON</Heading>
            <FriendlyJSON resume={resume} />
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default CvPage;
