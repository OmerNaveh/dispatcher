import { Skeleton } from "@mui/material";
import React from "react";
import { Container } from "../../Container/Container";
import {
  CardSkeletonContent,
  CardSkeletonLayout,
  ImageContainer,
} from "./style";

const CardsSkeleton = () => {
  const generateSkeletons = () => {
    return Array(20)
      .fill(0)
      .map((item) => (
        <CardSkeletonLayout>
          <ImageContainer>
            <Skeleton
              className="imageSkeleton"
              variant="rectangular"
              height={"100%"}
              sx={{ borderRadius: " 20px 0px 0px 20px" }}
            />
          </ImageContainer>
          <CardSkeletonContent>
            <Skeleton variant="text" width={"100%"} />
            <Skeleton variant="text" width={"100%"} />
            <Skeleton variant="text" width={"100%"} />
            <Skeleton variant="text" width={"100%"} />
            <Skeleton variant="text" width={"40%"} sx={{ float: "right" }} />
          </CardSkeletonContent>
        </CardSkeletonLayout>
      ));
  };
  return (
    <Container className="flex column cardContainer">
      {generateSkeletons()}
    </Container>
  );
};

export default CardsSkeleton;
