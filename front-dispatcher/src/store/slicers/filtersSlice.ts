import { createSlice } from "@reduxjs/toolkit";
import { ReduxString } from "../../strings/strings";

const initialState = {
  endpoint: ReduxString.TopHeadlines,
  searchInput: "",
  sourceEverything: "",
  sourceTopHeadlines: "",
  dateFrom: "",
  language: "",
  sortBy: "",
  country: "",
  category: "",
};
const filterSlice = createSlice({
  name: ReduxString.Filters,
  initialState,
  reducers: {
    setEndpoint(state, action) {
      state.endpoint = action.payload;
    },
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setCountry(state, action) {
      state.country = action.payload;
    },
    setLanguage(state, action) {
      state.language = action.payload;
    },
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
    setDateFrom(state, action) {
      state.dateFrom = action.payload;
    },
    setSourceEverything(state, action) {
      state.sourceEverything = action.payload;
    },
    setSourceTopheadlines(state, action) {
      state.sourceTopHeadlines = action.payload;
    },
  },
});
export const filterActions = filterSlice.actions;
export type filterActionsStringTypes =
  | "setEndpoint"
  | "setSearchInput"
  | "setCategory"
  | "setCountry"
  | "setLanguage"
  | "setLanguage"
  | "setSortBy"
  | "setDateFrom"
  | "setSourceEverything"
  | "setSourceTopheadlines";
export default filterSlice;
