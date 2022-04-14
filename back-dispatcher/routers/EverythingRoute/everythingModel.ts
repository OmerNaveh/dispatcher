import mongoose from "mongoose";
import { everythingModel } from "./everythingSchema";
export const findEverythingFromDB = async (
  filterQuery: any,
  skipNum: number,
  pageSize: number
) => {
  const dbData = await everythingModel
    .find(filterQuery)
    .skip(skipNum)
    .limit(pageSize);
  return dbData;
};
