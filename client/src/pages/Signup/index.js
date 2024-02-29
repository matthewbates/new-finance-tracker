import { useState, useEffect } from "react";

import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

import {
  FormContainer,
  Form,
  H2,
  SigninWrapper,
  NavLink,
} from "./SignupElements";

import { TextField } from "../../components/MUI/TextField";
import { Button } from "../../components/MUI/Button";
import { Tooltip } from "../../components/MUI/Tooltip";
import { togglePassword } from "../../utils/login/helpers";
import { handleChange } from "../../utils/login/helpers";

export const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = formData.email;
    const password = formData.password;
    const confirm = formData.confirm;

    try {
      const response = await axios.post("http://localhost:8000/users/signup", {
        email,
        password,
        confirm,
      });
      if (response) {
        console.log(response);
      }
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <H2>Create your account</H2>
        <TextField onChange={handleChange} label="Email" name="email" />
        <TextField
          onChange={handleChange}
          label="Password"
          name="password"
          type="password"
        />
        <TextField
          onChange={handleChange}
          label="Confirm password"
          name="confirm"
          type="password"
        />
        <Button type="submit" variant="contained">
          Sign up
        </Button>
        <SigninWrapper>
          <p>
            Already have an account? <NavLink to="/login">Login</NavLink>
          </p>
        </SigninWrapper>
      </Form>
    </FormContainer>
  );
};
