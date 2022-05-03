import { ApiNewsSort } from "ts-newsapi/lib/types";
import { everythingEntry } from "../types/schemaTypes";

export const sortData = (
  sortBy: ApiNewsSort | undefined,
  data: everythingEntry[],
  query: string = ""
) => {
  if (!sortBy) return data;
  if (sortBy === "publishedAt")
    return data.sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  if (sortBy === "popularity")
    return data.sort((a, b) => b.popularity - a.popularity);

  if (sortBy === "relevancy")
    return data.sort(
      (a, b) =>
        closestToQuery(a.description || "", query) -
        closestToQuery(b.description || "", query)
    );
};

const closestToQuery = (description: string, q: string): number => {
  const regex = new RegExp(q, "ig");
  const regexMatch = description.match(regex);
  if (!regexMatch) return 0;
  return regexMatch.length;
};
