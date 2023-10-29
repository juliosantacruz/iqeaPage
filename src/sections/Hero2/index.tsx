import React from "react";
import background from "@/assets/hero/heroImage1-min.jpg";
import "./Hero2.scss";

export default function Hero2() {
  const bgImage = {
    backgroundImage: `url(${background.src})`,
    backgroundAttachment: "fixed",
  };

  return (
    <section id="Hero" style={bgImage}>
      <div className="title">
        <h1>
          Experiencia <span className="text-gradient">IQEA</span>
        </h1>
        <p>
          {" "}
          Limpiamos el planeta, tenemos experiencia diseniando y construyendo
          sistemas de tratamiento de agua y procesos, resolviendo los retos mas
          complejos , contamos con un portafolio de soliciones concretas para tu
          proyecto
        </p>
      </div>
      <div className="quotes"></div>
    </section>
  );
}
