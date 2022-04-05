import React from "react";
import { useAppSelector } from "../../../../store";
import { graphString } from "../../../../strings/strings";
import { CardText } from "../../../Card/style";
import DoughnutGraph from "./components/DoughnutGraph/DoughnutGraph";
import LineGraph from "./components/LineGraph/LineGraph";
import { lineGraphMockData } from "./mock/graphsMockData";
import {
  GraphContentDiv,
  GraphLayout,
  GraphTitle,
  NoContentDiv,
  NoGraphIcon,
  TitleDivider,
} from "./style";
import {
  getDougnutData,
  getLineData,
  outputDoughnutObjectType,
  outputLineObjectType,
} from "./utils/graphData";

interface graphProps {
  title: string;
  graphType?: string;
}

const Graph = ({ title, graphType }: graphProps) => {
  const { articles } = useAppSelector((state) => state.apiData);

  const showGraphByType = () => {
    const graphData =
      graphType === graphString.graphTypeArray[0]
        ? getDougnutData(articles)
        : getLineData(articles);

    return graphType === graphString.graphTypeArray[0] ? (
      <GraphContentDiv>
        <DoughnutGraph data={graphData as outputDoughnutObjectType[]} />
      </GraphContentDiv>
    ) : graphType === graphString.graphTypeArray[1] ? (
      <GraphContentDiv>
        <LineGraph data={graphData as outputLineObjectType[]} />
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
