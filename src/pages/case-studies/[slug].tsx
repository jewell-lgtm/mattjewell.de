import { Link } from "@chakra-ui/react";
import glob from "glob";
import matter from "gray-matter";
import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import NextLink from "next/link";
import { ShowCaseStudy } from "@/components/case-studies";
import { Title } from "@/components/Title";
import { CaseStudy } from "@/data/caseStudy";
import { useTranslations } from "@/hooks/useTranslations";

interface Props {
  caseStudy: CaseStudy;
}

function CaseStudyPage({ caseStudy }: Props) {
  const t = useTranslations();
  return (
    <>
      <Head>
        <Title>{caseStudy.title}</Title>
      </Head>
      <NextLink href="/" passHref>
        <Link>{t("navigation.back")}</Link>
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

  const paths = slugs.flatMap(slug =>
    ["en", "de"].map(locale => ({
      params: { slug },
      locale,
    }))
  );

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

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({
  params: { slug } = {},
}) => {
  if (!slug) {
    throw new Error("No slug was provided");
  }
  const { default: file } = await import(`../../md/case-studies/${slug}.md`);
  const caseStudy = await toCaseStudy(file);
  return { props: { slug, caseStudy } };
};

export default CaseStudyPage;
