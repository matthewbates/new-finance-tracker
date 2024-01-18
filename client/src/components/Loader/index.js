import ReactLoading from "react-loading";

import { LoaderContainer } from "./LoaderElements";

export const Loader = () => {
  return (
    <LoaderContainer>
      <ReactLoading type="spokes" />
      Loading transactions...
    </LoaderContainer>
  );
};
