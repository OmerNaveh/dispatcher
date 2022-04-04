import React from "react";
import { Container } from "../../../../components/Container/Container";
import { useAppSelector } from "../../../../store";
import { cardString, ReduxString } from "../../../../strings/strings";
import Card from "../../../Card/Card";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import NotFound from "../NotFound/NotFound";
const CardContainer = () => {
  const { articles, totalResults, status } = useAppSelector(
    (state) => state.apiData
  );

  const allCards = () => {
    if (status === ReduxString.Loading) return <LoadingIcon />;
    if (!status || totalResults === 0) return <NotFound />;
    return articles.map((article) => {
      return (
        <Card
          key={article.title}
          publishedAt={article.publishedAt}
          source={
            article.source.id
              ? article.source
              : { name: article.source.name, id: "" }
          }
          author={article.author || ""}
          content={article.content}
          url={article.url}
          urlToImage={article.urlToImage || cardString.defaultImageUrl}
          description={article.description}
          title={article.title}
        />
      );
    });
  };
  return (
    <Container className="flex column cardContainer">{allCards()}</Container>
  );
};

export default CardContainer;
