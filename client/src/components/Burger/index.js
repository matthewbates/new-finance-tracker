import { Squash as Hamburger } from "hamburger-react";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import { BurgerContainer } from "./BurgerElements";

export const Burger = ({ isOpen, toggleSidebar, theme }) => {
  return (
    <BurgerContainer theme={theme} $isOpen={isOpen} onClick={toggleSidebar}>
      {isOpen ? (
        <CloseIcon isOpen={isOpen} fontSize="medium" />
      ) : (
        <DragHandleIcon isOpen={isOpen} fontSize="medium" />
      )}
      {/* <DragHandleIcon
        sx={{
          cursor: "pointer",
          color: theme === "light" ? "#263238" : "#ffffff",
          border: "2px solid #ddd",
          borderRadius: "12px",
          padding: "0.25em",
        }}
        fontSize="medium"
        isOpen={isOpen}
        onClick={toggleSidebar}
      /> */}
    </BurgerContainer>
  );
};
