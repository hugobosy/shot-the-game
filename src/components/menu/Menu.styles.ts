import styled, { css } from "styled-components";
import { MenuTypes } from "./Menu.types";

export const Wrapper = styled.nav<Partial<MenuTypes>>`
  position: fixed;
  top: 0;
  ${({ active }) =>
    active
      ? css`
          right: -0.1rem;
        `
      : css`
          right: -30rem;
        `};
  display: flex;
  width: 30rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.primary};
  box-shadow: 0 0 20px -7px rgba(0, 0, 0, 1);
  transition: ${({ theme }) => theme.common.transition};
`;
