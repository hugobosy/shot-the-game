import styled from "styled-components";
import { BiCartAlt, BiMenu, BiUser } from "react-icons/bi";

export const Wrapper = styled.div`
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 2rem;
    width: 100%;
    padding: 1rem;
    max-width: ${({ theme }) => theme.common.maxWidth};
    margin: 0 auto;

    ${({ theme }) => theme.media.md} {
      column-gap: 10rem;
      padding: 0;
    }
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      #eff 0%,
      #ddd 30%,
      #ccc 50%,
      #ddd 70%,
      #eff 100%
    );
  }
`;

export const Image = styled.img`
  width: 10rem;
  padding: 10px;

  ${({ theme }) => theme.media.md} {
    width: 15rem;
  }

  ${({ theme }) => theme.media.lg} {
    width: 20rem;
  }
`;

export const IconsGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;

export const BiCartAlts = styled(BiCartAlt)`
  cursor: pointer;
  transition: ${({ theme }) => theme.common.transition};
  &:hover {
    fill: ${({ theme }) => theme.color.accent};
  }
`;

export const BiMenus = styled(BiMenu)`
  cursor: pointer;
  transition: ${({ theme }) => theme.common.transition};
  &:hover {
    fill: ${({ theme }) => theme.color.accent};
  }
`;

export const BiUsers = styled(BiUser)`
  cursor: pointer;
  transition: ${({ theme }) => theme.common.transition};
  &:hover {
    fill: ${({ theme }) => theme.color.accent};
  }
`;
