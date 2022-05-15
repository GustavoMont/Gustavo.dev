import { readdirSync, readFileSync } from "fs";
import gray from "gray-matter";
import { remark } from "remark";
import htmlizer from "remark-html";
import { CategoryPosts } from "../models/Posts";

export default function getAllPosts(): CategoryPosts[] {
  const categories = readdirSync("./posts/", "utf-8");
  const allPosts = categories.map((category) => {
    const allFiles = readdirSync(`./posts/${category}`, "utf-8");
    const posts = allFiles.map((filename) => {
      const file = readFileSync(`./posts/${category}/${filename}`, "utf-8");
      const { data: metadata, content } = gray(file);
      const html = remark().use(htmlizer).processSync(content);
      return {
        metadata,
        content: html.value.toString(),
      };
    });
    return {
      category,
      posts,
    };
  });
  return allPosts;
}
