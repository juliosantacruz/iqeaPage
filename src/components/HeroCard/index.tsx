import React from "react";
import { StaticImageData } from "next/image";
import "./HeroCard.scss";

type HeroData = {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
};
type PropsHeroCard = {
  HeroData: HeroData;
};

export default function HeroCard({ HeroData }: PropsHeroCard) {
  const bgImage = {
    backgroundImage: `url(${HeroData.image.src})`,
    backgroundAttachment: "fixed",
  };
  return (
    <div className="HeroCard" style={bgImage}>
      <div className="HeroInfo">
        <h3>{HeroData.title}</h3>
        <p>{HeroData.description}</p>
      </div>
    </div>
  );
}
