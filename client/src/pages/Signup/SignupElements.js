import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignupContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const LeftHero = styled.div`
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

export const LeftHeroImg = styled.img`
  width: 250px;
`;

export const FormContainer = styled.div`
  /* display: flex;
  flex-direction: row; */
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
    /* width: 100%; */
    /* position: absolute;
    padding: 4rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: ${({ theme }) =>
      theme === "light" && "rgba(0, 0, 0, 0.1) 0 0 10px 5px"};
    border-radius: 0.5rem;
    max-width: 450px; */
  }
`;

export const H2 = styled.h2`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const SigninWrapper = styled.div`
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
