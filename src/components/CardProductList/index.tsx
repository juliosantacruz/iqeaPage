import React from "react";
import "./CardProduct.scss";
import Image from "next/image";
import sampleImage from "@/assets/samples/filtroCocina.png";
import IconArrowRight from "../Icons/IconArrowRight";
import ButtonStyle from "../ButtonStyle";
import Link from "next/link";


type ProductCardType = {
  title:string,
  descripcion?:string,
  href?:string
}
export default function ProductCardList({title,descripcion, href}:ProductCardType) {
  const textSample = descripcion

  return (
      <Link href={href || ''}>
    <article className="cardProduct">


      <div className="cardHeader">
        <h2>
          {title}
        </h2>
      </div>
      <div className="cardBody">

      </div>
      <div className="cardFooter">
        {/* <ButtonStyle>
          <button className="btnGeneral">
            FICHA TÉCNICA
            <IconArrowRight />
          </button>
        </ButtonStyle> */}
      </div>
    </article>
      </Link>
  );
}
