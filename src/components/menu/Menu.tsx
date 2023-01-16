import React from "react";
import { Wrapper } from "./Menu.styles";
import { MenuTypes } from "./Menu.types";

export const Menu: React.FC<MenuTypes> = ({ active }) => {
  return <Wrapper active={active}></Wrapper>;
};
