import { Link } from "@chakra-ui/react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { loadBlogPosts } from "@/loaders/blog";
import { PostData } from "@/loaders/post";

type Props = {
  posts: PostData[];
};

function BlogIndex({ posts }: Props) {
  return (
    <>
      <Head>
        <title>Blog | Matt Jewell</title>
      </Head>

      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post, i) => {
          return (
            <li key={i}>
              <Link href={`/${post.path}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default BlogIndex;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await loadBlogPosts();

  return {
    props: {
      posts,
    },
  };
};
