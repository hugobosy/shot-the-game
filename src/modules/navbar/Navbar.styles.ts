import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 100px;
    width: 100%;
    max-width: ${({ theme }) => theme.common.maxWidth};
    margin: 0 auto;
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
  width: 20rem;
`;

export const IconsGroup = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1rem;
`;
