import styled from "styled-components";
import { colors } from "../../strings/colors";
interface rtlProps {
  isRTL?: boolean;
}
export const CardContent = styled.div<rtlProps>`
  margin: auto 2%;
  padding: 1em 0;
  overflow-wrap: break-word;
  direction: ${(props) => props.isRTL && "rtl"};
  width: 100%;
  @media only screen and (max-width: 900px) {
    padding: 0.5em 0;
  }
  @media only screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    margin: 0 3%;
    width: unset;
    height: fit-content;
  }
`;
export const CardTagsNDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface tagsProps {
  last?: boolean;
}
export const Tag = styled.div<tagsProps>`
  background-color: ${colors.LightGray};
  color: ${colors.DarkBlue};
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  margin: ${(props) => (props.last ? 0 : "0 0.8em 0 0")};
  border-radius: 10px;
  padding: 0.2em 0.7em;
`;
export const TagsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const CardImage = styled.img<rtlProps>`
  width: 24.5%;
  border-radius: ${(props) =>
    props.isRTL ? "0px 20px 20px 0px" : " 20px 0px 0px 20px"};
  object-fit: cover;
  @media only screen and (max-width: 900px) {
    width: 33.5%;
  }
  @media only screen and (max-width: 580px) {
    width: 100%;
    border-radius: 20px 20px 0px 0px;
    max-height: 149px;
  }
`;

export const CardLayout = styled.div<rtlProps>`
  background: #ffffff;
  border: 1px solid #d9dbe9;
  display: flex;
  flex-direction: ${(props) => props.isRTL && "row-reverse"};
  border-radius: 20px;
  margin: 0.8em;
  margin-left: 0;
  position: relative;
  @media only screen and (max-width: 580px) {
    flex-direction: column;
    margin: 0.8em 0;
  }
  &.skeleton:before {
    position: absolute;
    background-color: #dddbdd;
    height: 100%;
    border-radius: ${(props) =>
      props.isRTL ? "0px 20px 20px 0px" : " 20px 0px 0px 20px"};
    content: "";
    width: 24.5%;
    animation: flash 2s ease-in-out infinite;
    @media only screen and (max-width: 900px) {
      width: 33.5%;
    }
    @media only screen and (max-width: 580px) {
      width: 100%;
      border-radius: 20px 20px 0px 0px;
      max-height: 149px;
    }
  }
  @keyframes flash {
    0% {
      background-color: #dddbdd;
    }

    50% {
      background-color: #c0c0c0;
    }
    100% {
      background-color: #dddbdd;
    }
  }
`;
export const CardDate = styled.p`
  letter-spacing: 0.25px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 0.875em;
  word-wrap: break-word;
  font-style: normal;
  margin: 0;
  color: ${colors.GrayCardText};
`;

export const CardText = styled.p`
  letter-spacing: 0.25px;
  font-family: Roboto;
  font-weight: 400;
  font-size: 0.875em;
  word-wrap: break-word;
  font-style: normal;
  margin-top: 0;
  margin-bottom: 1.4em;
  color: ${colors.DarkBlue};
  @media only screen and (max-width: 580px) {
    margin-bottom: 0.75em;
  }
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
  margin: 1.1em 0;
  font-family: Roboto;
  word-wrap: break-word;
  font-size: 1.12em;
  line-height: 21px;
  max-width: 90%;
  @media only screen and (max-width: 580px) {
    display: -webkit-box;
    overflow: hidden;
    margin: 0.56em 0;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;

export const CardButtonContainer = styled.div<rtlProps>`
  display: flex;
  justify-content: ${(props) => (props.isRTL ? "left" : "right")};
  margin: 0;
  direction: ltr;
  @media only screen and (max-width: 580px) {
    justify-content: center;

    button {
      width: 100%;
    }
  }
`;
