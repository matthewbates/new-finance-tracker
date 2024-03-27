import styled from "styled-components";

export const ValidatedItems = styled.div`
  /* position: fixed;
  bottom: 1rem; */
`;

export const ValidatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #a9adc1;
  padding: 1rem;
  border-radius: 0.5rem;
  /* bottom: 10px;
  position: fixed; */
`;

export const ValidatedWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const P = styled.p`
  display: flex;
  flex-direction: column;
  text-decoration: ${({ validated }) => (validated ? "line-through" : null)};
  color: ${({ validated }) => validated && "lightgray"};
`;
