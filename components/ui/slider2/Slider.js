"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import Image from "next/image";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  const imgages = [
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/skyez-db5d6.appspot.com/o/WhatsApp_Image_2024-02-24_at_22.49.40_e64065bd_vvrenq.jpeg?alt=media&token=2d771eca-1994-4234-969c-8e00cc02619b",
    },
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/skyez-db5d6.appspot.com/o/2_afzwev.png?alt=media&token=235afaea-0e95-43d8-a969-a8f57d825d31",
    },
   
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/skyez-db5d6.appspot.com/o/WhatsApp_Image_2024-02-24_at_22.46.34_7c586e27_rwz3zu.jpeg?alt=media&token=b8adb538-1300-49fa-8447-d7c5b3e4685f",
    },
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/skyez-db5d6.appspot.com/o/WhatsApp_Image_2024-02-24_at_22.49.38_30224c40_excvk1.jpeg?alt=media&token=254dfe8a-2765-4c85-86ee-434343f82b72",
    },
    {
      imgUrl:
      "https://firebasestorage.googleapis.com/v0/b/skyez-db5d6.appspot.com/o/WhatsApp_Image_2024-02-24_at_22.49.38_428d50f3_jk7usg.jpeg?alt=media&token=914949f2-2edf-4d3a-9e5d-2cceef569291",
    },
    {
      imgUrl:
        "https://firebasestorage.googleapis.com/v0/b/skyez-db5d6.appspot.com/o/WhatsApp_Image_2024-02-24_at_22.49.38_30224c40_excvk1.jpeg?alt=media&token=254dfe8a-2765-4c85-86ee-434343f82b72",
    },
   


  ];
  return (
    <div className="p-0  h-[50vh]  sm:h-[88vh]" id="partners">
   
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        freeMode={true}
      
        loop={true}
        autoplay={{
          delay: 2000, // 1000 milliseconds = 1 second
          disableOnInteraction: false, // Autoplay will not be disabled after interaction (like clicking on pagination)
        }}
        modules={[Autoplay, Pagination, Navigation]}
      
      >
        {imgages.map((img,index) => (
          <SwiperSlide key={index}>
            <div className="w-[100%]   h-[50vh]  sm:h-[88vh] flex justify-center items-center bg-white ">
              <Image
               className="w-[100%] h-[100%] m-0   rounded-br-[100px] sm:rounded-br-[200px]"
                alt="img"
                src={img.imgUrl}
                width={1000}
                height={1000}
              ></Image>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
