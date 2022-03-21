import mock from "../../../../../mock/mockData.json";
import { apiStrings } from "../../../../../strings/strings";
type dougnutData = APITypes.Article[];
type dict = { [key: string]: number };
const getDougnutData = (data: dougnutData) => {
  const dict: dict = {};
  data.forEach(({ source }) => {
    if (apiStrings.Sources.includes(source.name)) {
      dict[source.name] ? (dict[source.name] = 1) : dict[source.name]++;
    }
  });
};
