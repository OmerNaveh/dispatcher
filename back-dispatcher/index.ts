import express, { Express } from "express";
import dotenv from "dotenv";
import topHeadlinesRouter from "./routers/TopHeadlinesRoute/topHeadlinesRoute";
import everythingRouter from "./routers/EverythingRoute/evertythingRoute";
import { errorHandler } from "./middlewares/errorHandler";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3003;

app.use(express.json());
app.use("/top", topHeadlinesRouter);
app.use("/everything", everythingRouter);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`running on ${port}`);
});
