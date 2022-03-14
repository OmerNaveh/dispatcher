import styled from "styled-components";
import { colors } from "../../strings/colors";

const LoginSideLogoDiv = styled.div`
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
  @media only screen and (max-width: 450px) {
    height: 40%;
  }
`;

export default LoginSideLogoDiv;
