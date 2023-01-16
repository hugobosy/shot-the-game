import React from "react";
import { Link, Wrapper } from "./MenuUser.styles";
import { linkUser } from "../../data/linkUser";
import { MenuUserTypes } from "./MenuUser.types";

export const MenuUser: React.FC<MenuUserTypes> = ({ activeMenuUser }) => {
  return (
    <Wrapper activeMenuUser={activeMenuUser}>
      {linkUser.map((item) => (
        <Link href={item.href}>
          <span>{item.icon}</span>
          {item.name}
        </Link>
      ))}
    </Wrapper>
  );
};
