import { Skeleton } from "@mui/material";
import React, { useState } from "react";

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
  CardImageDiv,
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
  const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
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
      <CardImageDiv>
        {isImageLoading && (
          <Skeleton
            width={"100%"}
            height={"100%"}
            variant="rectangular"
            sx={{
              borderRadius: isRTL ? "0px 20px 20px 0px" : " 20px 0px 0px 20px",
            }}
          />
        )}
        <CardImage
          isRTL={isRTL}
          src={props.urlToImage}
          alt="image"
          onError={(event: React.SyntheticEvent<HTMLImageElement, Event>) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = cardString.defaultImageUrl;
            setIsImageLoading(false);
          }}
          onLoad={() => {
            setIsImageLoading(false);
          }}
        />
      </CardImageDiv>

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
