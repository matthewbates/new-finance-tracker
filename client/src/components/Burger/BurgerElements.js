import styled from "styled-components";

export const BurgerContainer = styled.div`
  margin-right: auto;
  display: flex;
  margin-left: 1em;
  /* border: ${({ theme }) =>
    theme === "light" ? "1px solid #a9adc1" : "2px solid #f6f7f9"}; */
  box-shadow: ${({ $isOpen }) => $isOpen && "0 0 0 0.3em"};
  cursor: pointer;
  border-radius: 0.5em;
  padding: 0.25em 0.75em;
`;
