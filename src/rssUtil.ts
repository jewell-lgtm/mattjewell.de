import fs from "node:fs";
import RSS from "rss";
import showdown from "showdown";
import { PostData } from "@/loaders/post";
import { globals } from "./globals";

export const generateRSS = async (posts: PostData[]) => {
  const feed = new RSS({
    title: globals.siteName,
    description: globals.siteDescription,
    feed_url: `${globals.url}/rss.xml`,
    site_url: globals.url,
    image_url: `${globals.url}/icon.png`,
    managingEditor: globals.email,
    webMaster: globals.email,
    copyright: `${new Date().getFullYear()} ${globals.yourName}`,
    language: "en",
    pubDate: globals.siteCreationDate,
    ttl: 60,
  });

  let isValid = true;
  for (const post of posts) {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(post.content);
    if (!post.datePublished) {
      isValid = false;
      console.warn(
        "All posts must have a publishedDate timestamp when generating RSS feed."
      );
      console.warn("Not generating rss.xml.");
    }
    feed.item({
      title: post.title,
      description: html,
      url: `${globals.url}/${post.path}`,
      categories: /*post.tags ||*/ [],
      author: /*post.author ||*/ globals.yourName,
      date: new Date(post.datePublished || 0).toISOString(),
    });
  }

  if (!isValid) return;

  // writes RSS.xml to public directory
  const path = `${process.cwd()}/public/rss.xml`;
  fs.writeFileSync(path, feed.xml(), "utf8");
  console.log(`generated RSS feed`);
};
