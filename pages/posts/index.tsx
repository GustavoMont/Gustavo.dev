/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import getAllPosts from "../../functions/getAllPosts";
import Post, { CategoryPosts } from "../../models/Posts";
import CardContainer from "../../styles/Global/CardContainer";
import Layout from "../../styles/Global/Layout";
import Card from "../../styles/Posts/Card";
import H2 from "../../styles/Typography/H2";

export default function Posts({ posts }: any) {
  const router = useRouter();
  return (
    <Layout>
      <h1>A</h1>
    </Layout>
  );
}
