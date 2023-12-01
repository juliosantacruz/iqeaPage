import React from "react";
import "./CardProduct.scss";
import Image from "next/image";
import sampleImage from "@/assets/samples/filtroCocina.png";
import IconArrowRight from "../Icons/IconArrowRight";
import ButtonStyle from "../ButtonStyle";
import ImageNotFound from '@/assets/Image-not-found.png'

export default function ProductCard({productData}:any) {
  const textSample = `

        <p>- Capacidad máxima: 12 lpm.</p>
        <p>- 3 de polipropileno de alto impacto.</p>
        <p>- Cartucho sedimentador.</p>
        <p>- Cartucho carbón block.</p>
        <p>- Cartucho carbón activado granulado.</p>
        <p>- Watts de lámpara: 18 (10,000 hrs vida útil).</p>
  `;

  return (
    <article className="cardProduct">
        <div className="cardImage">
          <Image src={productData.cover||ImageNotFound} alt={productData.cover_alt} width={200} height={200} className="productImage" />
        </div>
      <div className="cardTitle">
        <h3>
          {productData.title}
        </h3>
      </div>
      <div className="cardFooter">
        <ButtonStyle>
          <button className="btnGeneral">
            FICHA TÉCNICA
            <IconArrowRight />
          </button>
        </ButtonStyle>
      </div>
    </article>
  );
}
