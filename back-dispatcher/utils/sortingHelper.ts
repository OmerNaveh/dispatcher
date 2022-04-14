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
  if (!description.length) return q.length;
  if (!q.length) return description.length;

  return Math.min(
    closestToQuery(description.substring(1), q) + 1,
    closestToQuery(q.substring(1), description) + 1,
    closestToQuery(description.substring(1), q.substring(1)) +
      (description[0] !== q[0] ? 1 : 0)
  );
};
