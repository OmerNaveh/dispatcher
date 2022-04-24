import styled from "styled-components";
import { colors } from "../../../../../../strings/colors";
export const TagsDivContainer = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  width: 100%;
  margin-top: -1em;
  display: flex;
  flex-direction: column;
`;

export const TagEntryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${colors.DarkBlue};
`;

export const PercentageContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 60%;
`;
interface textProps {
  bold?: boolean;
  extraRightMarg?: boolean;
}
export const TagText = styled.p<textProps>`
  font-family: "Roboto";
  font-weight: ${(props) => (props.bold ? 500 : 400)};
  margin-right: ${(props) => (props.extraRightMarg ? "1em" : "0.5em")};
`;

export const ProgressBar = styled.progress`
  height: 1em;
  accent-color: ${colors.Blue};
  -webkit-appearance: none;
  ::-webkit-progress-bar {
    border-radius: 20px;
    background-color: ${colors.LightGray};
  }
  ::-webkit-progress-value {
    background-color: ${colors.Blue};
    border-radius: 20px;
  }
`;
