import React from "react";
import Graph from "../Graph/Graph";
import StyledGraphsContainer from "./style";
interface graphProps {
  graphTypeArray: string[];
}
const GraphsContainer = ({ graphTypeArray }: graphProps) => {
  const graphCards = () => {
    return graphTypeArray.map((graphType) => {
      return <Graph title={graphType} graphType={""} />;
    });
  };
  return <StyledGraphsContainer>{graphCards()}</StyledGraphsContainer>;
};

export default GraphsContainer;
