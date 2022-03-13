import styled from "styled-components";
import { colors } from "../../strings/colors";

const LoginText = styled.p`
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
  }
  @media only screen and (max-width: 900px) {
    text-align: center;
  }
`;

export default LoginText;
