import React from "react";
import { HeroCardTypes } from "./HeroCard.types";
import { Btn, Heading, Paragraph, Wrapper } from "./HeroCard.styles";

export const HeroCard: React.FC<HeroCardTypes> = ({
  image,
  heading,
  description,
  link,
}) => {
  return (
    <Wrapper image={image}>
      {heading && <Heading>{heading}</Heading>}
      {description && <Paragraph>{description}</Paragraph>}
      {link && <Btn>{link}</Btn>}
    </Wrapper>
  );
};
