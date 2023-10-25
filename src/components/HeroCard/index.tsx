'use client'
import React, { useEffect, useState } from 'react'
import { StaticImageData } from "next/image";
import hero1 from "@/assets/hero/heroImage1-min.jpg";
import hero2 from "@/assets/hero/heroImage2-min.jpg";
import hero3 from "@/assets/hero/heroImage3-min.jpg";
import hero4 from "@/assets/hero/heroImage4-min.jpg";
import hero5 from "@/assets/hero/heroImage5-min.jpg";
import './HeroCard.scss'
 
type HeroData= { id: number; image: StaticImageData; title: string; description: string };
type PropsHeroCard = {
    HeroData:HeroData
};

 



export default function HeroCard({ HeroData }: PropsHeroCard)  {
 
   
 
    const bgImage = { backgroundImage: `url(${HeroData.image.src})`}
    return (
      <div className="HeroCard" style={bgImage}>
        <div className="HeroInfo">
          <h3>{HeroData.title}</h3>
          <p>{HeroData.description}</p>
        </div>
      </div>
    );
  };


 