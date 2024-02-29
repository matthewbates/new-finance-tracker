// handles the state change for <Login />
export const handleChange = (e, formData, setFormData, setValidated) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
  setValidated((prev) => ({ ...prev, [name]: value.trim().length > 0 }));
};

// shows/hides the password
export const togglePassword = (showPassword, setShowPassword) => {
  setShowPassword(!showPassword);
};

