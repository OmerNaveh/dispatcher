import styled from "styled-components";
import { colors } from "../../strings/colors";

export const StyledSearchBarDiv = styled.div`
  background: ${colors.White};
  border-radius: 10px;
  display: grid;
  grid-template-columns: 70% 5% 25%;
  padding: 0.5% 1%;
  width: 30%;
  position: absolute;
  left: 10%;
  max-height: 70%;
  align-content: center;
  @media only screen and (max-width: 450px) {
    display: none;
  }
`;
