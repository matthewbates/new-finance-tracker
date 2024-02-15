import styled from "styled-components";

export const AccessibilityMenuContainer = styled.div`
  position: absolute;
  display: ${({ accessibility }) => (accessibility ? "flex" : "none")};
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => (theme === "light" ? "#ffffff" : "#212121")};
`;
