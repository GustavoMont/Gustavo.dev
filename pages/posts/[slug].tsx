/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ReactMarkdown from "react-markdown";
import getAllPosts from "../../functions/getAllPosts";
import getPost from "../../functions/getPost";
import Post from "../../models/Posts";
import Divider from "../../styles/Global/Divider";
import LayoutPost from "../../styles/Posts/LayoutPost";
import H1 from "../../styles/Typography/H1";
import H2 from "../../styles/Typography/H2";
import P from "../../styles/Typography/P";

interface PostPageProps {
  post: Post;
}

export default function PostPage({ post }: PostPageProps) {
  return (
    <>
      <LayoutPost imageUrl={post.metadata.banner}>
        <div className="banner">
          <div className="overlay" />
        </div>
        <main>
          <header>
            <H1>{post.metadata.title}</H1>
            <div>
              <p>{post.metadata.category}</p>
              <div className="dot"></div>
              <p>{new Date(post.metadata.date).toLocaleDateString()}</p>
            </div>
            <Divider color="secondary-pink" />
          </header>
          <ReactMarkdown
            linkTarget={"_blank"}
            components={{
              hr: ({ node, ...props }) => <Divider {...props} />,
              h2: ({ node, ...props }) => (
                <H2 {...props} color="light-purple" />
              ),
              p: ({ node, ...props }) => <P {...props} />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </main>
      </LayoutPost>
    </>
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

  return {
    props: {
      post,
    }, // will be passed to the page component as props
  };
}
