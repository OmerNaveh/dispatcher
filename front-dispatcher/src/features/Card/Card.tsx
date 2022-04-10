import React from "react";

import ArrowSvg from "../../components/ArrowSvg/style";
import PrimaryButton from "../../components/PrimaryButton/style";

import { convertStringToLocaleDate } from "../../helpers/dateConverter";
import { isRTLCheck } from "../../helpers/isRTL";

import { cardString } from "../../strings/strings";
import {
  CardButtonContainer,
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
  const isRTL = isRTLCheck(props.title);

  return (
    <CardLayout isRTL={isRTL}>
      <CardImage
        isRTL={isRTL}
        src={props.urlToImage}
        alt="image"
        onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = cardString.defaultImageUrl;
        }}
      ></CardImage>
      <CardContent isRTL={isRTL}>
        <CardText className="gray">{dateString}</CardText>
        <CardTitle>{props.title}</CardTitle>
        <CardText className="gray">{props.source.name}</CardText>
        <CardText className="limit">{props.description}</CardText>
        <CardButtonContainer isRTL={isRTL}>
          <PrimaryButton onClick={openLinkInNewTab}>
            {cardString.NavigateToDispatch} <ArrowSvg />
          </PrimaryButton>
        </CardButtonContainer>
      </CardContent>
    </CardLayout>
  );
};

export default Card;
