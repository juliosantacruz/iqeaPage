import React from "react";

import "./CardList.scss";
import Link from "next/link";
import Image from "next/image";

export default function CardList({ usoCard, element }: any) {
  return (
    <article className="CardList">
      <Link href={`${usoCard}/${element.slug}` || "#"}>
        <Image src={element.cover} alt="" width={280} height={240} />
        <div className="footer">
          <h3>{element.title}</h3>
        </div>
      </Link>
    </article>
  );
}
