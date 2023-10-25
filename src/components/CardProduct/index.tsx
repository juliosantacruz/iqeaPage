import React from "react";
import "./CardProduct.scss";
import Image from "next/image";
import sampleImage from "@/assets/samples/filtroCocina.png";
import IconArrowRight from "../Icons/IconArrowRight";

export default function ProductCard() {

  const textSample = `
     <h4>Descripcion</h4>
        <p>
          Sistema de triple acción para desinfección y esterilización de agua,
          modelo HT4-azul.
        </p>

        <p>- Capacidad máxima: 12 lpm.</p>

        <p>- 3 de polipropileno de alto impacto.</p>

        <p>- Cartucho sedimentador.</p>

        <p>- Cartucho carbón block.</p>

        <p>- Cartucho carbón activado granulado.</p>

        <p>- Watts de lámpara: 18 (10,000 hrs vida útil).</p>
  `


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
        
       <div dangerouslySetInnerHTML={{__html:textSample}} />
      </div>
    </article>
  );
}
