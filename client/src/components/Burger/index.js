import { Squash as Hamburger } from "hamburger-react";

import { BurgerContainer } from "./BurgerElements";

export const Burger = ({ isOpen, toggle }) => {
  return (
    <BurgerContainer>
      <Hamburger toggled={isOpen} toggle={toggle} size={28} />
    </BurgerContainer>
  );
};
