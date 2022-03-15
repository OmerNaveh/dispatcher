import React from "react";
import { CardText } from "../../../features/Card/style";
import { searchBarStrings } from "../../../strings/strings";

import { Container } from "../../UI/Container/Container";
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
