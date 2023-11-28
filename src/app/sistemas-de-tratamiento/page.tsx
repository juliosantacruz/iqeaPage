import React from "react";
import "./SistemasDeTratamiento.scss";
import { getSistemasTratamiento } from "@/services/fetchData";
import Link from "next/link";
import CallToActionBanner from "@/components/CallToActionBanner";
import imgH1 from "@/assets/servicios/ImgHt1.jpg";
import imgH2 from "@/assets/servicios/ImgHt2.jpg";
import imgV1 from "@/assets/servicios/ImgVt1.jpeg";
import imgV2 from "@/assets/servicios/ImgVt2.jpg";
import Image from "next/image";

export default async function page() {
  const data = await getSistemasTratamiento();

  const arrSistemas = data.map((element: any) => {
    const newData = {
      id: element.id,
      title: element.attributes.titulo,
      slug: element.attributes.slug,
      description: element.attributes.descripcion,
    };
    return newData;
  });

  const clampText = (text: string, numCaracteres: number) => {
    return text.slice(3, numCaracteres).concat("... ver mas");
  };

  return (
    <section className="SistemasDeTratamientoPage">
      <div className="pageTitle">
        <h1>Sistemas de tratamiento IQEA</h1>
      </div>
      <div className="sistemasContent">
        <div className="SistemasList">
          {arrSistemas.length > 0
            ? arrSistemas.map((element: any) => {

                return (
                  <Link
                    key={element.id}
                    href={`/sistemas-de-tratamiento/${element.slug}`}
                    className="servicioCard"
                  >
                    <article>
                      <h3>{element.title}</h3>

                      {/* <div className="descripcion"
                          dangerouslySetInnerHTML={{
                            __html: element.description,
                          }}
                        /> */}
                      {clampText(element.description, 200)}
                    </article>
                  </Link>
                );
              })
            : null}
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
      <CallToActionBanner />
    </section>
  );
}
