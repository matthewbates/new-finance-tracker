import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import { handlePreviousMonth } from "../../../utils/transactions/helpers";

export const LeftArrow = ({ onClick }) => {
  return (
    <KeyboardArrowLeftIcon
      fontSize="large"
      sx={{ cursor: "pointer" }}
      onClick={onClick}
    />
  );
};
