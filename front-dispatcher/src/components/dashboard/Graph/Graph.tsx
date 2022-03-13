import { Divider } from "@mui/material";
import React from "react";
import { graphString } from "../../../strings/graphString";
import { Container } from "../../UI/Container/Container";
import CardLayout from "../Card/CardLayout";
import CardText from "../Card/CardText";
import CardTitle from "../Card/CardTitle";
import NoGraphIcon from "./NoGraphIcon";
import TitleDivider from "./TitleDivider";

interface graphProps {
  title: string;
  graph: string;
}

const Graph = ({ title, graph }: graphProps) => {
  return (
    <CardLayout className={graphString.cardLayoutClass}>
      <CardTitle>{title}</CardTitle>
      <TitleDivider />
      {!graph && (
        <Container className={graphString.containerClass}>
          <NoGraphIcon />
          <CardText>{graphString.noDataToDisplay}</CardText>
        </Container>
      )}
    </CardLayout>
  );
};

export default Graph;
