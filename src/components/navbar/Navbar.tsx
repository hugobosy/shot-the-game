import React, { useState } from "react";
import {
  Wrapper,
  Image,
  IconsGroup,
  BiCartAlts,
  BiMenus,
  BiUsers,
} from "./Navbar.styles";
import { Search } from "../search/Search";
import { Toggler } from "../../ui/components/toggler/Toggler";
import useMediaQuery from "../../hooks/media-query";
import { NavbarTypes } from "./Navbar.types";
const logo = require("../../ui/assets/Shooting game.png");

export const Navbar: React.FC<NavbarTypes> = ({ setMenuActive }) => {
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
          <BiCartAlts size={media ? "3rem" : "2rem"} />
          <BiMenus
            size={media ? "3rem" : "2rem"}
            onClick={() => setMenuActive(true)}
          />
          <BiUsers size={media ? "3rem" : "2rem"} />
        </IconsGroup>
      </div>
    </Wrapper>
  );
};
