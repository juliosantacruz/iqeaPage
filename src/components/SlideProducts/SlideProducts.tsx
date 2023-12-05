"use client";
import React from "react";
import CardProduct from "@/components/CardProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SlideProducts.scss";
// Import Swiper styles
import "swiper/css";

export default function SlideProducts({ productData }: any) {
  return (
    <>
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
        {productData.length > 0 &&
          productData.map((product: any) => {
            return (
              <SwiperSlide key={product.id}>
                <div className="">
                  <CardProduct productData={product} />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </>
  );
}
