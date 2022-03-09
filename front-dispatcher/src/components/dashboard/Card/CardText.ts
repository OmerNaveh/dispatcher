import styled from "styled-components";
import { colors } from "../../../strings/colors";

const CardText = styled.p`
  letter-spacing: 0.25px;
  &.gray {
    color: ${colors.GrayCardText};
  }
  &.limit {
    width: 90%;
  }
`;

export default CardText;
