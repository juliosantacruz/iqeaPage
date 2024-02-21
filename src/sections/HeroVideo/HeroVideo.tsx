"use client";
import React from "react";
import "./HeroVideo.scss";
import video from "@/assets/video/videoTest1_b.mp4";
import Image from "next/image";
import iqeaLogo from "@/assets/iqea_logo.png";
import { useTranslations } from "next-intl";


export default function HeroVideo() {
  const t = useTranslations('Home');

  return (
    <section id="parent-container" className="HeroVideo" style={{zIndex:'100'}}>
      <video src={video} autoPlay muted loop className="videoBG" />
      <div className="heroData" >
        <div className="title">
          {/* <Image src={iqeaLogo as any} alt="logo" className={"imgHero"} /> */}
          {/* <h2>Ingenieria</h2> */}
          <h1>{t('HeroTitle')}</h1>
        </div>
            <p>{t('HeroParagraph')}</p>
      </div>
    </section>
  );
}
