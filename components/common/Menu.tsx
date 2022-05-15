import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Menu() {
  const categories = [
    { text: "Enquanto Aprendo", href: "enquanto-aprendo" },
    { text: "Constructor", href: "constructor" },
    { text: "Talk-in-Code", href: "talk-in-code" },
  ];
  return (
    <nav>
      <div>
        <Image
          src={"/images/logo.png"}
          alt="Menino Mexendo no Computador"
          width={40}
          height={40}
        />
        <h1>GUSTAVO.DEV</h1>
      </div>
      <ul>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        {categories.map(({ text, href }, index) => (
          <li key={index}>
            <Link href={`/categories/${href}`}>{text}</Link>
          </li>
        ))}
        <li>
          <Link href={"/about"}>Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
