import NextHead from "next/head";
import React from "react";
import { globals } from "@/globals";

export function Meta({
  meta: { desc, image, link, title },
}: {
  meta: {
    title: string;
    link?: string;
    desc?: string;
    image?: string;
  };
}) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta name="copyright" content={globals.yourName} />
      {link && <link rel="canonical" href={link} />}
      {desc && <meta name="description" content={desc} />}
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      {desc && (
        <meta name="og:description" property="og:description" content={desc} />
      )}
      <meta property="og:site_name" content={globals.siteName} />
      {link && <meta property="og:url" content={`${link}`} />}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {desc && <meta name="twitter:description" content={desc} />}
      <meta name="twitter:site" content={globals.twitterHandle} />
      <meta name="twitter:creator" content={globals.twitterHandle} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta property="og:image" content={`${image}`} />}
    </NextHead>
  );
}
