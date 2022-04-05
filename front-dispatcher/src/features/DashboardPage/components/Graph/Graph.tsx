import React from "react";
import { useAppSelector } from "../../../../store";
import { graphString } from "../../../../strings/strings";
import { CardText } from "../../../Card/style";
import DoughnutGraph from "./components/DoughnutGraph/DoughnutGraph";
import LineGraph from "./components/LineGraph/LineGraph";
import {
  GraphContentDiv,
  GraphLayout,
  GraphTitle,
  NoContentDiv,
  NoGraphIcon,
  TitleDivider,
} from "./style";
import { getDougnutData, getLineData } from "./utils/graphData";

interface graphProps {
  title: string;
  graphType?: string;
}

const Graph = ({ title, graphType }: graphProps) => {
  const { articles } = useAppSelector((state) => state.apiData);

  const showGraphByType = () => {
    const graphData =
      graphType === graphString.Sources
        ? getDougnutData(articles)
        : getLineData(articles);

    return graphType === graphString.Sources ? (
      <GraphContentDiv>
        <DoughnutGraph data={graphData} />
      </GraphContentDiv>
    ) : graphType === graphString.Dates ? (
      <GraphContentDiv>
        <LineGraph data={graphData} />
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
