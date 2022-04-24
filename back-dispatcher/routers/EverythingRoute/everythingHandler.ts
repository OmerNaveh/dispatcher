import { INewsApiEverythingParams } from "ts-newsapi/lib/types";
import { sourcesAsString } from "../../types/newsTypes";
import { languageRegexDetecor } from "../../utils/languageRegexCreator";
import { sortData } from "../../utils/sortingHelper";
import { findEverythingFromDB } from "./everythingModel";

export const handleEverythingRequest = async (
  filters: INewsApiEverythingParams & sourcesAsString
) => {
  const {
    q,
    page = 1,
    pageSize = 20,
    sortBy,
    sources,
    from,
    language,
  } = filters;
  const regexFilter = new RegExp(q || "");
  const sourcesRegexFilter = new RegExp(sources || "");
  const filterQuery: any = {
    description: { $regex: regexFilter, $options: "i" },
  };
  if (from) filterQuery.publishedAt = { $regex: from };
  if (sources)
    filterQuery["source.name"] = {
      $regex: sourcesRegexFilter,
      $options: "i",
    };
  if (language)
    filterQuery.title = {
      $regex: languageRegexDetecor(language),
      $options: "i",
    };

  const skipNum = page * pageSize > pageSize ? page * pageSize : 0;
  const { dbData, totalResults } = await findEverythingFromDB(
    filterQuery,
    skipNum,
    pageSize
  );
  const sortedData = sortData(sortBy, dbData, q) || [];
  return { sortedData, totalResults };
};
