import { Request, Response, NextFunction } from "express";
import {
  API,
  badData,
  exceededFreeTierLimit,
  internalServerErrors,
  Must,
} from "../constants/strings/strings";

export const errorHandler = (
  err: string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.includes(API)) res.status(401).send(err);
  else if (err.includes(Must) || err === badData) res.status(400).send(err);
  else if (err === exceededFreeTierLimit) res.status(429).send(err);
  else res.status(500).send(internalServerErrors);
};
