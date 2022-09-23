import { GetStaticProps } from "next";
import Head from "next/head";
import { Hero, LearnMore } from "@/components/landing-page";
import { loadBlogPosts, PostData } from "@/loader";
import { generateRSS } from "@/rssUtil";

interface Props {
  posts: PostData[];
}

function Home({ posts }: Props) {
  return <>
    <Head>
      <title>Matt Jewell</title>
    </Head>

    <Hero />
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
