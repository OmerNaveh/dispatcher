import mongoose from "mongoose";
import { everythingEntry } from "../../types/schemaTypes";

const { Schema } = mongoose;

export const everythingSchema = new Schema<everythingEntry>({
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
  popularity: Number,
});
