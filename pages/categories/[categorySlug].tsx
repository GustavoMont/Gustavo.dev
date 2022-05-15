import type { NextPage } from "next";
import { useRouter } from "next/router";

interface Post {
  title: string;
  abstract: string;
}

interface CategoriesProps {
  posts: Post[];
}

const Categories = ({ posts }: CategoriesProps) => {
  const router = useRouter();
  const { categorySlug } = router.query;
  return (
    <div>
      <h1>
        {categorySlug?.toString().replace(/-/gi, " ").toLocaleUpperCase()}
      </h1>
      {posts.map(({ title, abstract }, id) => (
        <div key={id} onClick={() => router.push(`/posts/${id}`)}>
          <h3>{title}</h3>
          <p>{abstract}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;

export async function getStaticProps(context: any) {
  const posts = [
    {
      title: "Título 0",
      abstract: "Resumo",
    },
    {
      title: "Título 1",
      abstract: "Resumo",
    },
    {
      title: "Título 2",
      abstract: "Resumo",
    },
  ];
  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { categorySlug: "enquanto-aprendo" } },
      { params: { categorySlug: "constructor" } },
      { params: { categorySlug: "talk-in-code" } },
    ],
    fallback: false,
  };
}
