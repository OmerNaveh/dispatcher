import styled from "styled-components";
import { colors } from "../../strings/colors";

interface props {
  focused?: boolean;
}
export const StyledSearchBarDiv = styled.div<props>`
  background: ${colors.White};
  border-radius: 10px;
  display: grid;
  grid-template-columns: ${(props) =>
    props.focused ? "65% 5% 30%" : "60% 5% 35%"};
  padding: 0.5% 1%;
  width: ${(props) => (props.focused ? "45%" : "40%")};
  position: absolute;
  left: 10%;
  max-height: 50%;
  align-content: center;

  @media only screen and (max-width: 900px) {
    width: 50%;
    grid-template-columns: 55% 5% 40%;
  }
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;
