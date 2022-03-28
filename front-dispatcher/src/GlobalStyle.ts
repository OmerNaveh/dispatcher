import { createGlobalStyle } from "styled-components";
import { colors } from "./strings/colors";

const GlobalStyle = createGlobalStyle`
&.css-1x51dt5-MuiInputBase-input-MuiInput-input{
    position: relative;
}

&.MuiInput-input{
  font-size: 90% !important;
  padding: unset !important;
  font-family: Roboto !important;
  font-weight: 400 !important;
  color: ${colors.DarkestBlue} !important;
}
&.MuiSelectUnstyled-root{
  min-width: 11px;
}
&.recharts-label{
  color: ${colors.DarkestBlue} !important;
  font-family: "Mulish" !important;
}
&.recharts-legend-wrapper{
  width: 100% !important; 
}
&.recharts-cartesian-axis-tick-value{
  font-family: 'Roboto' !important;
  font-weight: 700;
}
body {
  margin: 0;
  overflow-x: hidden;
}
`;

export default GlobalStyle;
