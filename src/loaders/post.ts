import matter from "gray-matter";
import { z } from "zod";
import { RawFile } from "@/loaders/markdown";

export const postSchema = z.object({
  path: z.string(),
  slug: z.string(),
  title: z.string(),
  subtitle: z.string().nullable().optional(),
  published: z.boolean().optional(),
  datePublished: z.number().optional(),
  content: z.string(),
});

export type PostData = z.infer<typeof postSchema>;

export const parsePost = (file: RawFile) => {
  const metadata = matter(file.contents);
  const path = file.path.replace(/\.md$/, "");

  return postSchema.safeParse({
    ...metadata.data,
    path,
    slug: path.replace(/^blog\//, ""),
    content: metadata.content,
  });
};
