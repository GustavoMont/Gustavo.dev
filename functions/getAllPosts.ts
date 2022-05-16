import { readdirSync, readFileSync } from "fs";
import gray from "gray-matter";
import { remark } from "remark";
import htmlizer from "remark-html";
import Post, { CategoryPosts } from "../models/Posts";

export default function getAllPosts() {
  const categories = readdirSync("./posts/", "utf-8");
  const allPosts: Post[] = [];
  categories.forEach((category) => {
    const files = readdirSync(`./posts/${category}`);
    files.forEach((file) => {
      const post = readFileSync(`./posts/${category}/${file}`, "utf-8");
      const { content, data: metadata } = gray(post);
      const html = remark().use(htmlizer).processSync(content).value.toString();
      allPosts.push({
        metadata: {
          ...metadata,
          category,
        },
        content: html,
      });
    });
  });
  return allPosts;
}
