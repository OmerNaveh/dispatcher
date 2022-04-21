import mongoose from "mongoose";
import { topHeadlineModel } from "./topHeadlinesSchema";

export const findTopHeadlinesFromDB = async (
  filterQuery: any,
  skipNum: number,
  pageSize: number
) => {
  const totalResults = await topHeadlineModel.find(filterQuery).count();
  const skip = skipNum > totalResults ? skipNum - totalResults : skipNum;
  const dbData = await topHeadlineModel
    .find(filterQuery)
    .skip(skip)
    .limit(pageSize);
  return { dbData, totalResults };
};
