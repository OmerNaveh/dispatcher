import React from "react";
import styled from "styled-components";
import { colors } from "../../../strings/colors";

const HeaderStyle = styled.header`
  position: fixed;
  width: 100vw;
  height: 10vh;
  top: 0;
  left: 0;
  background-color: ${colors.Dark};
  padding: 1em;
  display: flex;
  justify-content: space-between;
`;

export default HeaderStyle;
