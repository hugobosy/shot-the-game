import React from "react";
import { SearchButton, SearchInput, Wrapper } from "./Search.styles";
import { SearchIcon } from "../../ui/components/icon/search";

export const Search = () => {
  const handleSearch = () => {};
  return (
    <Wrapper>
      <SearchInput type="search" onSubmit={handleSearch} />
      <SearchButton onClick={handleSearch}>
        <SearchIcon />
      </SearchButton>
    </Wrapper>
  );
};
