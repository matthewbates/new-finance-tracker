import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  overflow: hidden;
  border-bottom: ${({ $isOpen }) => $isOpen && "1px solid #a9adc1"};
  z-index: 10;
`;

export const SidebarItems = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  transition: 0.3s linear;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  padding: 1.25em;
  flex-direction: column;
  text-decoration: none;
  background: #ffffff;
  /* background: ${({ theme }) =>
    theme === "light" ? "" : "rgba(255, 255, 255, 0.12)"}; */
  color: #000000;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #ddd;
  }

  &:nth-child(2) {
    border-top: 1px solid #a9adc1;
  }
`;
