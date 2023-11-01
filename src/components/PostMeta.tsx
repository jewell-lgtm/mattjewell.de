import React from "react";
import { PostData } from "@/loaders/post";
import { Meta } from "./Meta";

type Props = { post: PostData };

export function PostMeta({ post: _post }: Props) {
  const post = _post as any;
  return (
    <Meta
      meta={{
        title: post.title,
        desc: post.description,
        link: post.canonicalUrl,
        image: post.bannerPhoto,
      }}
    />
  );
}
