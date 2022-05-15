import { useRouter } from "next/router";
import React from "react";

export default function Post() {
  const { id } = useRouter().query;
  return <div>{id}</div>;
}
