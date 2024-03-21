import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { InputAdornment, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

import {
  FormContainer,
  Form,
  H2,
  SigninWrapper,
  NavLink,
  ValidatedWrapper,
  P,
} from "./SignupElements";

import { TextField } from "../../components/MUI/TextField";
import { Button } from "../../components/MUI/Button";
import { Tooltip } from "../../components/MUI/Tooltip";
import { Snackbar } from "../../components/MUI/Snackbar";
import { togglePassword } from "../../utils/login/helpers";
import { handleChange } from "../../utils/login/helpers";
import { testPasswordStrength } from "../../utils/signup/helpers";
import { Validated } from "../../components/Validated";

export const Signup = ({ theme, setCurrentUser }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm: "",
  });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [validated, setValidated] = useState({});
  const navigate = useNavigate();

  const handleValidated = () => {
    setValidated(true);
  };

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
        const user = response.data.user;
        setCurrentUser(user);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(user));
      }
    } catch (err) {
      setOpen(true);
      setMessage(err.response.data.message);
      setTimeout(() => setOpen(false), 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    testPasswordStrength({ ...formData, [name]: value }, setValidated);
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit} theme={theme}>
          <H2>Create your account</H2>
          <TextField
            onChange={handleChange}
            label="Email"
            name="email"
            sx={{
              input: theme === "dark" && { color: "#ffffff" },
              label: theme === "dark" && { color: "#ffffff" },
              border: theme === "dark" && { border: "1px solid #ffffff" },
            }}
          />
          <TextField
            onChange={handleChange}
            label="Password"
            name="password"
            type="password"
            sx={{
              input: theme === "dark" && { color: "#ffffff" },
              label: theme === "dark" && { color: "#ffffff" },
              border: theme === "dark" && { border: "1px solid #ffffff" },
            }}
          />
          <TextField
            onChange={handleChange}
            label="Confirm password"
            name="confirm"
            type="password"
            sx={{
              input: theme === "dark" && { color: "#ffffff" },
              label: theme === "dark" && { color: "#ffffff" },
              border: theme === "dark" && { border: "1px solid #ffffff" },
            }}
          />
          <Button type="submit" variant="contained">
            Sign up
          </Button>
          <SigninWrapper>
            <p>
              Already have an account? <NavLink to="/login">Login</NavLink>
            </p>
          </SigninWrapper>
          <Validated theme={theme} validated={validated} />
        </Form>
      </FormContainer>

      <Snackbar
        open={open}
        severity="error"
        sx={{ width: "100%" }}
        message={message}
      />
    </>
  );
};
