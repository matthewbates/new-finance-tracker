import { Squash as Hamburger } from "hamburger-react";

import { BurgerContainer } from "./BurgerElements";

export const Burger = ({ isOpen, toggleSidebar, theme }) => {
  return (
    <BurgerContainer>
      <Hamburger
        toggled={isOpen}
        toggle={toggleSidebar}
        size={28}
        color={theme === "light" ? "#263238" : "#ffffff"}
      />
    </BurgerContainer>
  );
};
