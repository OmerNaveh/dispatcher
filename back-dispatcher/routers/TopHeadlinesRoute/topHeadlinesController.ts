import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { INewsApiTopHeadlinesParams } from "ts-newsapi/lib/types";
import {
  exceededFreeTierLimit,
  mustIncludeAtLeastOneTopHeadlines,
  unknownError,
} from "../../constants/strings/strings";
import NewsAPI from "ts-newsapi";
import { isOverOneHundred } from "../../utils/limitRequeststoHundred";
import { addingTagsToArticles } from "../../utils/addingTagsToArticles";
import { topHeadlineModel } from "./topHeadlinesModel";
import { sourcesAsString } from "../../types/newsTypes";
dotenv.config();

export const getTopHeadlines = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters: INewsApiTopHeadlinesParams = req.body;
    if (!filters.q && !filters.sources && !filters.category && !filters.country)
      throw mustIncludeAtLeastOneTopHeadlines;
    if (isOverOneHundred(filters.pageSize, filters.page))
      throw exceededFreeTierLimit;
    const newsapiCall = new NewsAPI(process.env.APIKEY as string);
    const apiResponse = await newsapiCall.getTopHeadlines(filters);
    const finalResponse = addingTagsToArticles(apiResponse);
    res.send(finalResponse);
  } catch (error) {
    let message = unknownError;
    if (error instanceof Error) message = error.message;
    if (typeof error == "string") message = error;
    next(message);
  }
};

export const getTopHeadlinesFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      q,
      page = 1,
      pageSize = 20,
      category,
      country,
      sources,
    }: INewsApiTopHeadlinesParams & sourcesAsString = req.body;
    const skipNum = page * pageSize > pageSize ? page * pageSize : 0;
    const filters = createFiltersObject({ q, category, country, sources });
    const dbData = await topHeadlineModel
      .find(filters)
      .skip(skipNum)
      .limit(pageSize);
    res.send({
      status: "ok",
      totalResults: dbData.length,
      articles: dbData,
    });
  } catch (error) {
    let message = unknownError;
    if (error instanceof Error) message = error.message;
    if (typeof error == "string") message = error;
    next(message);
  }
};

const createFiltersObject = ({
  q,
  category,
  country,
  sources,
}: INewsApiTopHeadlinesParams & sourcesAsString) => {
  const filters: any = {};
  if (q) {
    const regexFilter = new RegExp(q || "");
    filters.description = { $regex: regexFilter, $options: "i" };
  }
  if (category) filters.category = category;
  if (country) filters.country = country;
  if (sources) {
    const sourcesRegexFilter = new RegExp(sources || "");
    filters["source.name"] = { $regex: sourcesRegexFilter, $options: "i" };
  }
  return filters;
};
