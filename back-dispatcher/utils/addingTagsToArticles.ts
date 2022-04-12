import { INewsApiArticle, INewsApiResponse } from "ts-newsapi/lib/types";
import {
  disasterTag,
  healthTag,
  moneyTag,
  politicsTag,
  sportTag,
  tagsKeywords,
  techTag,
  ViolenceTag,
} from "../constants/strings/strings";

export const addingTagsToArticles = (apiResponse: INewsApiResponse) => {
  if (!apiResponse.articles.length) return apiResponse;
};

const addTagsToArticle = (article: INewsApiArticle) => {
  const { description } = article;
  const tags = description ? getTagsByString(description) : [];
  return { ...article, tags };
};

const getTagsByString = (articleString: string) => {
  const tags: string[] = [];
  const lowerCaseArticleString = articleString.toLowerCase();
  if (!articleString) return tags;
  if (tagsKeywords.Money.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(moneyTag);
  if (tagsKeywords.Health.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(healthTag);
  if (tagsKeywords.Disaster.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(disasterTag);
  if (tagsKeywords.Politics.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(politicsTag);
  if (tagsKeywords.Sport.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(sportTag);
  if (tagsKeywords.Tech.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(techTag);
  if (tagsKeywords.Violence.some((tag) => lowerCaseArticleString.includes(tag)))
    tags.push(ViolenceTag);
  return tags;
};
