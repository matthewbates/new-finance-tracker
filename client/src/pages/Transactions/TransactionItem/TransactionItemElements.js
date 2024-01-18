import styled from "styled-components";

export const TransactionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  cursor: pointer;
  padding: 1em;

  /* &:hover {
    background: #ddd;
  } */

  @media screen and (min-width: 768px) {
    max-width: 75%;
  }
`;

export const TransactionName = styled.div``;

export const TransactionDate = styled.div``;

export const TransactionAmount = styled.div``;
