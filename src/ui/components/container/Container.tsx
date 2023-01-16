import React from "react";
import { Wrapper } from "./Container.styles";
import { ContainerTypes } from "./Container.types";

export const Container: React.FC<ContainerTypes> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
