import styled, { css } from "styled-components";
import { MenuUserTypes } from "./MenuUser.types";

export const Wrapper = styled.div<Partial<MenuUserTypes>>`
  position: absolute;
  top: 150%;
  left: 0;
  display: flex;
  flex-direction: column;
  //align-items: center;
  width: 100%;
  ${({ activeMenuUser }) =>
    activeMenuUser
      ? css`
          transform: scaleY(1);
        `
      : css`
          transform: scaleY(0);
        `}
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 8px;
  box-shadow: 0 5px 10px 2px rgba(0, 0, 0, 0.1);
  transition: ${({ theme }) => theme.common.transition};
`;

export const Link = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.3rem;
  font-family: Verdana, sans-serif;
  color: ${({ theme }) => theme.color.dark};
  transition: ${({ theme }) => theme.common.transition};

  ${({ theme }) => theme.media.lg} {
    font-size: 1.6rem;
  }

  &:hover {
    background-color: #eef;
  }
`;
