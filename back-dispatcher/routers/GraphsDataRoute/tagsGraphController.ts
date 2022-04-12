import { Request, Response, NextFunction } from "express";
import { badData, unknownError } from "../../constants/strings/strings";
import { dictionaryType } from "../../types/dataTypes";
import { ArticleWithTags } from "../../types/newsTypes";
import { separateObjecttoArrayOfObjects } from "../../utils/dataStructures";
export const getTagsData = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const articles: ArticleWithTags[] = req.body;
    if (!articles.length) throw badData;
    res.send(handleTagsData(articles));
  } catch (error) {
    console.log(error);

    let message = unknownError;
    if (error instanceof Error) message = error.message;
    if (error instanceof TypeError) message = badData;
    if (typeof error == "string") message = error;
    next(message);
  }
};

const handleTagsData = (currentArticles: ArticleWithTags[]) => {
  const dictionary: dictionaryType = {};
  currentArticles.forEach((article) => {
    if (article.tags.length) {
      article.tags.forEach((tag) => {
        dictionary[tag] ? dictionary[tag]++ : (dictionary[tag] = 1);
      });
    }
  });
  return separateObjecttoArrayOfObjects(dictionary).sort(
    (a, b) => b.value - a.value
  );
};
