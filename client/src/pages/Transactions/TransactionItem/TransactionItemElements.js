import styled from "styled-components";

export const TransactionContainer = styled.div`
  padding: 1rem;
`;

export const TransactionItems = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  /* display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1em;
  font-size: 16px; */

  &:nth-child(odd) {
    background: ${({ theme }) => theme === "dark" && "#212121"};
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    /* justify-content: space-evenly; */
  }
`;

export const TransactionName = styled.div``;

export const TransactionDate = styled.div``;

export const TransactionAmount = styled.div``;
