import { GetStaticProps } from "next";
import React from "react";
import { BlogPost } from "@/components/BlogPost";
import { assertNonNull } from "@/loader";
import { loadBlogPost, loadBlogPosts } from "@/loaders/blog";
import { PostData } from "@/loaders/post";

type Props = {
  post: PostData;
};

function Post(props: Props) {
  const { post } = props;
  return <BlogPost post={post} />;
}

export const getStaticPaths = async () => {
  const blogs = await loadBlogPosts();

  const paths = blogs.map(blog => ({
    params: {
      slug: blog.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  Props,
  { slug: string }
> = async context => {
  const slug = assertNonNull(
    context.params?.slug,
    () => "slug param is not defined: " + JSON.stringify(context.params)
  );
  const post = (await loadBlogPost(slug))!;
  return { props: { post } };
};
export default Post;
