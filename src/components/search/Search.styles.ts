import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;
export const SearchInput = styled.input`
  position: relative;
  display: none;
  width: 100%;
  padding: 1.35rem 1.23rem;
  border: 1px solid #eee;
  border-radius: 50px;
  &:focus {
    outline: none;
  }

  ${({ theme }) => theme.media.xs} {
    display: inline-block;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 0;
  translate: 0 -50%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  ${({ theme }) => theme.media.xs} {
    right: 3rem;
  }
`;
