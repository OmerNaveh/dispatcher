import React from "react";

import ArrowSvg from "../../components/ArrowSvg/style";
import PrimaryButton from "../../components/PrimaryButton/style";

import { convertStringToLocaleDate } from "../../helpers/dateConverter";

import { cardString } from "../../strings/strings";
import {
  CardContent,
  CardImage,
  CardLayout,
  CardText,
  CardTitle,
} from "./style";

const Card = (props: APITypes.Article) => {
  const dateString = convertStringToLocaleDate(props.publishedAt);
  const openLinkInNewTab = () => {
    window.open(props.url);
  };
  return (
    <CardLayout>
      <CardImage src={props.urlToImage} alt="image"></CardImage>
      <CardContent>
        <CardText className="gray">{dateString}</CardText>
        <CardTitle>{props.title}</CardTitle>
        <CardText className="gray">{props.source.name}</CardText>
        <CardText className="limit">{props.description}</CardText>
        <PrimaryButton className="right" onClick={openLinkInNewTab}>
          {cardString.NavigateToDispatch} <ArrowSvg />
        </PrimaryButton>
      </CardContent>
    </CardLayout>
  );
};

export default Card;
