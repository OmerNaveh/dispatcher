import styled from "styled-components";
import { colors } from "../../strings/colors";
import { StyledOption } from "./Style";

export const StyledDropDownDiv = styled.div`
  position: relative;
  width: 100%;
  margin: 0 0.5em;
  background: ${colors.White};
  border-radius: 10px;
  padding: 0;
  z-index: 1;
`;
interface personalOptionsProps {
  isPlaceHolder?: boolean;
}
export const PersonalStyledOption = styled(StyledOption)<personalOptionsProps>`
  color: ${(props) => props.isPlaceHolder && colors.Gray} !important;
  font-size: ${(props) => props.isPlaceHolder && "0.8em"} !important;
  background-color: ${(props) =>
    props.isPlaceHolder && colors.White} !important;
`;
