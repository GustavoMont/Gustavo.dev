import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavBar from "../../styles/Global/NavBar";
import SpecialLink from "../../styles/Global/SpecialLink";

export default function Menu() {
  const categories = [
    { text: "Enquanto Aprendo", href: "enquanto-aprendo" },
    { text: "Constructor", href: "constructor" },
    { text: "Talk-in-Code", href: "talk-in-code" },
  ];
  return (
    <NavBar>
      <Link href={"/"}>
        <div>
          <Image
            src={"/images/logo.png"}
            alt="Menino Mexendo no Computador"
            width={40}
            height={40}
          />
          <h1>GUSTAVO.DEV</h1>
        </div>
      </Link>
      <ul>
        {categories.map(({ text, href }, index) => (
          <li key={index}>
            <Link href={`/categories/${href}`}>
              <SpecialLink>{text}</SpecialLink>
            </Link>
          </li>
        ))}
        <li>
          <Link href={"/posts"}>
            <SpecialLink>Posts</SpecialLink>
          </Link>
        </li>
        {/* <li>
          <SpecialLink href={"/about"}>Sobre</SpecialLink>
        </li> */}
      </ul>
    </NavBar>
  );
}
