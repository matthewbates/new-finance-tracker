import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const RightArrow = ({ onClick }) => {
  return (
    <KeyboardArrowRightIcon
      fontSize="large"
      sx={{ cursor: "pointer" }}
      onClick={onClick}
    />
  );
};
