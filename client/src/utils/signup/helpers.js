export const testPasswordStrength = (formData, setValidated) => {
  const hasLowercase = /[a-z]/.test(formData.password);
  const hasUppercase = /[A-Z]/.test(formData.password);
  const hasNumeric = /[0-9]/.test(formData.password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);

  setValidated({
    lowercase: hasLowercase,
    uppercase: hasUppercase,
    numeric: hasNumeric,
    specialChar: hasSpecialChar,
  });
};
