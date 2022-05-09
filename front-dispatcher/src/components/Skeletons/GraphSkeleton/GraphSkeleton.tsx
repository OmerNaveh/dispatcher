import { Skeleton } from "@mui/material";
import React from "react";
import { graphString } from "../../../strings/strings";
import {
  CenterContainer,
  GraphSkeletonContentDiv,
  TagsSkeletonContainer,
} from "./style";
interface props {
  graphType: string;
}
const GraphSkeleton = ({ graphType }: props) => {
  const skeletonByGraphType = () => {
    return graphType === graphString.Sources ? (
      <>
        <CenterContainer>
          <Skeleton variant="circular" height={"10rem"} width={"10rem"} />
        </CenterContainer>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" />
      </>
    ) : graphType === graphString.Dates ? (
      <>
        <Skeleton variant="rectangular" height={"85%"} />
        <br />
        <Skeleton variant="text" />
      </>
    ) : (
      Array(9)
        .fill(0)
        .map((item) => (
          <>
            <TagsSkeletonContainer>
              <Skeleton variant="text" width={"30%"} />
              <Skeleton variant="text" width={"60%"} />
            </TagsSkeletonContainer>
          </>
        ))
    );
  };
  return (
    <GraphSkeletonContentDiv>{skeletonByGraphType()}</GraphSkeletonContentDiv>
  );
};

export default GraphSkeleton;
