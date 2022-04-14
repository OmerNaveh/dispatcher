import express from "express";
import graphsRouter from "../GraphsDataRoute/graphsRoute";
import {
  getTopHeadlines,
  getTopHeadlinesFromDB,
} from "./topHeadlinesController";

const TopHeadlinesRouter = express.Router();

TopHeadlinesRouter.get("/", getTopHeadlines);
TopHeadlinesRouter.get("/db", getTopHeadlinesFromDB);
TopHeadlinesRouter.use("/graph", graphsRouter);

export default TopHeadlinesRouter;
