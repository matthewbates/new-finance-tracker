import { Tooltip } from "../Tooltip";

import { IconButton } from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

import { AccessibilityMenu } from "../../AccessibilityMenu";

export const Accessibility = ({
  theme,
  accessibility,
  toggleAccessibility,
}) => {
  return (
    <>
      <Tooltip title="Accessibility Menu" placement="right">
        <AccessibilityNewIcon
          onClick={toggleAccessibility}
          fontSize="large"
          sx={{
            zIndex: 5,
            position: "absolute",
            color: "#ffffff",
            bottom: 0,
            left: 0,
            margin: "0.5em",
            padding: "0.1em",
            cursor: "pointer",
            background: "#1e88e5",
            border:
              theme === "light" ? "4px solid darkBlue" : "4px solid #ffffff",
            borderRadius: "50%",
          }}
        />
      </Tooltip>
      <AccessibilityMenu
        theme={theme}
        accessibility={accessibility}
        toggleAccessibility={toggleAccessibility}
      />
    </>
  );
};
