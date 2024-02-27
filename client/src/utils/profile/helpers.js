// handles the logout functionality
export const handleLogout = (setCurrentUser, navigate) => {
  setTimeout(() => {
    localStorage.removeItem("user");
    setCurrentUser(false);
    alert("You've successfully logged out");
    navigate("/");
  }, 1500);
};
