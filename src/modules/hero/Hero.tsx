import React from "react";
import { Wrapper } from "./Hero.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Hero = () => {
  return (
    <Wrapper>
      <Swiper slidesPerView={1} spaceBetween={50}>
        <SwiperSlide>Slide1</SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
