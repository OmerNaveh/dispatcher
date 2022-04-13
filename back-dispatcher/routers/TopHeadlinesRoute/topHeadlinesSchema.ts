import mongoose from "mongoose";
import { topHeadlineEntry } from "../../types/schemaTypes";

const { Schema } = mongoose;

export const topheadlinesSchema = new Schema<topHeadlineEntry>({
  source: {
    id: String,
    name: String,
  },
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: String,
  content: String,
  country: String,
  category: String,
});
