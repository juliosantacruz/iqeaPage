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
  console.log(projectsData)
  return (
    <section className="projectsIqea">
      <div className="headerProjects centerDiv">
        <h2>PROYECTOS IQEA</h2>
        <p>
          Minim deserunt occaecat veniam anim eiusmod eu cupidatat anim eiusmod
          excepteur. Quis proident fugiat enim incididunt ut quis velit sint non
          non veniam eiusmod reprehenderit. Aliqua ipsum incididunt aliquip
          laboris sint deserunt elit tempor officia ex elit. Ullamco sit est in
          elit aliquip sit veniam quis veniam.
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
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            // when window width is >= 1240px
            1240: {
              width: 1240,
              slidesPerView: 2,
            },
          }}
          // modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {projectsData?.map((image: any) => {
            const [error, setError] = useState(false);
            const handleImageError = (e: any) => {
              console.error(`Error loading image: ${e}`);
              setError(true);
            };

            const setUrl = (src: string, error: boolean) => {
              if (!error) {
                return src;
              }
              if (error) {
                return ImageNotFound;
              }
            };

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
          style={{ maxWidth: "350px", margin: "30px 0" }}
        >
          Ver Mas...
        </Link>
      </ButtonStyle>
    </section>
  );
}
