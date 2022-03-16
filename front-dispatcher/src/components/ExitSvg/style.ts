import React from "react";
import { ReactComponent as ExitIcon } from "../../assets/exit.svg";
import styled from "styled-components";

const ExitSVG = styled(ExitIcon)`
  height: 1em;
  width: 1em;
  float: right;
  :hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export default ExitSVG;
