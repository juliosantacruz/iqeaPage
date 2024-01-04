"use client";
import React from "react";
import "./HeroVideo.scss";
import video from "@/assets/video/videoTest1_b.mp4";
import Image from "next/image";
import iqeaLogo from "@/assets/iqea_logo.png";


export default function HeroVideo() {
  return (
    <section id="parent-container" className="HeroVideo" style={{zIndex:'100'}}>
      <video src={video} autoPlay muted loop className="videoBG" />
      <div className="heroData" >
        <div className="title">
          <Image src={iqeaLogo as any} alt="logo" className={"imgHero"} />
          <h2>Ingenieria</h2>
        </div>
          <p>
            Limpiamos el planeta, tenemos experiencia diseñando y construyendo
            sistemas de tratamiento de agua y procesos, resolviendo los retos
            más complejos. Contamos con un portafolio de soluciones concretas
            para tu proyecto.
          </p>
      </div>
    </section>
  );
}
