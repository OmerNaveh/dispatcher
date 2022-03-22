import styled from "styled-components";
import { colors } from "../../../../strings/colors";

export const LoginSideLogoDiv = styled.div`
  background-color: ${colors.DarkestBlue};
  width: 40%;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 900px) {
    width: 100%;
    height: 25%;
  }
  @media only screen and (max-width: 580px) {
    height: 40%;
  }
`;

export const LoginText = styled.p`
  font-family: Roboto;
  font-style: normal;
  letter-spacing: 0.25px;
  font-weight: 100;
  font-size: 1.5em;
  padding: 0;
  margin: 0 0 0.25em 0;
  color: ${colors.DarkBlue};
  &.title {
    font-weight: 300;
    font-size: 2em;
    @media only screen and (max-width: 900px) {
      margin: 1em;
    }
    @media only screen and (max-width: 580px) {
      margin: 1em 0;
    }
  }
  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;
