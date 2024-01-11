import React from "react";
import "./CardProduct.scss";
import Image from "next/image";
import sampleImage from "@/assets/samples/filtroCocina.png";
import IconArrowRight from "../Icons/IconArrowRight";
import ButtonStyle from "../ButtonStyle";
import ImageNotFound from '@/assets/Image-not-found.png'
import Link from "next/link";

export default function ProductCard({productData}:any) {

  return (
    <article className="cardProduct">
        <div className="cardImage">
          <Image src={productData.cover||ImageNotFound} alt={productData.cover_alt||'imagen de producto'} width={200} height={200} className="productImage" />
        </div>
      <div className="cardTitle">
        <h3>
          {productData.title}
        </h3>
      </div>
      <div className="cardFooter">
        <ButtonStyle>
          <Link className="btnGeneral" href={`/productos/${productData.category_slug}/${productData.slug}`}>
            Ver mas
            <IconArrowRight />
          </Link>
        </ButtonStyle>
      </div>
    </article>
  );
}
