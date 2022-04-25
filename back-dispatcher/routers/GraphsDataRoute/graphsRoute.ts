import express from "express";
import { getDoughnutData } from "./doughnutGraphController";
import { getLineData } from "./lineGraphController";
import { getTagsData } from "./tagsGraphController";

const graphsRouter = express.Router();

graphsRouter.post("/line", getLineData);
graphsRouter.post("/doughnut", getDoughnutData);
graphsRouter.post("/tags", getTagsData);
export default graphsRouter;
