import React, { useState } from "react";
import { Wrapper, Image, IconsGroup } from "./Navbar.styles";
import { Search } from "../../components/search/Search";
import { Toggler } from "../../ui/components/toggler/Toggler";
import { BiCartAlt, BiMenu, BiUser } from "react-icons/bi";
const logo = require("../../ui/assets/Shooting game.png");

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <Wrapper>
      <div>
        <Image src={logo} />
        <Search />
        <IconsGroup>
          <Toggler active={active} handleClick={handleClick} />
          <BiCartAlt size={30} />
          <BiMenu size={30} />
          <BiUser size={30} />
        </IconsGroup>
      </div>
    </Wrapper>
  );
};
