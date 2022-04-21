import { INewsApiArticle } from "ts-newsapi/lib/types";
import { ArticleWithTags } from "./newsTypes";

export interface everythingAddOns {
  popularity: number;
}
export type everythingEntry = ArticleWithTags & everythingAddOns;

export interface topHeadlinesAddOns {
  country?: string;
  category?: string;
}
export type topHeadlineEntry = ArticleWithTags & topHeadlinesAddOns;
