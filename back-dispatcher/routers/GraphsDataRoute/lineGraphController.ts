import { Request, Response, NextFunction } from "express";
import { dictionaryType } from "../../types/dataTypes";
import { separateObjecttoArrayOfObjects } from "../../utils/dataStructures";
import { INewsApiArticle } from "ts-newsapi/lib/types";
import moment from "moment";
import { badData, unknownError } from "../../constants/strings/strings";
export const getLineData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const articles: INewsApiArticle[] = req.body.data;
    if (!articles || !articles.length) throw badData;
    res.send(handleLineData(articles));
  } catch (error) {
    let message = unknownError;
    if (error instanceof Error) message = error.message;
    if (error instanceof TypeError) message = badData;
    if (typeof error == "string") message = error;
    next(message);
  }
};

const handleLineData = (currentArticles: INewsApiArticle[]) => {
  const dictionary: dictionaryType = {};
  const sortedArticles = [...currentArticles].sort(
    (a, b) =>
      new Date(a.publishedAt).valueOf() - new Date(b.publishedAt).valueOf()
  );
  sortedArticles.forEach((article) => {
    const articleDate = moment.utc(article.publishedAt).format("DD/MM");
    dictionary[articleDate]
      ? dictionary[articleDate]++
      : (dictionary[articleDate] = 1);
  });

  const lineGraphData = separateObjecttoArrayOfObjects(dictionary);
  if (lineGraphData.length === 1) {
    lineGraphData.push({
      name: "",
      value: 0,
    });
    lineGraphData.unshift({ name: "\xa0", value: 0 });
  }
  return lineGraphData;
};
