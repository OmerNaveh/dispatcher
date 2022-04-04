import { CircularProgress } from "@mui/material";
import React from "react";
import { LoadingIconContainer } from "./style";

const LoadingIcon = () => {
  return (
    <LoadingIconContainer>
      <CircularProgress color={"primary"} />;
    </LoadingIconContainer>
  );
};

export default LoadingIcon;
