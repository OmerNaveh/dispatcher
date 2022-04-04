import styled from "styled-components";
import { colors } from "../../../../strings/colors";
interface styledDateDivProps {
  sideBar?: boolean;
}
export const StyledDateDiv = styled.div<styledDateDivProps>`
  width: 100%;
  margin: ${(props) => (props.sideBar ? "0" : "0 0.5em")};
  background: ${colors.White};
  color: ${colors.DarkBlue};
  border-radius: 10px;
  padding: 0;
  border: none;
`;
