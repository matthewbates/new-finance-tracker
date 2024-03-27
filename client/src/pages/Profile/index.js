import { useNavigate } from "react-router-dom";
import { PieChart } from "@mui/x-charts/PieChart";

import { Button } from "../../components/MUI/Button";

import { handleLogout } from "../../utils/profile/helpers";

export const Profile = ({ currentUser, setCurrentUser }) => {
  const navigate = useNavigate();

  console.log(currentUser);

  return (
    <>
      <PieChart
        series={[
          {
            data: [
              { id: 0, value: 10, label: "series A" },
              { id: 1, value: 15, label: "series B" },
              { id: 2, value: 20, label: "series C" },
            ],
          },
        ]}
        width={400}
        height={200}
      />
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
    </>
  );
};
