import React from "react";
import { graphString } from "../../../../strings/strings";

import CardContainer from "../CardsContainer/CardContainer";
import GraphsContainer from "../GraphsContainer/GraphsContainer";
import StyledDashboardContentDiv from "./style";

const DashboardContenContainer = () => {
  return (
    <StyledDashboardContentDiv>
      <CardContainer />
      <GraphsContainer graphTypeArray={graphString.graphTypeArray} />
    </StyledDashboardContentDiv>
  );
};

export default DashboardContenContainer;
