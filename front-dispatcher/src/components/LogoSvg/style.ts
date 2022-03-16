import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/Logo.svg";
import styled from "styled-components";

const LogoSvg = styled(LogoIcon)`
  &.header {
    height: 50px;
    width: 66px;
  }
`;

export default LogoSvg;
