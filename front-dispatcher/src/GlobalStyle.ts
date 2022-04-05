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
&.css-o9k5xi-MuiInputBase-root-MuiOutlinedInput-root{ 
    font-family: "Roboto" !important;
    color: ${colors.DarkBlue} !important;
    width: 100%;
    >input{
      cursor: default !important;
      font-size: 90% !important;
      &::placeholder {
        opacity: 1;
        color: ${colors.DarkBlue} !important;
      }
    }
}
&.css-1d3z3hw-MuiOutlinedInput-notchedOutline{
  border: none !important;
}
&.css-1u3bzj6-MuiFormControl-root-MuiTextField-root{
  width: 100% !important;
  height: 100% !important;
  justify-content: center;
}
&.css-1ozefeb{
  margin:5px !important;
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
  fill: ${colors.DarkBlue};
  font-size: 13px;
}
body {
  margin: 0;
  overflow-x: hidden;
}
`;

export default GlobalStyle;
