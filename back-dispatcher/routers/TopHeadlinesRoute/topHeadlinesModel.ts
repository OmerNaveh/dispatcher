import mongoose from "mongoose";
import { topHeadlineModel } from "./topHeadlinesSchema";

export const findTopHeadlinesFromDB = async (
  filterQuery: any,
  skipNum: number,
  pageSize: number
) => {
  const dbData = await topHeadlineModel
    .find(filterQuery)
    .skip(skipNum)
    .limit(pageSize);
  return dbData;
};
