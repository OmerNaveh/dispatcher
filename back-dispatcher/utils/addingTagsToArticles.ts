import { INewsApiArticle, INewsApiResponse } from "ts-newsapi/lib/types";

export const addingTagsToArticles = (apiResponse: INewsApiResponse) => {
  if (!apiResponse.articles.length) return apiResponse;
};

const addTagsToArticle = (article: INewsApiArticle) => {
  article.description;
};

const getTagsByString = (articleString: string) => {
  const tags: string[] = [];
};
