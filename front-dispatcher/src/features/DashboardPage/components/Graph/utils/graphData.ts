import moment from "moment";
import { graphString, usefulStrings } from "../../../../../strings/strings";

type dictionaryType = { [key: string]: number };
export type graphObjType = { name: string; value: number };

export const getDougnutData = (currentArticles: APITypes.Article[]) => {
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
  resData[4] = { name: graphString.Other, value: othersValue };
  return resData;
};

const separateObjecttoArrayOfObjects = (obj: dictionaryType) => {
  const res: graphObjType[] = [];
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
    lineGraphData.unshift({ name: `${usefulStrings.whiteSpace}`, value: 0 });
  }

  return lineGraphData;
};
