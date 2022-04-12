import express from "express";
import graphsRouter from "../GraphsDataRoute/graphsRoute";
import { getEverything } from "./everythingController";
const everythingRouter = express.Router();

everythingRouter.get("/", getEverything);
everythingRouter.use("/graph", graphsRouter);

export default everythingRouter;
