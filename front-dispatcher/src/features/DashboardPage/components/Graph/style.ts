import styled from "styled-components";
import { colors } from "../../../../strings/colors";
import { ReactComponent as GraphIcon } from "../../../../assets/chart.svg";

export const NoGraphIcon = styled(GraphIcon)`
  height: 50%;
  width: 50%;
  margin-bottom: 1em;
`;
export const TitleDivider = styled.div`
  background-color: ${colors.DarkBlue};
  width: 0.75em;
  padding: 0.5%;
  border-radius: 1em;
`;
export const GraphLayout = styled.div`
  background: #ffffff;
  border: 1px solid #d9dbe9;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  padding: 1.5em 1em 1em 1em;
  width: 90%;
  height: 30%;
  min-height: 355px;
  margin: 0;
  margin-bottom: 1em;
  justify-content: space-between;
`;
export const GraphTitle = styled.p`
  color: ${colors.CardTitle};
  font-weight: 700;
  margin: 0;
  font-size: 24px;
  margin-bottom: 0.5em;
  font-family: "Roboto";
  word-wrap: break-word;
  line-height: 21px;
  max-width: 90%;
`;
export const NoContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
export const GraphContentDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 80%;
  width: 100%;
`;
