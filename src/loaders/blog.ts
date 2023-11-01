import { mapNonNull } from "@/helpers/mapNonNull";
import { loadAllMarkdownFiles, loadMarkdownFile } from "./markdown";
import { parsePost } from "./post";

export const loadBlogPosts = async () => {
  const files = await loadAllMarkdownFiles("blog");
  const parsed = mapNonNull(files, file =>
    file ? parsePost(file) : undefined
  );
  const posts = mapNonNull(parsed, it => (it.success ? it.data : null));
  const published = posts.filter(p => p.published);
  return published.sort(
    (a, b) => (b.datePublished || 0) - (a.datePublished || 0)
  );
};

export const loadBlogPost = async (slug: string) => {
  const markdownFileName = `blog/${slug}.md`;
  const file = await loadMarkdownFile(markdownFileName);

  if (!file) return;
  const parsed = parsePost(file);
  if (!parsed.success) return;
  return parsed.data;
};
