import { useNavigate } from "react-router-dom";

import { Button } from "../../components/MUI/Button";

import { handleLogout } from "../../utils/profile/helpers";

export const Profile = ({ setCurrentUser }) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Button
        color="error"
        variant="contained"
        onClick={() => handleLogout(setCurrentUser, navigate)}
      >
        Logout
      </Button>
    </div>
  );
};
