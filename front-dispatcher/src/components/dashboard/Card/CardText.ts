import styled from "styled-components";
import { colors } from "../../../strings/colors";

const CardText = styled.p`
  letter-spacing: 0.25px;
  font-family: Roboto;
  font-weight: 400;
  font-style: normal;
  margin-top: 0;
  &.gray {
    color: ${colors.GrayCardText};
  }
  &.limit {
    width: 90%;
  }
`;

export default CardText;
