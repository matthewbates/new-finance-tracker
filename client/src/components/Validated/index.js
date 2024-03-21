import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { ValidatedWrapper, P } from "./ValidatedElements";

export const Validated = ({ validated }) => {
  return (
    <>
      <div>Password requirements:</div>
      <ValidatedWrapper>
        {validated.lowercase ? (
          <CheckIcon sx={{ color: "green" }} />
        ) : (
          <CloseIcon sx={{ color: "red" }} />
        )}
        <P validated={validated.lowercase}>
          Must contain at least one lowercase character
        </P>
      </ValidatedWrapper>
      <ValidatedWrapper>
        {validated.uppercase ? (
          <CheckIcon sx={{ color: "green" }} />
        ) : (
          <CloseIcon sx={{ color: "red" }} />
        )}
        <P validated={validated.uppercase}>
          Must contain at least one uppercase character
        </P>
      </ValidatedWrapper>
      <ValidatedWrapper>
        {validated.numeric ? (
          <CheckIcon sx={{ color: "green" }} />
        ) : (
          <CloseIcon sx={{ color: "red" }} />
        )}
        <P validated={validated.numeric}>
          Must contain at least one numeric character
        </P>
      </ValidatedWrapper>
      <ValidatedWrapper>
        {validated.specialChar ? (
          <CheckIcon sx={{ color: "green" }} />
        ) : (
          <CloseIcon sx={{ color: "red" }} />
        )}
        <P validated={validated.specialChar}>
          Must contain at least one special character
        </P>
      </ValidatedWrapper>
    </>
  );
};
