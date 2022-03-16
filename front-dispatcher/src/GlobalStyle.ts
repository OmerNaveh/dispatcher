import { createGlobalStyle } from "styled-components";
import { colors } from "./strings/colors";

const GlobalStyle = createGlobalStyle`
&.css-1x51dt5-MuiInputBase-input-MuiInput-input{
    position: relative;
}
&.MuiSelectUnstyled-popper{
    min-width: 12.5% !important;
}
&.MuiInput-input{
  font-size: 90% !important;
  font-family: Roboto !important;
  font-weight: 400 !important;
  color: ${colors.DarkestBlue} !important;
}
&.MuiSelectUnstyled-root{
  min-width: 11px;
}
body {
  margin: 0;
  max-height: 100vh;
  overflow: hidden;
}
`;

export default GlobalStyle;