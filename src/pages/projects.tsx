import { Divider, VStack } from "@chakra-ui/react";
import { type GetStaticProps } from "next";
import Head from "next/head";
import { BasicInfo } from "@/components/cv/Basics";
import { Projects } from "@/components/cv/Projects";
import { WorkHistory } from "@/components/cv/WorkHistory";
import { jsonResume, type ResumeSchema } from "@/loaders/cv";

type Props = {
  resume: ResumeSchema;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const resume = jsonResume;

  return { props: { resume } };
};

function CvPage({ resume }: Props) {
  return (
    <>
      <Head>
        <title>Matt Jewell | Project List</title>
      </Head>

      <VStack
        spacing={5}
        maxWidth="container.lg"
        margin="auto"
        px={{ base: 4, md: 8 }}
        py={5}
        align="stretch"
      >
        <BasicInfo resume={resume} />
        <Divider />
        <Projects resume={resume} />
        <WorkHistory resume={resume} />
      </VStack>
    </>
  );
}

export default CvPage;
