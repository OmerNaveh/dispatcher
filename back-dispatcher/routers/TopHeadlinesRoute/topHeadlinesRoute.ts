import express from "express";
import graphsRouter from "../GraphsDataRoute/graphsRoute";
import {
  getTopHeadlines,
  getTopHeadlinesFromDB,
} from "./topHeadlinesController";

const TopHeadlinesRouter = express.Router();

TopHeadlinesRouter.get("/", getTopHeadlinesFromDB);
TopHeadlinesRouter.get("/gateway", getTopHeadlines);
TopHeadlinesRouter.use("/graph", graphsRouter);

export default TopHeadlinesRouter;
