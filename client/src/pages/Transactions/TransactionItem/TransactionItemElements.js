import styled from "styled-components";

export const TransactionItemContainer = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* width: 100%; */
`;

export const TransactionItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

export const TransactionName = styled.div``;

export const TransactionAmount = styled.div``;

export const TransactionDate = styled.div``;
