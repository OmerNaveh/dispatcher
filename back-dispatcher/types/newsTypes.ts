import { INewsApiArticle } from "ts-newsapi/lib/types";

export type Tags = string[];
interface tagsInterface {
  tags: Tags;
}
export type ArticleWithTags = INewsApiArticle & tagsInterface;
