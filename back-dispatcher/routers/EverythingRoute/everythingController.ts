import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import {
  mustIncludeAtLeastOneEverything,
  unknownError,
} from "../../constants/strings/strings";
import { everythingParams } from "../../types/requstParams";
import { defaultPage, defaultPageSize } from "../../constants/numbers/numbers";
const NewsAPI = require("newsapi"); // unable to import
dotenv.config();

export const getEverything = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      q,
      sources,
      sortBy,
      from,
      to,
      language,
      page,
      domains,
      searchIn,
      excludeDomains,
      pageSize,
    } = req.headers as everythingParams;

    if (!q && !sources && !domains) throw mustIncludeAtLeastOneEverything;
    const newsapiCall = new NewsAPI(process.env.APIKEY);
    const apiResponse = await newsapiCall.v2.everything({
      q,
      sources,
      domains,
      language,
      sortBy,
      page: page || defaultPage,
      from,
      to,
      searchIn,
      excludeDomains,
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
