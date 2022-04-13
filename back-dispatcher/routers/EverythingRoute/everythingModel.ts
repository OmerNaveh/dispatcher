import mongoose from "mongoose";
import { everythingSchema } from "./everythingSchema";

export const everythingModel = mongoose.model(
  "everythingArticle",
  everythingSchema
);
