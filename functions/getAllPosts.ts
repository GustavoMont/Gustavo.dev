import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import htmlizer from "remark-html";
import Post, { CategoryPosts } from "../models/Posts";

export default function getAllPosts(): Post[] {
  const postPath = "./posts/";
  const file = readdirSync(postPath, "utf-8");
  const allPosts: Post[] = file.map((filename) => {
    const fileContent = readFileSync(postPath + filename, "utf-8");
    const { data: metadata, content } = matter(fileContent);
    return {
      metadata: {
        ...metadata,
        slug: filename.replace(".md", "").toLowerCase(),
      },
      content,
    };
  });

  return allPosts;
}
