import React from "react";
import "./ProductCard.scss";
import Image from "next/image";
import sampleImage from "@/assets/samples/filtroCocina.png";
import IconArrowRight from "../Icons/IconArrowRight";

export default function ProductCard() {
  return (
    <article className="cardProduct">
      <div className="cardImage">
        <Image src={sampleImage} alt="sample" className="productImage" />
        <button className="btnGeneral">
          FICHA TÉCNICA
          <IconArrowRight />
        </button>
      </div>
      <div className="cardBody">
        <h4>Descripcion</h4>
        <p>
          Sistema de triple acción para desinfección y esterilización de agua,
          modelo HT4-azul.
        </p>
        <ul>
          <li>
            <p>Capacidad máxima: 12 lpm.</p>
          </li>
          <li>
            <p>3 de polipropileno de alto impacto.</p>
          </li>
          <li>
            <p>Cartucho sedimentador.</p>
          </li>
          <li>
            <p>Cartucho carbón block.</p>
          </li>
          <li>
            <p>Cartucho carbón activado granulado.</p>
          </li>
          <li>
            <p>Watts de lámpara: 18 (10,000 hrs vida útil).</p>
          </li>
        </ul>
      </div>
    </article>
  );
}
