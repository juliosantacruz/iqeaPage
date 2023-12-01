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
        const [error, setError]=useState(false)
          const handleImageError = (e:any) => {
            console.error(`Error loading image: ${e}`);
            setError( true)
          };

        const setUrl = (src:string, error:boolean)=>{
          if(!error){
            return src
          }
          if(error){
            return ImageNotFound
          }
        }

        return(
        <SwiperSlide key={image.id}>
          <div className="imgGallery">
            <Image
              src={setUrl(image.attributes.url, error) as string}
              layout="fill"
              onError={handleImageError}
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
