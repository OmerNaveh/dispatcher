import styled from "styled-components";
import { colors } from "../../strings/colors";
interface customDashboardTextProps {
  firstVisit?: boolean;
}
export const CustomDashboardText = styled.p<customDashboardTextProps>`
  font-family: "Roboto";
  font-weight: ${(props) => (props.firstVisit ? 500 : 400)};
  font-size: ${(props) => (props.firstVisit ? "1.5em" : "0.875em")};
  color: ${(props) => (props.firstVisit ? colors.Black : colors.GrayCardText)};
  margin: ${(props) => (props.firstVisit ? "0.1em 0 0.8em 0" : "0 0 0.4em 0")};
`;
export const StyledDashboardDiv = styled.div`
  margin: 0;
  width: 100vw;

  overflow: hidden;
  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
  margin-top: 74px;
  background-color: ${colors.LightestGray};
`;
export const StyledMainContentDiv = styled.div`
  padding: 1em 10% 0 10%;
  overflow: hidden;

  @media only screen and (max-width: 900px) {
    padding: 1em 0;
    margin: 0 1em;
  }
`;
