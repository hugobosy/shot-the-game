import React from "react";
import { Wrapper, Image } from "./Navbar.styles";
import { Search } from "../../components/search/Search";
const logo = require("../../ui/assets/Shooting game.png");

export const Navbar = () => {
  return (
    <Wrapper>
      <div>
        <Image src={logo} />
        <Search />
      </div>
    </Wrapper>
  );
};
