import {
  filterActionsStringTypes,
  filterStringOptions,
} from "../store/slicers/filtersSlice";
import { filterActionsStrings, ReduxString } from "../strings/strings";
import { lowerCaseFirstLetter } from "./stringFunctions";

export const chooseCorrectActionType = (
  cat: string,
  searchMainQuery: string
) => {
  if (cat === ReduxString.Sources) {
    return searchMainQuery !== ReduxString.TopHeadlines
      ? filterActionsStrings[7]
      : filterActionsStrings[8];
  }

  if (cat === ReduxString.SearchIn) return filterActionsStrings[0];
  return cat !== ReduxString.SortBy && cat !== ReduxString.Sources
    ? (`${ReduxString.Set}${cat}` as filterActionsStringTypes)
    : filterActionsStrings[1];
};

export const convertActionStringToCatString = (
  actionString: filterActionsStringTypes
): filterStringOptions => {
  const sliceActionString = actionString.slice(3);
  return lowerCaseFirstLetter(sliceActionString) as filterStringOptions;
};
