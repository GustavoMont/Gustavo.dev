import { useRouter } from "next/router";
import React from "react";
import getAllPosts from "../../functions/getAllPosts";
import Layout from "../../styles/Global/Layout";

export default function Post(props: any) {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: props.post.content }} />
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
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps(context: any) {
  const posts = getAllPosts();
  const post = posts.find(
    ({ metadata }) => metadata.slug === context.params.slug
  );
  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
}
