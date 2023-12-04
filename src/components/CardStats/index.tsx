import React from "react";
import Image from "next/image";

import "./CardStats.scss";
import { Slide, Slideshow } from "../Slideshow";

export default function CardStats({ arrData }: any) {
  const image = arrData[0].image;
  return (
    <article className="statsCard">
      <div className="image">
        <Image src={image} alt="stats" height={120} width={120} />
      </div>
      <Slideshow autoplay={true} controls={false}   transitionTime={3000} >
        {arrData &&
          arrData.map((data: any) => {
            const title = data.title;
            const subtitle = data.subtitle;
            return (
              <Slide key={data.id}>
                <>
                  <div className="title">
                    <h2>{title}</h2>
                  </div>
                  <div className="subtitle">
                    <p>{subtitle}</p>
                  </div>
                </>
              </Slide>
            );
          })}
      </Slideshow>
    </article>
  );
}
