/* eslint-disable @next/next/no-img-element,jsx-a11y/alt-text */
// noinspection HtmlRequiredAltAttribute

import React from "react";
import { PostData } from "@/loaders/post";
import { Author } from "./Author";
import { Markdown } from "./Markdown";
import { PostMeta } from "./PostMeta";

type Props = { post: PostData };
export function BlogPost({ post }: Props) {
  const { title, subtitle, content, bannerPhoto } = post as any;

  return (
    <div className="blog-post">
      <PostMeta post={post} />
      {bannerPhoto && <img className="blog-post-image" src={bannerPhoto} />}

      <div className="blog-post-title">
        {title && <h1>{title}</h1>}
        {subtitle && <h2>{subtitle}</h2>}
        <br />
        <Author post={post} />
      </div>

      <div className="blog-post-content">
        <Markdown source={content} />
      </div>
    </div>
  );
}
