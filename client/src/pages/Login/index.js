import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

import { TextField } from "../../components/MUI/TextField";
import { Button } from "../../components/MUI/Button";

export const Login = ({ setCurrentUser }) => {
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
        console.log(response);
        setCurrentUser(response.data.user);
        navigate("/");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        console.log(response.data.user);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1em",
        width: "100%",
        maxWidth: "300px",
        margin: "auto",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        Login to your account
      </h1>
      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {/* <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
      /> */}

      <TextField
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {/* <input
        type="text"
        name="password"
        value={formData.password}
        onChange={handleChange}
      /> */}
      <Button type="submit" variant="contained">
        Sign in
      </Button>
      <h4 style={{ display: "flex", justifyContent: "center" }}>
        Don't have an account? <a href="#"> Sign up</a>
      </h4>
    </form>
  );
};
