import styled from "styled-components";
import { colors } from "../../strings/colors";

export const StyledSearchBarDiv = styled.div`
  background: ${colors.White};
  border-radius: 10px;
  display: flex;
  width: 40%;
  align-items: center;
  &.grid {
    display: grid;
    grid-template-columns: 70% 5% 25%;
    padding: 0 1%;
  }
  @media only screen and (max-width: 450px) {
  }
`;
