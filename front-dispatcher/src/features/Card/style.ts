import styled from "styled-components";
import { colors } from "../../strings/colors";

export const CardContent = styled.div`
  margin: auto 2%;
  padding: 1.5% 0;
  overflow-wrap: break-word;
  width: 100%;
  @media only screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    margin: 0 3%;
    width: unset;
    height: fit-content;
  }
`;

export const CardImage = styled.img`
  width: 24.5%;
  border-radius: 20px 0px 0px 20px;
  object-fit: cover;
  @media only screen and (max-width: 900px) {
    width: 33.5%;
  }
  @media only screen and (max-width: 580px) {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    max-height: 200px;
  }
`;

export const CardLayout = styled.div`
  background: #ffffff;
  border: 1px solid #d9dbe9;
  display: flex;
  border-radius: 20px;
  margin: 0.8em;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    margin: 0.8em 0;
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
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
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
  @media only screen and (max-width: 580px) {
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const CardButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  margin: 0;
  @media only screen and (max-width: 580px) {
    justify-content: center;

    button {
      width: 100%;
    }
  }
`;
