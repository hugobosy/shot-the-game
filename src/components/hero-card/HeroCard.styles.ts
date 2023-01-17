import styled, { css } from "styled-components";
import { HeroCardTypes } from "./HeroCard.types";

export const Wrapper = styled.div<Partial<HeroCardTypes>>`
  width: 100%;
  height: 50rem;
  padding: 3rem;
  ${({ image }) =>
    image &&
    css`
      background: url(${image}) 50%;
      background-size: cover;
    `};
  border-radius: 3rem;
  cursor: pointer;
`;

export const Heading = styled.h1``;
export const Paragraph = styled.p``;
export const Btn = styled.button``;
