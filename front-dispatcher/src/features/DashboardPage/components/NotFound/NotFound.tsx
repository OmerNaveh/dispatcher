import React from "react";
import { useAppSelector } from "../../../../store";
import { ReduxString, searchBarStrings } from "../../../../strings/strings";
import { CardText } from "../../../Card/style";

import { NotFoundContainer, NotFoundIcon } from "./style";

const NotFound = () => {
  const { endpoint } = useAppSelector((state) => state.filters);

  return (
    <NotFoundContainer>
      <NotFoundIcon />
      <CardText>{searchBarStrings.noMatches}</CardText>
      {endpoint === ReduxString.Everything && (
        <CardText>{ReduxString.TrySearching}</CardText>
      )}
    </NotFoundContainer>
  );
};

export default NotFound;
