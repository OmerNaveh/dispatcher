import styled from "styled-components";
import { colors } from "../../strings/colors";

export const CardContent = styled.div`
  margin: 0 1%;
  padding: 1% 0;
  width: 100%;
  @media only screen and (max-width: 450px) {
    display: flex;
    flex-direction: column;
    margin: 0 3%;
  }
`;

export const CardImage = styled.img`
  width: 20%;
  border-radius: 20px 0px 0px 20px;
  @media only screen and (max-width: 900px) {
    width: 25%;
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
  }
`;

export const CardLayout = styled.div`
  background: #ffffff;

  border: 1px solid #d9dbe9;
  display: flex;
  border-radius: 20px;
  margin: 1em;

  @media only screen and (max-width: 450px) {
    flex-direction: column;
  }
  &.graph {
    flex-direction: column;
    padding: 1em;
    width: 90%;
    height: 30%;
    margin: 0.3em 0;
  }
`;

export const CardText = styled.p`
  letter-spacing: 0.25px;
  font-family: Roboto;
  font-weight: 400;
  word-wrap: break-word;
  font-style: normal;
  margin-top: 0;
  color: ${colors.DarkBlue};
  &.gray {
    color: ${colors.GrayCardText};
  }
  &.limit {
    width: 90%;
  }
`;

export const CardTitle = styled.p`
  color: ${colors.CardTitle};
  font-weight: 700;
  font-family: Roboto;
  word-wrap: break-word;
  font-size: 1.2em;
  line-height: 21px;
  max-width: 90%;
`;
