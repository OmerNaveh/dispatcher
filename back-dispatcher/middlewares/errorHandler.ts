import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { API, internalServerErrors, Must } from "../constants/strings/strings";

export const errorHandler = (
  err: string,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err.includes(API)) res.status(401).send(err);
  if (err.includes(Must)) res.status(400).send(err);
  else res.status(500).send(internalServerErrors);

  //   res.status(429).send(tooManyRequests);
};
