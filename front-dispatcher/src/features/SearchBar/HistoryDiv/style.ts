import styled from "styled-components";
import { colors } from "../../../strings/colors";
import { ReactComponent as ExitIcon } from "../../../assets/exit.svg";
export const StyledHistoryDiv = styled.div`
  position: absolute;
  left: 0%;
  top: 110%;
  width: 92.5%;
  background-color: ${colors.White};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  padding: 4%;
  overflow-y: scroll;
  color: ${colors.DarkBlue};
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 580px) {
    width: 93vw;
    height: 100vh;
    top: 75px;
    z-index: 10;
    background-color: ${colors.LightestGray};
  }
`;
interface historyTextDiv {
  isTitle?: boolean;
}
export const StyledHistoryTextDiv = styled.div<historyTextDiv>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    background-color: ${(props) => !props.isTitle && colors.LightestGray};
    cursor: ${(props) => !props.isTitle && "pointer"};
    @media only screen and (max-width: 580px) {
      background-color: ${(props) => !props.isTitle && colors.LightGray};
    }
  }
  @media only screen and (max-width: 580px) {
    margin: 0 1%;
    border-bottom: ${(props) => !props.isTitle && `1px solid ${colors.Gray}`};
  }
`;
export const StyledHistoryContentDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
interface titleTextProps {
  clickable?: boolean;
}
export const StyledHistoryTitleTexts = styled.p<titleTextProps>`
  cursor: ${(props) => props.clickable && "pointer"};
  font-family: "Roboto";
  font-weight: 500;
`;
export const StyledHistoryTexts = styled.p`
  font-family: "Roboto";
  font-weight: 400;
`;
export const StyledHistoryExitIcon = styled(ExitIcon)`
  cursor: pointer;
  width: 1em;
  height: 1em;
`;
