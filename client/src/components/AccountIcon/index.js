import { IconButton } from "../MUI/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Tooltip } from "../MUI/Tooltip";

export const AccountIcon = () => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Tooltip title="Account">
        <AccountCircleIcon />
      </Tooltip>
    </div>
  );
};
