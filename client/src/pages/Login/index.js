import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { FormContainer, Form, H2, SignupWrapper } from "./LoginElements";

import { TextField } from "../../components/MUI/TextField";
import { Button } from "../../components/MUI/Button";

export const Login = ({ setCurrentUser, theme }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;

    try {
      const response = await axios.post("http://localhost:8000/users/account", {
        email,
        password,
      });
      if (response) {
        console.log(response.data.user[0]);
        setCurrentUser(response.data.user);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <H2>Login to your account</H2>
          <TextField
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            sx={{
              // mb: 2,
              input: theme === "dark" && { color: "#ffffff" },
              label: theme === "dark" && { color: "#ffffff" },
              border: theme === "dark" && "1px solid #ffffff",
              //! TAKE OUT FOCUS FOR BOTH TEXT FIELDS
            }}
          />
          <TextField
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            sx={{
              border: theme === "dark" && "1px solid #ffffff",
              input: theme === "dark" && { color: "#ffffff" },
              label: theme === "dark" && { color: "#ffffff" },
            }}
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Form>
      </FormContainer>
      <SignupWrapper>
        Don't have an account? <Link to="/">Signup</Link>
      </SignupWrapper>
    </>
  );
};
