import { Squash as Hamburger } from "hamburger-react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { BurgerContainer } from "./BurgerElements";

export const Burger = ({ isOpen, toggleSidebar, theme }) => {
  return (
    <BurgerContainer theme={theme} $isOpen={isOpen} onClick={toggleSidebar}>
      <DragHandleIcon fontSize="medium" />
    </BurgerContainer>
  );
};
