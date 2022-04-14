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
import { everythingModel } from "./everythingModel";
import { sortData } from "../../utils/sortingHelper";
import { sourcesAsString } from "../../types/newsTypes";
import { languageRegexDetecor } from "../../utils/languageRegexCreator";
dotenv.config();

export const getEverything = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const filters: INewsApiEverythingParams = req.body;
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
    const {
      q,
      page = 1,
      pageSize = 20,
      sortBy,
      sources,
      from,
      language,
    }: INewsApiEverythingParams & sourcesAsString = req.body;

    const regexFilter = new RegExp(q || "");
    const sourcesRegexFilter = new RegExp(sources || "");
    const filterQuery: any = {
      description: { $regex: regexFilter, $options: "i" },
    };
    if (from) filterQuery.publishedAt = from;
    if (sources)
      filterQuery["source.name"] = {
        $regex: sourcesRegexFilter,
        $options: "i",
      };
    if (language)
      filterQuery.title = {
        $regex: languageRegexDetecor(language),
        $options: "i",
      };
    const skipNum = page * pageSize > pageSize ? page * pageSize : 0;
    const dbData = await everythingModel
      .find(filterQuery)
      .skip(skipNum)
      .limit(pageSize);
    const sortedData = sortData(sortBy, dbData, q);

    res.send({
      status: "ok",
      totalResults: dbData.length,
      articles: sortedData,
    });
  } catch (error) {
    let message = unknownError;
    if (error instanceof Error) message = error.message;
    if (typeof error == "string") message = error;
    next(message);
  }
};
