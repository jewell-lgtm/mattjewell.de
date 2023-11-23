import type { GetStaticProps } from "next";
import Head from "next/head";
import { Hero, LearnMore } from "@/components/landing-page";
import { loadBlogPosts } from "@/loaders/blog";
import { PostData } from "@/loaders/post";
import { generateRSS } from "@/rssUtil";
import { useTranslations } from "@/hooks/useTranslations";
import { Button } from "@chakra-ui/react";

interface Props {
  posts: PostData[];
}

function Home({ posts }: Props) {
  const t = useTranslations();
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
            <Button variant="primary" as="a" href="mailto:m@mattjewell.de">
              {t("hero.cta1")}
            </Button>

            <Button variant="secondary" as="a" href="#more">
              {t("hero.cta2")}
            </Button>
          </>
        }
      />
      <LearnMore />

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
