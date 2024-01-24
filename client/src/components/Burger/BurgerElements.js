import styled from "styled-components";

export const BurgerContainer = styled.div`
  margin-right: auto;
  display: flex;
  margin-left: 1em;
  transition: 0.009s ease;
  /* border: ${({ theme, $isOpen }) =>
    $isOpen
      ? theme === "light"
        ? "3px solid #23272f"
        : "3px solid #f6f7f9"
      : theme === "light"
      ? "1px solid #23272f"
      : "1px solid #f6f7f9"};
  box-shadow: ${({ theme, $isOpen }) =>
    $isOpen
      ? theme === "light"
        ? "0 0 5px rgba(35, 39, 47, 0.5)"
        : "0 0 5px rgba(246, 247, 249, 0.5)"
      : "0 0 0 transparent"}; */
  border: ${({ theme, isOpen }) =>
    theme === "light" ? "2px solid #23272f" : "2px solid #f6f7f9"};
  cursor: pointer;
  border-radius: 0.5em;
  padding: 0.25em 0.75em;
`;
