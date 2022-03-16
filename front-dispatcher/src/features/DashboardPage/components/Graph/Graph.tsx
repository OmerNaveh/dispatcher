import { Divider } from "@mui/material";
import React from "react";
import { Container } from "../../../../components/UI/Container/Container";
import { graphString } from "../../../../strings/strings";
import { CardLayout, CardText, CardTitle } from "../../../Card/style";

import { NoGraphIcon, TitleDivider } from "./style";

interface graphProps {
  title: string;
  graphType?: string;
}

const Graph = ({ title, graphType }: graphProps) => {
  return (
    <CardLayout className={graphString.cardLayoutClass}>
      <CardTitle>{title}</CardTitle>
      <TitleDivider />
      {!graphType && (
        <Container className={graphString.containerClass}>
          <NoGraphIcon />
          <CardText>{graphString.noDataToDisplay}</CardText>
        </Container>
      )}
    </CardLayout>
  );
};

export default Graph;
