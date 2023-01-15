import React from "react";
import { TogglerBtn } from "./Toggler.styles";
import { TogglerTypes } from "./Toggler.types";

export const Toggler: React.FC<TogglerTypes> = ({ active, handleClick }) => {
  return (
    <TogglerBtn active={active} onClick={() => handleClick()}></TogglerBtn>
  );
};
