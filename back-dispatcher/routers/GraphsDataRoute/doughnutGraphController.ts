import { Request, Response, NextFunction } from "express";
import { dictionaryType } from "../../types/dataTypes";
import { separateObjecttoArrayOfObjects } from "../../utils/dataStructures";
import { INewsApiArticle } from "ts-newsapi/lib/types";
import { badData, unknownError } from "../../constants/strings/strings";

export const getDoughnutData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const articles: INewsApiArticle[] = req.body;
    if (!articles.length) throw badData;
    res.send(handleDougnutData(articles));
  } catch (error) {
    let message = unknownError;
    if (error instanceof Error) message = error.message;
    if (error instanceof TypeError) message = badData;
    if (typeof error == "string") message = error;
    next(message);
  }
};

export const handleDougnutData = (currentArticles: INewsApiArticle[]) => {
  const dictionary: dictionaryType = {};
  currentArticles.forEach((article) => {
    dictionary[article.source.name]
      ? dictionary[article.source.name]++
      : (dictionary[article.source.name] = 1);
  });
  const fullDataArr = separateObjecttoArrayOfObjects(dictionary).sort(
    (a, b) => b.value - a.value
  );
  if (fullDataArr.length < 5) return fullDataArr;
  const resData = fullDataArr.slice(0, 4);
  const othersValue: number = fullDataArr
    .slice(4)
    .reduce((sum, source) => sum + source.value, 0);
  resData[4] = { name: "Other", value: othersValue };
  return resData;
};
