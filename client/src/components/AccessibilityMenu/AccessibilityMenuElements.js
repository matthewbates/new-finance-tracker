import styled from "styled-components";

export const AccessibilityMenuContainer = styled.div`
  position: absolute;
  display: ${({ accessibility }) => (accessibility ? "flex" : "none")};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-width: 350px;
  background: ${({ theme }) => (theme === "light" ? "#ffffff" : "#212121")};
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
`;

export const AccessibilityMenuHeader = styled.div``;
