import React from "react";
import { ReactComponent as LogoIcon } from "../../../assets/Logo.svg";
import styled from "styled-components";

const LogoSvg = styled(LogoIcon)`
  &.header {
    height: 10vh;
    width: 10vw;
  }
`;

export default LogoSvg;
