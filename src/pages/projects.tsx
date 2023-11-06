import Head from "next/head";
import { jsonResume, type ResumeSchema } from "@/loaders/cv";
import { type GetStaticProps } from "next";
import { Divider, VStack } from "@chakra-ui/react";
import { Projects } from "@/components/cv/Projects";
import { BasicInfo } from "@/components/cv/Basics";
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

      <VStack
        align="start"
        spacing={5}
        maxWidth="container.xl"
        margin="auto"
        divider={<Divider />}
        m={12}
      >
        <BasicInfo resume={resume} />
        <Projects resume={resume} />
        <WorkHistory resume={resume} />
      </VStack>
    </>
  );
};

export default CvPage;
