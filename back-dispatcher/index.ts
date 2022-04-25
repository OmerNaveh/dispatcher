import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";
import topHeadlinesRouter from "./routers/TopHeadlinesRoute/topHeadlinesRoute";
import everythingRouter from "./routers/EverythingRoute/evertythingRoute";
import { errorHandler } from "./middlewares/errorHandler";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();

const port = process.env.PORT || 3003;

app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use("/top", topHeadlinesRouter);
app.use("/everything", everythingRouter);

app.use(errorHandler);

const server = app.listen(port, () => {
  console.log(`running on ${port}`);
  mongoose
    .connect(process.env.MONGOURI as string)
    .then(() => console.log("connected to mongoDB"))
    .catch((error) => console.log(error));
});
export default server;
