import Head from "next/head";
import { generateRSS } from "@/rssUtil";
import { loadBlogPosts, PostData } from "@/loader";
import { Hero, LearnMore } from "@/components/landing-page";
import { GetStaticProps } from "next";

interface Props {
  posts: PostData[];
}

const Home = ({ posts }: Props) => (
  <div className="content">
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
  </div>
);

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
