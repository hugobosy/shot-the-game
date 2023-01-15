import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;
export const SearchInput = styled.input`
  position: relative;
  width: 100%;
  padding: 1.35rem 1.23rem;
  border: 1px solid #eee;
  border-radius: 50px;
  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 30px;
  translate: 0 -44%;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
