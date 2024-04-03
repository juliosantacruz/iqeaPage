"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import './SlideGallery.scss'
// Import Swiper styles
import "swiper/css";
import Image from "next/image";
import ImageNotFound from '@/assets/Image-not-found.png'

export default function SlideGallery({ imageArr }: any) {




  return (
    <Swiper
      breakpoints={{
        // when window width is >= 640px
        320: {
          width: 320,
          slidesPerView: 1,
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
      {imageArr?.map((image:any) => {


        return(
        <SwiperSlide key={image.id}>
          <div className="imgGallery">
            <Image
              src={ image.attributes.url}
              layout="fill"

              alt={
                image.attributes.alternativeText
                  ? image.attributes.alternativeText
                  : "galeria"
              }
            />
          </div>
        </SwiperSlide>
      )})}
    </Swiper>
  );
}
