import ReactLoading from "react-loading";

import { LoaderContainer } from "./LoaderElements";

export const Loader = ({ theme }) => {
  return (
    <LoaderContainer>
      <ReactLoading
        type="spokes"
        color={theme === "light" ? "#000000" : "#a9adc1"}
      />
      Loading transactions...
    </LoaderContainer>
  );
};
