import ReactLoading from "react-loading";

import { LoaderContainer } from "./LoaderElements";

export const Loader = () => {
  return (
    <LoaderContainer>
      <ReactLoading color="#000000" type="spokes" />
      Loading transactions...
    </LoaderContainer>
  );
};
