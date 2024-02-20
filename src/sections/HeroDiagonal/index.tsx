import React from "react";
import "./HeroDiagonal.scss";
import imgBackground from "@/assets/samples/Sample3.jpeg";
import {useTranslations} from 'next-intl';


export default function HeroDiagonal() {
  const t = useTranslations('Home');
  const bgImage = {
    backgroundImage: `url(${imgBackground.src})`,
    backgroundAttachment: "fixed",
  };
  return (
    <section className="heroSection" style={bgImage}>
      <div className="sandwich">
          <div className="heroCopy">
            <h1>{t('HeroTitle')}</h1>
            <p>{t('HeroParagraph')}</p>
          </div>
        <div className="diagonalSup3">
        </div>

        <div className="diagonalSup2" />
        <div className="diagonalSup1" />
        <div className="diagonalInf3" />
        <div className="diagonalInf2" />
        <div className="diagonalInf1" />

      </div>
    </section>
  );
}
