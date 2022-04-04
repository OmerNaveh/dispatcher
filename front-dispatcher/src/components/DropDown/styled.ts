import styled from "styled-components";
import { colors } from "../../strings/colors";
import { StyledOption } from "./Style";
interface styledDiv {
  searchbar?: boolean;
  isDisabled?: boolean;
}
export const StyledDropDownDiv = styled.div<styledDiv>`
  position: relative;
  width: 100%;
  margin: 0 0.5em;
  display: ${(props) => !props.searchbar && "flex"};
  justify-content: ${(props) => !props.searchbar && "center"};
  background: ${colors.White};
  border-radius: 10px;
  padding: 0;
  z-index: 1;
  opacity: ${(props) => props.isDisabled && 0.5};
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
