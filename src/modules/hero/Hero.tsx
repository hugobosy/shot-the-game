import React from "react";
import { Wrapper } from "./Hero.styles";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Container } from "../../ui/components/container/Container";

export const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <Swiper slidesPerView={1} spaceBetween={50}>
          <SwiperSlide>Slide1</SwiperSlide>
        </Swiper>
      </Container>
    </Wrapper>
  );
};
