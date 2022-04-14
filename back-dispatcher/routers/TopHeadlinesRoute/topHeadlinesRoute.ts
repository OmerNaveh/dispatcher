import express from "express";
import graphsRouter from "../GraphsDataRoute/graphsRoute";
import { getTopHeadlines } from "./topHeadlinesController";

const TopHeadlinesRouter = express.Router();

TopHeadlinesRouter.post("/", getTopHeadlines);
TopHeadlinesRouter.use("/graph", graphsRouter);

export default TopHeadlinesRouter;
