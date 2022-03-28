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
