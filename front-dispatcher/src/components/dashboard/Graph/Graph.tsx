import { Divider } from "@mui/material";
import React from "react";
import { graphString } from "../../../strings/strings";

import { Container } from "../../UI/Container/Container";
import CardLayout from "../Card/CardLayout";
import CardText from "../Card/CardText";
import CardTitle from "../Card/CardTitle";
import NoGraphIcon from "./NoGraphIcon";
import TitleDivider from "./TitleDivider";

interface graphProps {
  title: string;
  graphType: string;
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
