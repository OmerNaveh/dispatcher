import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import { topHeadlinesParams } from "../../types/requstParams";
import { defaultPage, defaultPageSize } from "../../constants/numbers/numbers";
import {
  mustIncludeAtLeastOneTopHeadlines,
  unknownError,
} from "../../constants/strings/strings";

const NewsAPI = require("newsapi"); // unable to import
dotenv.config();

export const getTopHeadlines = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { q, category, country, sources, page, pageSize } =
      req.headers as topHeadlinesParams;
    if (!q && !sources && !category && !country)
      throw mustIncludeAtLeastOneTopHeadlines;
    const newsapiCall = new NewsAPI(process.env.APIKEY);
    const apiResponse = await newsapiCall.v2.topHeadlines({
      sources,
      q,
      category,
      country,
      page: page || defaultPage,
      pageSize: pageSize || defaultPageSize,
    });
    res.send(apiResponse);
  } catch (error) {
    let message = unknownError;
    if (error instanceof Error) message = error.message;
    if (typeof error == "string") message = error;
    next(message);
  }
};
