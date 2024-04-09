import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;

export const RightContainer = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
    background: #a9adc1;
  }
`;

export const RightHeroImg = styled.img`
  width: 250px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  width: 100%;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 50%;
    max-width: 550px;
  }
`;

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const SignupWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavLink = styled(Link)`
  color: ${({ theme }) => (theme === "light" ? "blue" : "#ffffff")};
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;
