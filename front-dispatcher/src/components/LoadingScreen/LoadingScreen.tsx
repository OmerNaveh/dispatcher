import { Backdrop, CircularProgress } from "@mui/material";
import React from "react";
import { colors } from "../../strings/colors";

import { LoadingScreenDiv } from "./style";

const LoadingScreen = () => {
  return (
    <LoadingScreenDiv>
      <Backdrop open={true}>
        <CircularProgress color={"primary"} />
      </Backdrop>
    </LoadingScreenDiv>
  );
};

export default LoadingScreen;
