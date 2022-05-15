import React from "react";
import getAllPosts from "../../functions/getAllPosts";
import { CategoryPosts } from "../../models/Posts";

interface PostsProps {
  posts: CategoryPosts[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div>
      {posts.map((post, index) => (
        <div key={index}>
          <>
            {post.category}
            {post.posts[0].metadata?.author}
          </>
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
