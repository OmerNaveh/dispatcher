import {
  ApiNewsResponseStatus,
  INewsApiArticle,
  INewsApiResponse,
} from "ts-newsapi/lib/types";

export type Tags = string[];
interface tagsInterface {
  tags?: Tags;
}
export type ArticleWithTags = INewsApiArticle & tagsInterface;

export interface sourcesAsString {
  sources: string;
}

export interface ApiResonseWithTags {
  status: ApiNewsResponseStatus;
  totalResults: number;
  articles: ArticleWithTags[];
}
