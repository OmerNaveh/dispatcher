import React from "react";
import CardText from "../../components/dashboard/Card/CardText";
import CardImage from "../../components/dashboard/Card/CardImage";
import CardLayout from "../../components/dashboard/Card/CardLayout";
import CardTitle from "../../components/dashboard/Card/CardTitle";
import ArrowSvg from "../../components/UI/ArrowSvg/ArrowSvg";
import PrimaryButton from "../../components/UI/PrimaryButton/PrimaryButton";
import { convertStringToLocaleDate } from "../../helpers/dateConverter";

export default function Card(props: APITypes.Article) {
  const dateString = convertStringToLocaleDate(props.publishedAt);

  return (
    <CardLayout>
      <CardImage src={props.urlToImage} alt="image"></CardImage>
      <CardTitle>{props.title}</CardTitle>
      <CardText className="gray">{dateString}</CardText>
      <CardText className="gray">{props.source.name}</CardText>
      <PrimaryButton>
        NAVIGATE TO DISPATCH <ArrowSvg />
      </PrimaryButton>
    </CardLayout>
  );
}
