import mongoose from "mongoose";
import { everythingModel } from "./everythingSchema";
export const findEverythingFromDB = async (
  filterQuery: any,
  skipNum: number,
  pageSize: number
) => {
  const totalResults = await everythingModel.find(filterQuery).count();
  const skip = skipNum > totalResults ? skipNum - totalResults : skipNum;
  const dbData = await everythingModel
    .find(filterQuery)
    .skip(skip)
    .limit(pageSize);
  return { dbData, totalResults };
};
