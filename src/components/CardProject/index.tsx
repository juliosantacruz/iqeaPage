import React from "react";
import "./CardProject.scss";
import Image from "next/image";

import sample from "@/assets/servicios/ImgHt1.jpg";

export default function CardProjects() {
  return (
    <article className="CardProject">
      <div className="CardProjectImage">
        <Image src={sample} alt="" />
      </div>
      <div className="CardProjectBody truncate">
        <h3 className="">PTAR SSD Plasticos El Realito Tijuana B.C.</h3>
        <p className="">
          Sistema de tratamiento de aguas de servicios residuales de 50 m3/d a
          base de sistema de torres de oxidación para reusó de agua en riego de
          áreas verdes de acuerdo a la NOM-003-ECOL-19.  
        </p>
      </div>
      <div className="CardProjectLabels">
        <div className="label">2008</div>
        <div className="label">Construccion</div>
        <div className="label">WWT</div>
        <div className="label">Comercial</div>
      </div>
    </article>
  );
}
