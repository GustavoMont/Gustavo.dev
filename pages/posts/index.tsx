import React from "react";
import getAllPosts from "../../functions/getAllPosts";
import Post, { CategoryPosts } from "../../models/Posts";

export default function Posts({ posts }: any) {
  return (
    <div>
      {posts.map((post: Post, index: number) => (
        <div key={index}>
          <h2>{post.metadata.title}</h2>
          <p>
            {post.metadata.category.toUpperCase()} - {post.metadata.author}
          </p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps(context: any) {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
