import React from "react";
import { useAppSelector } from "../../../../store";
import { graphString } from "../../../../strings/strings";
import { CardText } from "../../../Card/style";
import DoughnutGraph from "./components/DoughnutGraph/DoughnutGraph";
import LineGraph from "./components/LineGraph/LineGraph";
import { doughnutMockdata, lineGraphMockData } from "./mock/graphsMockData";
import mockdata from "../../../../mock/mockData.json";
import {
  GraphContentDiv,
  GraphLayout,
  GraphTitle,
  NoContentDiv,
  NoGraphIcon,
  TitleDivider,
} from "./style";

interface graphProps {
  title: string;
  graphType?: string;
}

const Graph = ({ title, graphType }: graphProps) => {
  const { articles } = useAppSelector((state) => state.apiData);

  const showGraphByType = () => {
    return graphType === graphString.graphTypeArray[0] ? (
      <GraphContentDiv>
        <DoughnutGraph data={doughnutMockdata} />
      </GraphContentDiv>
    ) : graphType === graphString.graphTypeArray[1] ? (
      <GraphContentDiv>
        <LineGraph data={lineGraphMockData} />
      </GraphContentDiv>
    ) : (
      showNoGraphType()
    );
  };
  const showNoGraphType = () => {
    return (
      <NoContentDiv>
        <NoGraphIcon />
        <CardText>{graphString.noDataToDisplay}</CardText>
      </NoContentDiv>
    );
  };
  return (
    <GraphLayout>
      <div>
        <GraphTitle>{title}</GraphTitle>
        <TitleDivider />
      </div>
      {!graphType || !articles || articles.length === 0 ? (
        <NoContentDiv>
          <NoGraphIcon />
          <CardText>{graphString.noDataToDisplay}</CardText>
        </NoContentDiv>
      ) : (
        graphType && showGraphByType()
      )}
    </GraphLayout>
  );
};

export default Graph;
