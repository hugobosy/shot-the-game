import { Dispatch, SetStateAction } from "react";

export interface MenuTypes {
  active: boolean;
  setMenuActive: Dispatch<SetStateAction<boolean>>;
}
