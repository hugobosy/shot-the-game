import React from "react";
import { HeroCardTypes } from "./HeroCard.types";
import { Wrapper } from "./HeroCard.styles";

export const HeroCard: React.FC<HeroCardTypes> = ({ image }) => {
  return <Wrapper image={image}></Wrapper>;
};
