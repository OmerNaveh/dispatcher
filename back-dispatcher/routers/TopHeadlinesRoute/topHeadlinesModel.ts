import mongoose from "mongoose";
import { topheadlinesSchema } from "./topHeadlinesSchema";

export const topHeadlineModel = mongoose.model(
  "topHeadlineArticle",
  topheadlinesSchema
);
