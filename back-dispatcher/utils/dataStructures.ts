import { dictionaryType, graphObjType } from "../types/dataTypes";

export const separateObjecttoArrayOfObjects = (obj: dictionaryType) => {
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
