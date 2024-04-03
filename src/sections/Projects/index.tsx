"use client";
import React, { useState } from "react";
import "./Projects.scss";
import CardProject from "@/components/CardProject";
import { Slide, Slideshow } from "@/components/Slideshow";
import ButtonStyle from "@/components/ButtonStyle";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import ImageNotFound from "@/assets/Image-not-found.png";
import Image from "next/image";

export default function Projects({ projectsData }: any) {
  // console.log(projectsData)
  return (
    <section className="projectsIqea">
      <div className="projectsAccent">
        <div className="headerProjects centerDiv">
          <h2>PROYECTOS IQEA</h2>
          <p>
          Cada proyecto se adapta a las necesidades específicas de la región y se ejecuta con una visión de sostenibilidad a largo plazo. Nuestra experiencia abarca desde tecnologías avanzadas de filtración hasta métodos de tratamiento de última generación, asegurando que cada solución sea eficiente, efectiva y respetuosa con el medio ambiente.
          </p>
        </div>

        <div className="bodyProjects ">
          <Swiper
            breakpoints={{
              // when window width is >= 640px
              320: {
                width: 320,
                slidesPerView: 1.1,
              },
              // when window width is >= 640px
              640: {
                width: 640,
                slidesPerView: 1.6,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 2,
              },
              // when window width is >= 1240px
              1240: {
                width: 1240,
                slidesPerView: 3.3,
              },
            }}
            // modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            // onSlideChange={() => console.log("slide change")}
            // onSwiper={(swiper) => console.log(swiper)}
          >
            {projectsData?.map((image: any) => {


              return (
                <SwiperSlide key={image.id}>
                  <CardProject leProject={image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <ButtonStyle>
          <Link
            href={"/proyectos"}
            style={{ maxWidth: "200px", margin: "30px 0" }}
          >
            Ver mas...
          </Link>
        </ButtonStyle>
      </div>
    </section>
  );
}
