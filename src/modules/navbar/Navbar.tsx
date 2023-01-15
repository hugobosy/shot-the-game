import React, { useState } from "react";
import { Wrapper, Image, IconsGroup } from "./Navbar.styles";
import { Search } from "../../components/search/Search";
import { Toggler } from "../../ui/components/toggler/Toggler";
const logo = require("../../ui/assets/Shooting game.png");

export const Navbar = () => {
  const [active, setActive] = useState(true);
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
        </IconsGroup>
      </div>
    </Wrapper>
  );
};
