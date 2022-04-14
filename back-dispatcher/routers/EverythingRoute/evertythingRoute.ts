import express from "express";
import graphsRouter from "../GraphsDataRoute/graphsRoute";
import { getEverything, getEverythingFromDB } from "./everythingController";
const everythingRouter = express.Router();

everythingRouter.get("/", getEverything);
everythingRouter.use("/graph", graphsRouter);
everythingRouter.get("/db", getEverythingFromDB);
export default everythingRouter;
