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

export const ExitMenu = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.color.light};
  }
  &::before {
    rotate: 45deg;
  }
  &::after {
    rotate: -45deg;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Link = styled.a`
  display: block;
  color: ${({ theme }) => theme.color.light};
  padding: 1rem 3rem;
  border-radius: 10rem;
  width: 20rem;
  text-align: center;
  font-family: Verdana, sans-serif;
  font-size: 1.6rem;
  letter-spacing: 1.6px;

  &:hover {
    background-color: ${({ theme }) => theme.color.hover};
  }
`;
