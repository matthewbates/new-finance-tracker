import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

import {
  LoginContainer,
  RightContainer,
  RightHeroImg,
  Form,
  H2,
  SignupWrapper,
  NavLink,
} from "./LoginElements";

import login from "../../assets/login.svg";

import { Tooltip } from "../../components/MUI/Tooltip";
import { TextField } from "../../components/MUI/TextField";
import { Button } from "../../components/MUI/Button";
import { Snackbar } from "../../components/MUI/Snackbar";

import { handleChange, togglePassword } from "../../utils/login/helpers";

export const Login = ({ setCurrentUser, theme }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [validated, setValidated] = useState({ email: true, password: true });
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

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
        setCurrentUser(response.data.user);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (err) {
      setOpen(true);
      setMessage(err.response.data.message);
      setTimeout(() => setOpen(false), 5000);
    }
  };

  return (
    <LoginContainer>
      <RightContainer>
        <RightHeroImg src={login} />
      </RightContainer>
      <Form onSubmit={handleSubmit} theme={theme}>
        <H2>Login to your account</H2>
        <TextField
          error={!validated.email}
          helperText={!validated.email && "Email cannot be blank"}
          label="Email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e, formData, setFormData, setValidated)}
          sx={{
            input: theme === "dark" && { color: "#ffffff" },
            label: theme === "dark" && { color: "#ffffff" },
            border: theme === "dark" &&
              validated.email && { border: "1px solid #ffffff" },
          }}
        />
        <TextField
          error={!validated.password}
          helperText={!validated.password && "Password cannot be blank"}
          type={showPassword ? "text" : "password"}
          label="Password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e, formData, setFormData, setValidated)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Tooltip
                  title={showPassword ? "Show" : "Hide"}
                  placement="left"
                >
                  <IconButton
                    sx={{ color: theme === "dark" && "#ffffff" }}
                    onClick={() =>
                      togglePassword(showPassword, setShowPassword)
                    }
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </Tooltip>
              </InputAdornment>
            ),
          }}
          sx={{
            border: theme === "dark" &&
              validated.password && { border: "1px solid #ffffff" },
            input: theme === "dark" && { color: "#ffffff" },
            label: theme === "dark" && { color: "#ffffff" },
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <Button
            type="submit"
            variant={
              formData.email && formData.password !== ""
                ? "contained"
                : "disabled"
            }
          >
            Sign in
          </Button>
        </div>
        <SignupWrapper>
          <p>
            Don't have an account?{" "}
            <NavLink theme={theme} to="/signup">
              Sign up
            </NavLink>
          </p>
        </SignupWrapper>
      </Form>
      <Snackbar
        open={open}
        severity="error"
        sx={{ width: "100%" }}
        message={message}
      />
    </LoginContainer>
  );
};
