import { Button } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import React from "react";
import { CoffeeForm } from "@/components/CoffeeForm";
import { Hero, LearnMore } from "@/components/landing-page";
import { PageSection } from "@/components/layout";
import { useTranslations } from "@/hooks/useTranslations";
import { loadBlogPosts } from "@/loaders/blog";
import { PostData } from "@/loaders/post";
import { generateRSS } from "@/rssUtil";

interface Props {
  posts: PostData[];
}

function Home({ posts }: Props) {
  const t = useTranslations();
  const [formRef, setFormRef] = React.useState<HTMLAnchorElement | null>(null);
  return (
    <>
      <Head>
        <title>Matt Jewell</title>
      </Head>

      <Hero
        hero1={t("hero.1")}
        hero2={t("hero.2")}
        buttons={
          <>
            <Button
              variant="secondary"
              onClick={() => {
                formRef?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t("hero.cta1")}
            </Button>
          </>
        }
      />
      <PageSection
        id="more"
        py={16}
        backgroundColor="gray.100"
        _dark={{ backgroundColor: "gray.900" }}
        alignItems="center"
        justifyContent="space-around"
        flexDirection="column"
      >
        <LearnMore />
      </PageSection>
      <PageSection
        alignItems="center"
        justifyContent="space-around"
        flexDirection="column"
      >
        <a id="form" ref={setFormRef} />
        <CoffeeForm />
      </PageSection>

      <div style={{ display: "none" }} aria-hidden>
        <h3>Blog Posts</h3>
        <ul>
          {posts.map((post, i) => (
            <li key={i}>{post.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await loadBlogPosts();

  // comment out to turn off RSS generation during build step.
  await generateRSS(posts);

  const props = {
    posts,
  };

  return { props };
};
