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
    res.send(apiResponse);
  } catch (error) {
    let message = unknownError;
    if (error instanceof Error) message = error.message;
    if (typeof error == "string") message = error;
    next(message);
  }
};
