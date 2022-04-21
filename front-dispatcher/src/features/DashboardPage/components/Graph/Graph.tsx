import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../../../store";
import { graphServerUrls, graphString } from "../../../../strings/strings";
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
import { graphObjType } from "./utils/graphData";

interface graphProps {
  title: string;
  graphType?: string;
}

const Graph = ({ title, graphType }: graphProps) => {
  const { articles } = useAppSelector((state) => state.apiData);
  const [graphData, setGraphData] = useState<graphObjType[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const requestUrl =
          graphType === graphString.Sources
            ? graphServerUrls.Doughnut
            : graphType === graphString.Dates
            ? graphServerUrls.Line
            : graphServerUrls.Tags;
        const serverResponse = await axios.post(requestUrl, {
          data: articles,
        });
        const pulledData: graphObjType[] = serverResponse.data;
        setGraphData(pulledData);
      } catch (error) {
        setGraphData([]);
      }
    })();
  }, [articles]);
  const showGraphByType = () => {
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
      {!graphType ||
      !articles ||
      articles.length === 0 ||
      !graphData ||
      !graphData.length
        ? showNoGraphType()
        : graphType && showGraphByType()}
    </GraphLayout>
  );
};

export default Graph;
