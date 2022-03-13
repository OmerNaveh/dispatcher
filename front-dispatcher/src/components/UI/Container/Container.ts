import styled from "styled-components";
import { colors } from "../../../strings/colors";

export const Container = styled.div`
  margin: 0 5%;
  &.flex {
    display: flex;
    align-items: center;
  }
  &.noPad {
    padding: 0;
    margin: 0;
    width: 80%;
  }
  &.fullScreen {
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
  &.login {
    background-color: ${colors.LightestGray};
    height: 100vh;
    margin: 0;
    padding: 0 5%;
    width: 55%;
    justify-content: center;
    align-items: start;
  }
  & .loginContent {
    justify-content: center;
    align-items: start;
    width: 60%;
    height: 100vh;
    margin: 0;
  }
  &.column {
    flex-direction: column;
  }
  &.graph {
    margin-top: 10%;
  }
  &.relative {
    position: relative;
  }
`;
