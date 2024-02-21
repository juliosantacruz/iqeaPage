import React from "react";
import "./AboutUs.scss";
import Image from "next/image";
import imgSample from "@/assets/samples/Sample4.jpeg";
import ButtonStyle from "@/components/ButtonStyle";
import Link from "next/link";
import {useTranslations} from 'next-intl';

export default function AboutUs() {
  const t = useTranslations('Home');

  return (
    <section className="aboutUsIqea">
      <div className="content">
        <h2>{t('AboutUsTitle')}</h2>
        <p>{t('AboutUsContent')}</p>
        <ButtonStyle >
          <Link href={'cotiza'} >{t('AboutUsBtn')}</Link>

        </ButtonStyle>
      </div>
      <div className="carrusel  ">
        <Image src={imgSample} alt="equipo IQEA" />
      </div>
    </section>
  );
}
