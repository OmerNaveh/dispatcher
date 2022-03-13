import React from "react";
import { searchBarStrings } from "../../../strings/searchBarStrings";
import { Container } from "../../UI/Container/Container";
import CardText from "../Card/CardText";
import NotFoundIcon from "./NotFoundIcon";

const NotFound = () => {
  return (
    <Container className={searchBarStrings.noMatchesContainerClasses}>
      <NotFoundIcon />
      <CardText>{searchBarStrings.noMatches}</CardText>
    </Container>
  );
};

export default NotFound;
