import styled from "styled-components";
import { colors } from "../../strings/colors";

interface props {
  focused?: boolean;
}
export const StyledSearchBarDiv = styled.div<props>`
  background: ${colors.White};
  border-radius: 10px;
  font-size: 87.5%;
  display: grid;
  grid-template-columns: ${(props) =>
    props.focused ? "65% 5% 30%" : "60% 5% 35%"};
  padding: 0.5% 1%;
  width: ${(props) => (props.focused ? "34%" : "21%")};
  position: absolute;
  left: 10%;
  max-height: 50%;
  align-content: center;

  @media only screen and (max-width: 900px) {
    width: 50%;
    left: 15%;
    > * {
      display: none;
    }
  }
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;
