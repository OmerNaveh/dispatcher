import React from "react";
import { Container } from "../../UI/Container/Container";
import mockData from "../../../mock/mockData.json";
import Card from "../../../features/Card/Card";
const CardContainer = () => {
  const allCards = () => {
    return mockData.articles.map((article) => {
      return (
        <Card
          publishedAt={article.publishedAt}
          source={
            article.source.id
              ? article.source
              : { name: article.source.name, id: "" }
          }
          author={article.author || ""}
          content={article.content}
          url={article.url}
          urlToImage={article.urlToImage}
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
