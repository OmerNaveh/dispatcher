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
`;
interface textProps {
  bold?: boolean;
}
export const TagText = styled.p<textProps>`
  font-family: "Roboto";
  font-weight: ${(props) => (props.bold ? 500 : 400)};
  margin-right: ${(props) => props.bold && "0.5em"};
`;

export const ProgressBar = styled.progress`
  height: 1.5em;
  box-shadow: 0px 32px 64px rgba(0, 0, 0, 0.05);
`;
