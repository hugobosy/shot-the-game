import React from "react";
import { Wrapper, Image } from "./Navbar.styles";
const logo = require("../../ui/assets/Shooting game.png");

export const Navbar = () => {
  return (
    <Wrapper>
      <Image src={logo} />
    </Wrapper>
  );
};
