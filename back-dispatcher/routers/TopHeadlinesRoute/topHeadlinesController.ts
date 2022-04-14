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
import { sourcesAsString } from "../../types/newsTypes";
import { handleTopHeadlinesData } from "./topHeadlinesHandler";
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
    const filters: INewsApiTopHeadlinesParams & sourcesAsString = req.body;
    const dbData = await handleTopHeadlinesData(filters);
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
