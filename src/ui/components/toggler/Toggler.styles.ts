import styled, { css } from "styled-components";
import { TogglerTypes } from "./Toggler.types";

export const TogglerBtn = styled.button<Partial<TogglerTypes>>`
  position: relative;
  background-color: #aaa;
  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.color.accent};
    `}
  width: 4rem;
  height: 2rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.4s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    ${({ active }) =>
      active
        ? css`
            left: 55%;
          `
        : css`
            left: 5%;
          `}
    width: 1.6rem;
    height: 1.6rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color.light};
    translate: 0 -50%;
    transition: 0.4s;
  }
`;
