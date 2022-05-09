import { createTheme } from "@mui/material";
import styled from "styled-components";

export const ImageContainer = styled.div`
  width: 24.5%;
  border-radius: 20px 0px 0px 20px;
  height: 242px;
  @media only screen and (max-width: 900px) {
    width: 33.5%;
    height: 226px;
  }
  @media only screen and (max-width: 580px) {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    max-height: 149px;
  }
`;

export const CardSkeletonLayout = styled.div`
  width: 95%;
  background: #ffffff;
  border: 1px solid #d9dbe9;
  display: flex;
  border-radius: 20px;
  margin: 0.8em;
  margin-left: 0;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    margin: 0.8em 0;
    height: 338px;
  }
`;

export const CardSkeletonContent = styled.div`
  flex: 1;
  margin: auto 2%;
  padding: 1em 0;
  width: 100%;
  @media only screen and (max-width: 900px) {
    padding: 0.5em 0;
  }
  @media only screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    margin: 0 3%;
    width: unset;
    height: fit-content;
  }
`;
