import styled from "styled-components";
import { colors } from "../../strings/colors";

const PrimaryButton = styled.button`
  background: ${colors.Blue};
  border-radius: 20px;
  font-weight: 500;
  line-height: 26px;
  font-size: 0.875em;
  letter-spacing: 0.25px;
  font-family: Roboto;
  font-style: normal;
  color: ${colors.White};
  border: none;
  padding: 0.5em 1.5em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &.login {
    width: 100%;
    padding: 0.2em 1em;
    border-radius: 10px;
  }
`;
export default PrimaryButton;
