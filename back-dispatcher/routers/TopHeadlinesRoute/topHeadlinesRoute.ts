import express from "express";
import graphsRouter from "../GraphsDataRoute/graphsRoute";
import {
  getTopHeadlines,
  getTopHeadlinesFromDB,
} from "./topHeadlinesController";

const TopHeadlinesRouter = express.Router();


TopHeadlinesRouter.post("/", getTopHeadlinesFromDB);
TopHeadlinesRouter.post("/gateway", getTopHeadlines);
TopHeadlinesRouter.use("/graph", graphsRouter);

export default TopHeadlinesRouter;
