import CheckIcon from "@mui/icons-material/Check";

import { ValidatedContainer, ValidatedWrapper, P } from "./ValidatedElements";

export const Validated = ({ theme, validated }) => {
  return (
    <>
      <strong>Password requirements:</strong>
      <ValidatedContainer theme={theme}>
        <ValidatedWrapper>
          {validated.lowercase && <CheckIcon sx={{ color: "green" }} />}
          <P validated={validated.lowercase}>
            Must contain at least one lowercase character
          </P>
        </ValidatedWrapper>
        <ValidatedWrapper>
          {validated.uppercase && <CheckIcon sx={{ color: "green" }} />}
          <P validated={validated.uppercase}>
            Must contain at least one uppercase character
          </P>
        </ValidatedWrapper>
        <ValidatedWrapper>
          {validated.numeric && <CheckIcon sx={{ color: "green" }} />}
          <P validated={validated.numeric}>
            Must contain at least one numeric character
          </P>
        </ValidatedWrapper>
        <ValidatedWrapper>
          {validated.specialChar && <CheckIcon sx={{ color: "green" }} />}
          <P validated={validated.specialChar}>
            Must contain at least one special character
          </P>
        </ValidatedWrapper>
      </ValidatedContainer>
    </>
  );
};
