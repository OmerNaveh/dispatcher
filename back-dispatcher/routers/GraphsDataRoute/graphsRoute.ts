import express from "express";
import { getDoughnutData } from "./doughnutGraphController";
import { getLineData } from "./lineGraphController";

const graphsRouter = express.Router();
graphsRouter.get("/line", getLineData);
graphsRouter.get("/doughnut", getDoughnutData);
export default graphsRouter;
