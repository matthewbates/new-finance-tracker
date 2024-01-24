import styled from "styled-components";

export const TransactionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  cursor: pointer;
  padding: 1em;
  border-bottom: 1px solid #121212;
  font-size: 14px;

  &:nth-child(odd) {
    background: ${({ theme }) => (theme === "light" ? null : "#212121")};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 768px) {
    max-width: 75%;
  }
`;

export const TransactionName = styled.div``;

export const TransactionDate = styled.div``;

export const TransactionAmount = styled.div`
  font-weight: bold;
`;
