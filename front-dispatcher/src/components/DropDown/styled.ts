import styled from "styled-components";
import { colors } from "../../strings/colors";
interface divProps {
  searchBarFocused?: boolean;
}
export const StyledDropDownDiv = styled.div<divProps>`
  position: ${(props) => (props.searchBarFocused ? "" : "relative")};
  width: 100%;
  margin: 0 0.5em;
  background: ${colors.White};
  border-radius: 10px;
  padding: 0;
  z-index: ${(props) => (props.searchBarFocused ? "" : 1)};
`;
