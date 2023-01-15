import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;

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
