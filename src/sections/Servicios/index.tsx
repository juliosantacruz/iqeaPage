import React from "react";
import "./Servicios.scss";
import aguaPotableIcon from "@/assets/icons/tratamientoAguaPotable.svg";
// import AguaResidualIcon from "@/assets/icons/wastewater.svg";
import Wastewater from '@/assets/icons/wastewater'
import estudiosIcon from "@/assets/icons/estudiosIngenieria.svg";
import Image from "next/image";

import imgH1 from "@/assets/servicios/ImgHt1.jpg";
import imgH2 from "@/assets/servicios/ImgHt2.jpg";
import imgV1 from "@/assets/samples/Sample3.jpeg";
import imgV2 from "@/assets/servicios/ImgVt2.jpg";
import Drinkingwater from "@/assets/icons/drinkingwater";
import Engineeringstudys from "@/assets/icons/engineeringstudys";
import initTranslations from "@/app/i18n";

export default async function Servicios({t}:any) {

  return (
    <section className="serviciosIqea">
      <div className="serviciosAccent">
        <div className="serviciosHeader">
          <h2>{t('ServiciosTitle')}</h2>
          <p>{t('ServiciosParagraph')}</p>
        </div>
        <div className="serviciosBody">
          <div className="serviciosLeft">
            <div className="servicio">
              <div className="servicioIcon">
                {/* <Image src={aguaPotableIcon} alt="icon" /> */}
                <Drinkingwater className="servicioIcon" />
              </div>
              <div className="servicioContent">
                <h3>{t('ServiciosCard1Title')}</h3>
                <p>{t('ServiciosCard1Content')}</p>
              </div>
            </div>
            <div className="servicio">
              <div className="servicioIcon">
                {/* <Image src={aguaResidualIcon} alt="icon" /> */}
                <Wastewater className="servicioIcon"/>
              </div>
              <div className="servicioContent">
                <h3>{t('ServiciosCard2Title')}</h3>
                <p>{t('ServiciosCard2Content')}</p>
              </div>
            </div>
            <div className="servicio">
              <div className="servicioIcon">
                {/* <Image src={estudiosIcon} alt="icon" /> */}
              <Engineeringstudys className='servicioIcon' />
              </div>
              <div className="servicioContent">
                <h3>{t('ServiciosCard3Title')}</h3>
                <p>{t('ServiciosCard3Content')}</p>
              </div>
            </div>
          </div>

          <div className="serviciosRight">
            <div className="galleryColumn">
              <div className="imageA">
                <Image src={imgH1} alt="galleryImage" />
              </div>
              <div className="imageB">
                <Image src={imgV1} alt="galleryImage" />
              </div>
            </div>
            <div className="galleryColumn">
              <div className="imageB">
                <Image src={imgH2} alt="galleryImage" />
              </div>
              <div className="imageA">
                <Image src={imgV2} alt="galleryImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
