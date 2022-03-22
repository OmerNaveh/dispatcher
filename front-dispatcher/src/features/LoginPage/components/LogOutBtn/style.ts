import styled from "styled-components";
import { colors } from "../../../../strings/colors";

export const LogoutBtnStyled = styled.button`
  position: absolute;
  z-index: 1;
  border-radius: 10px;
  border: none;
  color: ${colors.DarkBlue};
  font-family: Roboto;
  font-weight: 400;
  background-color: ${colors.White};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  margin: 0.5em;
  padding: 0.7em 1em 0.8em 0.5em;
  text-align: left;
  line-height: 1.5;
  width: 70%;
  right: 0;
  top: 100%;

  &:hover {
    background-color: ${colors.LightestGray};
    cursor: pointer;
  }
`;
