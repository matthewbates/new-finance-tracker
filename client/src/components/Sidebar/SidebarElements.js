import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: absolute;
  top: 80px;
  height: ${({ $isOpen }) => ($isOpen ? "9em" : "0")};
  width: 100%;
  transition: 0.3s linear;
  overflow: hidden;
  border-bottom: ${({ $isOpen }) => $isOpen && "1px solid #000000"};
`;

export const SidebarItems = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-family: "Roboto";

  p {
    padding: 1em;
    height: 1em;

    &:hover {
      background: #ddd;
    }
    &:nth-child(2) {
      border-top: 1px solid #000000;
    }
    &:nth-child(3) {
      border-top: 1px solid #000000;
    }
  }
`;
