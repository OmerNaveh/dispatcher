import React from "react";
import styled from "styled-components";
import { colors } from "../../../strings/colors";

const HeaderStyle = styled.header`
  position: fixed;
  width: 100vw;
  height: 74px;
  top: 0;
  left: 0;
  background-color: ${colors.DarkestBlue};
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default HeaderStyle;
