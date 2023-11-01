import { readFile } from "node:fs/promises";
import path from "node:path";
import glob from "glob";
import { last } from "lodash";

import { assertNonNull } from "@/helpers/assertNonNull";

export type RawFile = { path: string; contents: string };
export const globMarkdownFiles = (subdir?: string) =>
  glob.sync(path.resolve(path.join("src", "md", subdir || "", "*.md")));

/**
 * loads all markdown files in the md directory
 */
export const loadAllMarkdownFiles = (subdir?: string) => {
  const files = globMarkdownFiles(subdir);
  return Promise.all(files.map(file => loadMarkdownFile(file)));
};

/**
 * Load a file from the md directory
 *
 * @param relativePath
 */

export const loadMarkdownFile = async (relativePath: string) => {
  const filePath = assertNonNull(last(relativePath.split("md/")));
  const realPath = path.resolve(path.join("src", "md", filePath));

  const mdFile = await readFile(realPath, "utf8");
  return { path: filePath, contents: mdFile };
};
