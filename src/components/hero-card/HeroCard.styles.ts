import styled, { css } from "styled-components";
import { HeroCardTypes } from "./HeroCard.types";

export const Wrapper = styled.div<Partial<HeroCardTypes>>`
  width: 100%;
  height: 50rem;
  ${({ image }) =>
    image &&
    css`
      background: url(${image}) 50%;
      background-size: cover;
    `};
`;
