import React from "react";
import CardText from "../../components/dashboard/Card/CardText";
import CardImage from "../../components/dashboard/Card/CardImage";
import CardLayout from "../../components/dashboard/Card/CardLayout";
import CardTitle from "../../components/dashboard/Card/CardTitle";
import ArrowSvg from "../../components/UI/ArrowSvg/ArrowSvg";
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton";
import { convertStringToLocaleDate } from "../../helpers/dateConverter";
import CardContent from "../../components/dashboard/Card/CardContent";
import { cardString } from "../../strings/cardStrings";

export default function Card(props: APITypes.Article) {
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
}
