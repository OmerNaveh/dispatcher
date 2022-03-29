import { filterActionsStringTypes } from "../store/slicers/filtersSlice";
import { filterActionsStrings, ReduxString } from "../strings/strings";

export const chooseCorrectActionType = (
  cat: string,
  searchMainQuery: string
) => {
  if (cat === ReduxString.SearchIn) return filterActionsStrings[0];
  return cat !== ReduxString.SortBy && cat !== ReduxString.Sources
    ? (`${ReduxString.Set}${cat}` as filterActionsStringTypes)
    : cat === ReduxString.SortBy
    ? filterActionsStrings[1]
    : searchMainQuery !== ReduxString.TopHeadlines
    ? filterActionsStrings[8]
    : filterActionsStrings[9];
};
