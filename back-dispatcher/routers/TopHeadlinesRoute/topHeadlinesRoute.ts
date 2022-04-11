import express from "express";
import { getTopHeadlines } from "./topHeadlinesController";
const TopHeadlinesRouter = express.Router();
TopHeadlinesRouter.get("/", getTopHeadlines);
export default TopHeadlinesRouter;
