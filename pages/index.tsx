import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import getAllPosts from "../functions/getAllPosts";
import Post from "../models/Posts";
import CardContainer from "../styles/Global/CardContainer";
import Layout from "../styles/Global/Layout";
import Card from "../styles/Posts/Card";
import H2 from "../styles/Typography/H2";

const Home = ({ posts }: any) => {
  const router = useRouter();
  return (
    <Layout>
      <H2 color={"secondary-pink"}>Todos os Posts</H2>
      <CardContainer>
        {posts.map((post: Post, index: number) => (
          <Card
            key={index}
            clickable
            onClick={() =>
              router.push(`posts/${post.metadata.slug.toString()}`)
            }
          >
            <div className="image-container">
              <img src={post.metadata.banner} alt="A" />
            </div>
            <h2>{post.metadata.title}</h2>
            <p className="abstract">{post.metadata.abstract}</p>
            <p className="my-infos">
              {post.metadata.category.toUpperCase()} - {post.metadata.author}
            </p>
          </Card>
        ))}
      </CardContainer>
    </Layout>
  );
};

export async function getStaticProps(context: any) {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}

export default Home;
