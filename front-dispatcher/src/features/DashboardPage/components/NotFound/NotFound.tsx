import React from "react";
import { searchBarStrings } from "../../../../strings/strings";
import { CardText } from "../../../Card/style";

import { NotFoundContainer, NotFoundIcon } from "./style";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundIcon />
      <CardText>{searchBarStrings.noMatches}</CardText>
    </NotFoundContainer>
  );
};

export default NotFound;
