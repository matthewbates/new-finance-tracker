import CancelIcon from "@mui/icons-material/Cancel";

import { AccessibilityMenuContainer } from "./AccessibilityMenuElements";

export const AccessibilityMenu = ({
  theme,
  accessibility,
  toggleAccessibility,
}) => {
  return (
    <AccessibilityMenuContainer theme={theme} accessibility={accessibility}>
      <CancelIcon color="action" onClick={toggleAccessibility} />
    </AccessibilityMenuContainer>
  );
};
