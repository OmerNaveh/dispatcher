import styled from "styled-components";
import { colors } from "../../../strings/colors";

export const LogoutBtnStyled = styled.button`
  position: absolute;
  z-index: 1;
  border-radius: 0.45em;
  border: none;
  color:${colors.DarkestBlue}
  background-color: ${colors.LightestGray};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  margin: 0.5em;
  padding: 1em;
  text-align: left;
  line-height: 1.5;

  right: 0;
  top: 100%;

  &:hover {
    background-color: ${colors.LightGray};
    cursor: pointer;
  }
`;
