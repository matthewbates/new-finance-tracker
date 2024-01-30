import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25em;
  color: ${({ theme }) => (theme === "light" ? "rgb(36, 51, 90)" : "#ffffff")};
  text-decoration: none;
  cursor: pointer;
  border-bottom: 1px solid rgb(213, 220, 234);
`;
