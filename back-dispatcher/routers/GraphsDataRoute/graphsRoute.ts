import express from "express";
import { getDoughnutData } from "./doughnutGraphController";
import { getLineData } from "./lineGraphController";
import { getTagsData } from "./tagsGraphController";

const graphsRouter = express.Router();
graphsRouter.get("/line", getLineData);
graphsRouter.get("/doughnut", getDoughnutData);
graphsRouter.get("/tags", getTagsData);
export default graphsRouter;
