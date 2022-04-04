import { graphString } from "../../../../../strings/strings";

type objStringKeyNumberValue = { [key: string]: number };
type outputObjectType = { name: string; value: number };

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
  const res: outputObjectType[] = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    res.push({
      name: key,
      value: obj[key],
    });
  });
  return res;
};

export const lineData = () => {};
