import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import { LinkContainer } from "./LinkElements";

export const Link = ({ to, theme, name, onClick }) => {
  return (
    <LinkContainer to={to} theme={theme} onClick={onClick}>
      {name}
      <KeyboardArrowRightIcon />
    </LinkContainer>
  );
};
