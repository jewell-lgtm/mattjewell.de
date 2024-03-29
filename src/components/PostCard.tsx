import { format } from "fecha";
import React from "react";
import { PostData } from "@/loaders/post";
import { Tag } from "./Tag";

export function PostCard(props: { post: PostData }) {
  const post = props.post as any;
  return (
    <a className="post-card" href={`/${post.path}`}>
      <div className="post-card-inner">
        {post.thumbnailPhoto && (
          <div
            className="post-card-thumbnail"
            style={{ backgroundImage: `url(${post.thumbnailPhoto})` }}
          />
        )}
        <div className="post-card-title">
          {post.title && <h2>{post.title}</h2>}
          {post.subtitle && <p>{post.subtitle}</p>}
          <p>
            {props.post.datePublished
              ? format(new Date(props.post.datePublished), "MMMM Do, YYYY")
              : ""}
          </p>
          <div className="flex-spacer"></div>

          <div className="tag-container">
            {post.tags &&
              ((post.tags || []) as string[]).map(tag => (
                <Tag key={tag} tag={tag} />
              ))}
          </div>
        </div>
      </div>
    </a>
  );
}
