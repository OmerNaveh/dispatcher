import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReduxString } from "../../strings/strings";
export interface reduxState {
  endpoint: string;
  searchInput: string;
  sourceEverything: string;
  sourceTopheadlines: string;
  date: string;
  language: string;
  sortBy: string;
  country: string;
  category: string;
}
const initialState: reduxState = {
  endpoint: ReduxString.TopHeadlines,
  searchInput: "",
  sourceEverything: "",
  sourceTopheadlines: "",
  date: "",
  language: "",
  sortBy: "",
  country: "",
  category: "",
};
const filterSlice = createSlice({
  name: ReduxString.Filters,
  initialState,
  reducers: {
    setEndpoint(state, action: PayloadAction<string>) {
      state.endpoint = action.payload;
      if (action.payload === ReduxString.TopHeadlines) {
        state.language = "";
        state.sourceEverything = "";
        state.sortBy = "";
        state.date = "";
      } else {
        state.country = "";
        state.sourceTopheadlines = "";
        state.category = "";
      }
    },
    setSearchInput(state, action: PayloadAction<string>) {
      state.searchInput = action.payload;
    },
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setCountry(state, action: PayloadAction<string>) {
      state.country = action.payload;
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.date = action.payload;
    },
    setSourceEverything(state, action: PayloadAction<string>) {
      state.sourceEverything = action.payload;
    },
    setSourceTopheadlines(state, action: PayloadAction<string>) {
      state.sourceTopheadlines = action.payload;
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
  | "setDate"
  | "setSourceEverything"
  | "setSourceTopheadlines";
export type filterStringOptions =
  | "endpoint"
  | "searchInput"
  | "sourceEverything"
  | "sourceTopheadlines"
  | "date"
  | "language"
  | "sortBy"
  | "country"
  | "category";
export default filterSlice;
