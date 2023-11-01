import { format } from "fecha";
import Image from "next/image";
import React from "react";

export function Author(props: { post: any }) {
  return (
    <div className="author-container">
      <div className="author">
        {props.post.authorPhoto && (
          <Image
            alt="A photo of the author"
            src={props.post.authorPhoto}
            className="author-image"
            width={64}
            height={64}
          />
        )}
        <AuthorLines post={props.post} />
      </div>
    </div>
  );
}

export function AuthorLines(props: { post: any }) {
  return (
    <div>
      <p className="author-line">
        {props.post.author && <span>{props.post.author}</span>}

        {props.post.authorTwitter && (
          <span>
            {" "}
            <a
              href={`https://twitter.com/${props.post.authorTwitter}`}
            >{`@${props.post.authorTwitter}`}</a>{" "}
          </span>
        )}
      </p>
      <p className="author-line subtle">
        {props.post.datePublished
          ? format(new Date(props.post.datePublished), "MMMM Do, YYYY")
          : ""}
      </p>
    </div>
  );
}
