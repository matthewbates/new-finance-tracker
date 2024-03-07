import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { InputAdornment, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import axios from "axios";

import {
  FormContainer,
  Form,
  H2,
  SignupWrapper,
  NavLink,
} from "./LoginElements";

import { Tooltip } from "../../components/MUI/Tooltip";
import { TextField } from "../../components/MUI/TextField";
import { Button } from "../../components/MUI/Button";

import { handleChange, togglePassword } from "../../utils/login/helpers";
import { initialLoginForm, initialValidation } from "../../utils/login/state";

export const Login = ({ setCurrentUser, theme }) => {
  const [formData, setFormData] = useState(initialLoginForm);
  const [validated, setValidated] = useState(initialValidation);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = formData?.email;
    const password = formData?.password;

    if (!email || !password) {
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/users/account", {
        email,
        password,
      });
      console.log("Response:", response);
      const userData = response.data.user; // Access user data directly
      if (userData) {
        console.log("User data:", userData);
        setCurrentUser(userData);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(userData));
      } else {
        console.error("User data not found in response:", response.data);
        // Handle case where user data is not available in the response
      }
    } catch (err) {
      console.error("Error during login:", err);
      alert("An error occurred during login. Please try again.");
    }
  };

  return (
    <>
      <FormContainer>
        <Form onSubmit={handleSubmit} theme={theme}>
          <H2>Login to your account</H2>
          <TextField
            error={!validated.email}
            helperText={!validated.email && "Email cannot be blank"}
            label="Email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              handleChange(e, formData, setFormData, setValidated)
            }
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
            onChange={(e) =>
              handleChange(e, formData, setFormData, setValidated)
            }
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
          <Button type="submit" variant="contained">
            Sign in
          </Button>
          <SignupWrapper>
            <p>
              Don't have an account? <NavLink to="/signup">Sign up</NavLink>
            </p>
          </SignupWrapper>
        </Form>
      </FormContainer>
    </>
  );
};
