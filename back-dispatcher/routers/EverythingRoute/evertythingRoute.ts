import express from "express";
import { getEverything } from "./everythingController";
const everythingRouter = express.Router();
everythingRouter.get("/", getEverything);

export default everythingRouter;
