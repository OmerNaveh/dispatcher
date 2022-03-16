import React from "react";
import { Container } from "../../../../components/Container/Container";

import { searchBarStrings } from "../../../../strings/strings";
import { CardText } from "../../../Card/style";

import NotFoundIcon from "./style";

const NotFound = () => {
  return (
    <Container className={searchBarStrings.noMatchesContainerClasses}>
      <NotFoundIcon />
      <CardText>{searchBarStrings.noMatches}</CardText>
    </Container>
  );
};

export default NotFound;
