"use client";
import React from "react";
import "./HeroVideo.scss";
import video from "@/assets/video/videoTest1_b.mp4";


export default function HeroVideo() {
  return (
    <section id="parent-container" className="HeroVideo" style={{zIndex:'100'}}>
      <video src={video} autoPlay muted loop className="videoBG" />
      <div className="heroData" >
      <div className="title">
        {/* <Image src={iqeaLogo as any} alt="logo" className={"imgHero"} /> */}
        {/* <h2>Ingenieria</h2> */}
        <h1>Diseño de sistema inteligente de tratamiento de agua.</h1>
      </div>
          <p>Realiza tus procesos con la pureza que requieren</p>
    </div>
    </section>
  );
}
