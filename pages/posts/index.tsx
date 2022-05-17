/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import getAllPosts from "../../functions/getAllPosts";
import Post, { CategoryPosts } from "../../models/Posts";
import CardContainer from "../../styles/Global/CardContainer";
import Layout from "../../styles/Global/Layout";
import Card from "../../styles/Posts/Card";
import H2 from "../../styles/Typography/H2";

export default function Posts({ posts }: any) {
  return (
    <Layout>
      <H2 color={"secondary-pink"}>Todos os Posts</H2>
      <CardContainer>
        {posts.map((post: Post, index: number) => (
          <Card key={index} clickable>
            <div className="image-container">
              <img src={post.metadata.banner} alt="A" />
            </div>
            <h2>{post.metadata.title}</h2>
            <p>
              {post.metadata.category.toUpperCase()} - {post.metadata.author}
            </p>
          </Card>
        ))}
      </CardContainer>
    </Layout>
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
