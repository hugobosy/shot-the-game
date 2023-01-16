import React, { useState } from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Menu } from "../../components/menu/Menu";

export const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header>
      <Navbar setMenuActive={setMenuActive} />
      <Menu active={menuActive} setMenuActive={setMenuActive} />
    </header>
  );
};
