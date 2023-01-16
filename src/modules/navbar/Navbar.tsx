import React, { useState } from "react";
import { Wrapper, Image, IconsGroup } from "./Navbar.styles";
import { Search } from "../../components/search/Search";
import { Toggler } from "../../ui/components/toggler/Toggler";
import { BiCartAlt, BiMenu, BiUser } from "react-icons/bi";
import useMediaQuery from "../../hooks/media-query";
const logo = require("../../ui/assets/Shooting game.png");

export const Navbar = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const media = useMediaQuery("(min-width: 768px");
  return (
    <Wrapper>
      <div>
        <Image src={logo} />
        <Search />
        <IconsGroup>
          <Toggler active={active} handleClick={handleClick} />
          <BiCartAlt size={media ? "3rem" : "2rem"} />
          <BiMenu size={media ? "3rem" : "2rem"} />
          <BiUser size={media ? "3rem" : "2rem"} />
        </IconsGroup>
      </div>
    </Wrapper>
  );
};
