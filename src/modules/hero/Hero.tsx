import React from "react";
import Slider from "react-slick";
import { HeroCard } from "../../components/hero-card/HeroCard";
import { Container } from "../../ui/components/container/Container";
import { Wrapper } from "./Hero.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Hero = () => {
  const setting = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <Container>
        <Slider {...setting}>
          <HeroCard image="https://cdn.pixabay.com/photo/2019/12/09/04/04/call-of-duty-4682628_1280.jpg" />
          <HeroCard image="https://cdn.pixabay.com/photo/2017/08/13/17/04/way-2637813_1280.jpg" />
        </Slider>
      </Container>
    </Wrapper>
  );
};
