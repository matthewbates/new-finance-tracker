import styled from "styled-components";

export const ValidatedWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const P = styled.p`
  display: flex;
  flex-direction: column;
  text-decoration: ${({ validated }) => validated && "line-through"};
  color: ${({ validated }) => validated && "lightgray"};
`;
