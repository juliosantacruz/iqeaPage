import React from "react";
import "./Servicios.scss";
import aguaPotableIcon from "@/assets/icons/tratamientoAguaPotable.svg";
import aguaResidualIcon from "@/assets/icons/tratamientoAguaResidual.svg";
import estudiosIcon from "@/assets/icons/estudiosIngenieria.svg";
import Image from "next/image";

import imgH1 from "@/assets/servicios/ImgHt1.jpg";
import imgH2 from "@/assets/servicios/ImgHt2.jpg";
import imgV1 from "@/assets/servicios/ImgVt1.jpeg";
import imgV2 from "@/assets/servicios/ImgVt2.jpg";

export default function Servicios() {
  return (
    <section className="serviciosIqea">
      <div className="serviciosAccent">
        <div className="serviciosHeader">
          <h2>NUESTROS SISTEMAS DE TRATAMIENTO</h2>
          <p>
            La principal especialidad de IQEA dentro del área de servicios son
            los proyectos “llave en mano” para el tratamiento de agua o aguas
            residuales. Para ello utilizamos combinaciones de tecnologías en la
            realización de proyectos maestros en conjunto para tratar el agua.
          </p>
        </div>
        <div className="serviciosBody">
          <div className="serviciosLeft">
            <div className="servicio">
              <div className="servicioIcon">
                <Image src={aguaPotableIcon} alt="icon" />
              </div>
              <div className="servicioContent">
                <h3>Tratamiento de Agura Potable</h3>
                <p>
                  Potabilización, Purificación, Filtración fina,
                  Ultrafiltración, Nanofiltración, Osmosis inversa.
                </p>
              </div>
            </div>
            <div className="servicio">
              <div className="servicioIcon">
                <Image src={aguaResidualIcon} alt="icon" />
              </div>
              <div className="servicioContent">
                <h3>Tratamiento Agua Residual</h3>
                <p>
                  Biofiltración, Lodos activados, Electrocoagulación,
                  Tratamiento fisicoquímico, agua pluvial y terciario.
                </p>
              </div>
            </div>
            <div className="servicio">
              <div className="servicioIcon">
                <Image src={estudiosIcon} alt="icon" />
              </div>
              <div className="servicioContent">
                <h3>Estudio de Ingenieria</h3>
                <p>
                  Riesgo e impacto ambiental, Uso de suelo, Tramites de conexión
                  y descargade agua, Optimización de recursos, Eficiencia de
                  procesos
                </p>
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
