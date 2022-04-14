import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import {
  exceededFreeTierLimit,
  mustIncludeAtLeastOneEverything,
  unknownError,
} from "../../constants/strings/strings";
import NewsAPI from "ts-newsapi";
import { INewsApiEverythingParams } from "ts-newsapi/lib/types";
import { isOverOneHundred } from "../../utils/limitRequeststoHundred";
import { addingTagsToArticles } from "../../utils/addingTagsToArticles";
import { sourcesAsString } from "../../types/newsTypes";
import { handleEverythingRequest } from "./everythingHandler";
dotenv.config();

export const getEverything = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters: INewsApiEverythingParams = req.body.data;
    if (!filters.q && !filters.sources && !filters.domains)
      throw mustIncludeAtLeastOneEverything;
    if (isOverOneHundred(filters.pageSize, filters.page))
      throw exceededFreeTierLimit;
    const newsapiCall = new NewsAPI(process.env.APIKEY as string);
    const apiResponse = await newsapiCall.getEverything(filters);
    const finalResponse = addingTagsToArticles(apiResponse);
    res.send(finalResponse);
  } catch (error) {
    let message = unknownError;
    if (error instanceof Error) message = error.message;
    if (typeof error == "string") message = error;
    next(message);
  }
};

export const getEverythingFromDB = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters: INewsApiEverythingParams & sourcesAsString = req.body.data;
    const { sortedData, totalResults } = await handleEverythingRequest(filters);
    res.send({
      status: "ok",
      totalResults: totalResults,
      articles: sortedData,
    });
  } catch (error) {
    let message = unknownError;
    if (error instanceof Error) message = error.message;
    if (typeof error == "string") message = error;
    next(message);
  }
};
