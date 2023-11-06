import Head from "next/head";
import { jsonResume, type ResumeSchema } from "@/loaders/cv";
import { type GetStaticProps } from "next";
import { Box, Container, Text, VStack } from "@chakra-ui/react";
import { BasicInfo } from "@/components/cv/Basics";
import { Projects } from "@/components/cv/Projects";
import { WorkHistory } from "@/components/cv/WorkHistory";

type Props = {
  resume: ResumeSchema;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resume = jsonResume;

  return { props: { resume } };
};

const CvPage = ({ resume }: Props) => {
  return (
    <>
      <Head>
        <title>Matt Jewell | Project List</title>
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
            <Box>
              <Text>
                Please note, due to time constraints with client work, this page
                is still under construction.
              </Text>
            </Box>
            <Projects resume={resume} />

            <WorkHistory resume={resume} />
          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default CvPage;
