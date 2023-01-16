import React from "react";
import { ExitMenu, Wrapper } from "./Menu.styles";
import { MenuTypes } from "./Menu.types";

export const Menu: React.FC<MenuTypes> = ({ active, setMenuActive }) => {
  return (
    <Wrapper active={active}>
      <ExitMenu onClick={() => setMenuActive(false)} />
    </Wrapper>
  );
};
