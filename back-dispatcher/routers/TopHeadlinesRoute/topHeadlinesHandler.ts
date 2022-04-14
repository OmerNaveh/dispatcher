import { INewsApiTopHeadlinesParams } from "ts-newsapi/lib/types";
import { sourcesAsString } from "../../types/newsTypes";
import { findTopHeadlinesFromDB } from "./topHeadlinesModel";

export const handleTopHeadlinesData = async (
  requestFilters: INewsApiTopHeadlinesParams & sourcesAsString
) => {
  const {
    q,
    page = 1,
    pageSize = 20,
    category,
    country,
    sources,
  }: INewsApiTopHeadlinesParams & sourcesAsString = requestFilters;
  const skipNum = page * pageSize > pageSize ? page * pageSize : 0;
  const filters = createFiltersObject({ q, category, country, sources });
  const dbData = await findTopHeadlinesFromDB(filters, skipNum, pageSize);
  return dbData;
};

const createFiltersObject = ({
  q,
  category,
  country,
  sources,
}: INewsApiTopHeadlinesParams & sourcesAsString) => {
  const filters: any = {};
  if (q) {
    const regexFilter = new RegExp(q || "");
    filters.description = { $regex: regexFilter, $options: "i" };
  }
  if (category) filters.category = category;
  if (country) filters.country = country;
  if (sources) {
    const sourcesRegexFilter = new RegExp(sources || "");
    filters["source.name"] = { $regex: sourcesRegexFilter, $options: "i" };
  }
  return filters;
};
