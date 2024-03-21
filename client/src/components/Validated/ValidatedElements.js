import styled from "styled-components";

export const ValidatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const ValidatedWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const P = styled.p`
  display: flex;
  flex-direction: column;
  letter-spacing: 0.05rem;
  text-decoration: ${({ validated }) => (validated ? "line-through" : null)};
  color: ${({ validated }) => validated && "lightgray"};
`;
