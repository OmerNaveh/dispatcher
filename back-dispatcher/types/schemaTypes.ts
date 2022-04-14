import { INewsApiArticle } from "ts-newsapi/lib/types";

export interface everythingAddOns {
  popularity: number;
}
export type everythingEntry = INewsApiArticle & everythingAddOns;

export interface topHeadlinesAddOns {
  country?: string;
  category?: string;
}
export type topHeadlineEntry = INewsApiArticle & topHeadlinesAddOns;
