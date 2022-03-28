import { Divider } from "@mui/material";
import React from "react";
import { Container } from "../../../../components/Container/Container";

import { graphString } from "../../../../strings/strings";
import { CardLayout, CardText, CardTitle } from "../../../Card/style";

import {
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
  return (
    <GraphLayout>
      <div>
        <GraphTitle>{title}</GraphTitle>
        <TitleDivider />
      </div>
      {!graphType && (
        <NoContentDiv>
          <NoGraphIcon />
          <CardText>{graphString.noDataToDisplay}</CardText>
        </NoContentDiv>
      )}
    </GraphLayout>
  );
};

export default Graph;
