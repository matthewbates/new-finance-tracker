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
        <IconButton
          sx={{
            zIndex: 5,
            position: "sticky",
            bottom: 0,
            left: 0,
            cursor: "pointer",
            color: theme === "light" ? "#000000" : "#ffffff",
          }}
        >
          <AccessibilityNewIcon
            onClick={toggleAccessibility}
            fontSize="large"
          />
        </IconButton>
      </Tooltip>
      <AccessibilityMenu
        theme={theme}
        accessibility={accessibility}
        toggleAccessibility={toggleAccessibility}
      />
    </>
  );
};
