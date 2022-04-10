import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import topHeadlinesRouter from "./routers/topHeadlinesRoute";
import everythingRouter from "./routers/evertythingRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3003;
app.use("/TopHeadlines", topHeadlinesRouter);
app.use("/Everything", everythingRouter);
app.listen(() => {
  console.log(`running on ${port}`);
});
