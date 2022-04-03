import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reduxState } from "../store/slicers/filtersSlice";
import { apiUrlsStrings, ReduxString } from "../strings/strings";

export const apiCallthunk = createAsyncThunk("fetchApi", (url: string) =>
  axios
    .get(url)
    .then((response) => response.data as APITypes.ApiResponseData)
    .catch((error) => error)
);
export const getApiUrl = (currentFilterState: reduxState) => {
  const {
    endpoint,
    country,
    searchInput,
    category,
    sourceEverything,
    sourceTopHeadlines,
    sortBy,
    date,
    language,
  } = currentFilterState;
  let url: string = apiUrlsStrings.apiBaseUrl;
  url += `${
    endpoint === ReduxString.TopHeadlines
      ? apiUrlsStrings.topHeadlines +
        apiUrlsStrings.questionMark +
        apiUrlsStrings.query +
        searchInput +
        apiUrlsStrings.country +
        country +
        apiUrlsStrings.category +
        category +
        apiUrlsStrings.sources +
        sourceTopHeadlines
      : endpoint +
        apiUrlsStrings.questionMark +
        apiUrlsStrings.query +
        searchInput +
        apiUrlsStrings.sortBy +
        sortBy +
        apiUrlsStrings.dateFrom +
        date +
        apiUrlsStrings.dateTo +
        date +
        apiUrlsStrings.sources +
        sourceEverything +
        apiUrlsStrings.language +
        language
  }`;
  url += apiUrlsStrings.apikey;
  return url;
};
