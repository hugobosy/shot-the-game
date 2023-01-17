import styled, { css } from "styled-components";
import { HeroCardTypes } from "./HeroCard.types";

export const Wrapper = styled.div<Partial<HeroCardTypes>>`
  width: 100%;
  height: 400px;
  ${({ image }) =>
    image &&
    css`
      background: url(${image});
      background-size: cover;
    `};
`;
