// handles the logout functionality
export const handleLogout = (setCurrentUser, navigate) => {
  setTimeout(() => {
    localStorage.removeItem("user");
    setCurrentUser(false);
    navigate("/login");
  }, 1500);
};
