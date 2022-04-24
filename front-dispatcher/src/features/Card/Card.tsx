import React from "react";

import ArrowSvg from "../../components/ArrowSvg/style";
import PrimaryButton from "../../components/PrimaryButton/style";

import { convertStringToLocaleDate } from "../../helpers/dateConverter";
import { isRTLCheck } from "../../helpers/isRTL";

import { cardString } from "../../strings/strings";
import {
  CardButtonContainer,
  CardContent,
  CardDate,
  CardImage,
  CardLayout,
  CardTagsNDateContainer,
  CardText,
  CardTitle,
  Tag,
  TagsContainer,
} from "./style";

const Card = (props: APITypes.Article) => {
  const dateString = convertStringToLocaleDate(props.publishedAt);
  const openLinkInNewTab = () => {
    window.open(props.url);
  };
  const isRTL = isRTLCheck(props.title);
  const showTags = () => {
    return !props.tags.length ? (
      <></>
    ) : (
      <TagsContainer>
        {props.tags.map(
          (tag, index) =>
            index < 2 && (
              <Tag last={!isRTL && index === props.tags.length - 1}>{tag}</Tag>
            )
        )}
        {props.tags.length > 2 && (
          <Tag last={!isRTL}>{`+${props.tags.length - 2}`}</Tag>
        )}
      </TagsContainer>
    );
  };
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
        <CardTagsNDateContainer>
          <CardDate>{dateString}</CardDate>
          {showTags()}
        </CardTagsNDateContainer>
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
