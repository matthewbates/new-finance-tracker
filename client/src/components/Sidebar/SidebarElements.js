import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;
  overflow: hidden;
  z-index: 2;
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
  background: ${({ theme }) => (theme === "light" ? "#ffffff" : "#212121")};
`;
