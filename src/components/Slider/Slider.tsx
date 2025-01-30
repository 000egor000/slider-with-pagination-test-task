"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import {Slide} from "../Slide";
import { slidesData } from "./const";

import "swiper/css";
import "swiper/css/pagination";
import "./paginationCustom.css";

const Slider: React.FC = () => {
  return (
    <div className="w-full">
      <div className="custom-pagination mb- sm:hidden text-left m-3 ml-0"></div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination]}
        grabCursor={true}
      >
        {slidesData.map((el) => (
          <SwiperSlide key={el.title}>
            <Slide {...el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
