import { reduxState } from "../../../../../store/slicers/filtersSlice";
import { ReduxString } from "../../../../../strings/strings";

export const shouldBeDisabledFunc = (
  dropDownCat: string,
  currentFilterState: reduxState
): boolean => {
  const { sourceTopheadlines, category, country } = currentFilterState;
  return dropDownCat === ReduxString.Sources && (country || category)
    ? true
    : dropDownCat !== ReduxString.Sources && sourceTopheadlines
    ? true
    : false;
};
