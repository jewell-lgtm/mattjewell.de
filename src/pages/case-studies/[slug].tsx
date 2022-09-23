import { GetStaticPaths, GetStaticProps } from "next";
import glob from "glob";
import matter from "gray-matter";
import { CaseStudy } from "@/data/caseStudy";
import { ShowCaseStudy } from "@/components/case-studies";
import { Title } from "@/components/Title";
import Head from "next/head";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";

interface CaseStudyProps {
  caseStudy: CaseStudy;
}

function CaseStudyPage({ caseStudy }: CaseStudyProps) {
  return (
    <>
      <Head>
        <Title>{caseStudy.title}</Title>
      </Head>
      <NextLink href="/" passHref>
        <Link>Go back</Link>
      </NextLink>
      <ShowCaseStudy caseStudy={caseStudy} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const markdown = glob.sync("./src/md/case-studies/*.md");

  const slugs = markdown.map((file: string) => {
    const popped = file.split("/").pop();
    if (!popped) throw new Error(`Invalid case study path: ${file}`);
    return popped.replace(/\.md$/, "").trim();
  });

  const paths = slugs.map(slug => `/case-studies/${slug}`);

  return { paths, fallback: false };
};

async function toCaseStudy(file: string): Promise<CaseStudy> {
  const contents = matter(file);

  return CaseStudy.parse({
    md: contents.content,
    title: contents.data.title,
    subtitle: contents.data.subtitle,
  });
}

export const getStaticProps: GetStaticProps<
  CaseStudyProps,
  { slug: string }
> = async ({ params: { slug } = {} }) => {
  if (!slug) {
    throw new Error("No slug was provided");
  }
  const file = (await import(`../../md/case-studies/${slug}.md`)).default;
  const caseStudy = await toCaseStudy(file);
  return { props: { slug, caseStudy } };
};

export default CaseStudyPage;
