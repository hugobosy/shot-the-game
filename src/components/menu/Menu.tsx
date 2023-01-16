import React from "react";
import { ExitMenu, Link, List, Wrapper } from "./Menu.styles";
import { MenuTypes } from "./Menu.types";
import { links } from "../../data/links";

export const Menu: React.FC<MenuTypes> = ({ active, setMenuActive }) => {
  return (
    <Wrapper active={active}>
      <ExitMenu onClick={() => setMenuActive(false)} />
      <List>
        {links.map((item) => (
          <li>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </List>
    </Wrapper>
  );
};
