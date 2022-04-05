import moment from "moment";
import { graphString } from "../../../../../strings/strings";

type objStringKeyNumberValue = { [key: string]: number };
export type outputDoughnutObjectType = { name: string; value: number };
export type outputLineObjectType = { identifier: string; value: number };

export const getDougnutData = (currentArticles: APITypes.Article[]) => {
  const dictionary: objStringKeyNumberValue = {};
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
  resData[4] = { name: graphString.Other, value: othersValue };
  return resData;
};

const separateObjecttoArrayOfObjects = (obj: objStringKeyNumberValue) => {
  const res: outputDoughnutObjectType[] = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    res.push({
      name: key,
      value: obj[key],
    });
  });
  return res;
};

export const getLineData = (currentArticles: APITypes.Article[]) => {
  const dictionary: objStringKeyNumberValue = {};
  const sortedArticlesArray = [...currentArticles].sort(
    (a, b) =>
      new Date(a.publishedAt).valueOf() - new Date(b.publishedAt).valueOf()
  );
  sortedArticlesArray.forEach((article) => {
    const articleIdentifierDate = moment
      .utc(article.publishedAt)
      .format("DD/MM");
    dictionary[articleIdentifierDate]
      ? dictionary[articleIdentifierDate]++
      : (dictionary[articleIdentifierDate] = 1);
  });

  return separateLineObjecttoArrayOfObjects(dictionary);
};

const separateLineObjecttoArrayOfObjects = (obj: objStringKeyNumberValue) => {
  const res: outputLineObjectType[] = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    res.push({
      identifier: key,
      value: obj[key],
    });
  });
  return res;
};
