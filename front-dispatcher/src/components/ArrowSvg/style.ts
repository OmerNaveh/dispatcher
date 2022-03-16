import React from "react";
import { ReactComponent as ArrowIcon } from "../../assets/back.svg";
import styled from "styled-components";

const ArrowSvg = styled(ArrowIcon)`
  filter: brightness(0) invert(1);
  transform: rotate(-180deg);
  margin-left: 0.5em;
`;

export default ArrowSvg;
