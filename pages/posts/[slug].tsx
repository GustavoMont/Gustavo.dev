/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import getAllPosts from "../../functions/getAllPosts";
import getPost from "../../functions/getPost";
import Layout from "../../styles/Global/Layout";
import H2 from "../../styles/Typography/H2";

export default function Post(props: any) {
  console.log(props.post);

  return (
    <Layout>
      <div>
        <img src={props.post.metadata.banner} alt="AAAAAAAAAA" />
      </div>
      <H2>{props.post.metadata.title}</H2>
      <ReactMarkdown linkTarget={"_blank"}>{props.post.content}</ReactMarkdown>
    </Layout>
  );
}

export async function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map(({ metadata }) => {
    return { params: { slug: metadata.slug } };
  });
  return {
    paths,
    fallback: "blocking", // false or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const post = getPost(context.params.slug);
  console.log(post);

  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
}
