import { Snackbar as MuiSnackbar, Alert as MuiAlert } from "@mui/material";

export const Snackbar = ({ open, severity, sx, message }) => {
  return (
    <MuiSnackbar open={open}>
      <MuiAlert severity={severity} sx={sx}>
        {message}
      </MuiAlert>
    </MuiSnackbar>
  );
};
