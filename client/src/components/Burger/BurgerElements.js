import styled from "styled-components";

export const BurgerContainer = styled.div`
  margin-right: auto;
  display: flex;
  margin-left: 0.5em;
  box-shadow: ${({ $isOpen }) => $isOpen && "0 0 0 0.3em"};
  cursor: pointer;
  border-radius: 0.5em;
  padding: 0.25em 0.75em;

  @media screen and (min-width: 821px) {
    display: none;
  }
`;
