import { readFileSync } from "fs";
import matter from "gray-matter";
import Post from "../models/Posts";

export default function getPost(slug: string): Post {
  const file = readFileSync(`./posts/${slug}.md`, "utf-8");
  const { data: metadata, content } = matter(file);

  return {
    content,
    metadata: {
      ...metadata,
      slug,
    },
  };
}
