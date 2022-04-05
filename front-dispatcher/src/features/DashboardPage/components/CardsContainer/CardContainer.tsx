import React, { useState } from "react";
import { Container } from "../../../../components/Container/Container";
import { useAppDispatch, useAppSelector } from "../../../../store";
import { cardString, ReduxString } from "../../../../strings/strings";
import Card from "../../../Card/Card";
import LoadingIcon from "../LoadingIcon/LoadingIcon";
import NotFound from "../NotFound/NotFound";
import InfiniteScroll from "react-infinite-scroll-component";
import { apiCallScroll, getApiUrl } from "../../../../helpers/apiCall";
const CardContainer = () => {
  const dispatch = useAppDispatch();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { articles, totalResults, status } = useAppSelector(
    (state) => state.apiData
  );
  const filterState = useAppSelector((state) => state.filters);
  const nextScroll = () => {
    setPageNumber((prevNumber) => prevNumber + 1);
    const url = getApiUrl(filterState, 20, pageNumber + 1);
    dispatch(apiCallScroll(url));
  };

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
    <Container id={"scrollableDiv"} className="flex column cardContainer">
      <InfiniteScroll
        dataLength={articles.length}
        next={nextScroll}
        loader={<LoadingIcon />}
        height="99%"
        hasMore={articles.length < totalResults}
        scrollableTarget={"scrollableDiv"}
      >
        {allCards()}
      </InfiniteScroll>
    </Container>
  );
};

export default CardContainer;
