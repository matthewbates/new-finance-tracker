import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #a9adc1;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => (theme === "light" ? "rgb(36, 51, 90)" : "#ffffff")};
`;

export const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 1.5em;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
