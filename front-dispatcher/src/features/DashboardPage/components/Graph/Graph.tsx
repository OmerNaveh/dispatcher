import { Divider } from "@mui/material";
import React from "react";
import { Container } from "../../../../components/Container/Container";

import { graphString } from "../../../../strings/strings";
import { CardLayout, CardText, CardTitle } from "../../../Card/style";

import { GraphLayout, GraphTitle, NoGraphIcon, TitleDivider } from "./style";

interface graphProps {
  title: string;
  graphType?: string;
}

const Graph = ({ title, graphType }: graphProps) => {
  return (
    <GraphLayout>
      <GraphTitle>{title}</GraphTitle>
      <TitleDivider />
      {!graphType && (
        <Container className={graphString.containerClass}>
          <NoGraphIcon />
          <CardText>{graphString.noDataToDisplay}</CardText>
        </Container>
      )}
    </GraphLayout>
  );
};

export default Graph;
