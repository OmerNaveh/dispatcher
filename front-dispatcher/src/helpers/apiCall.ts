import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reduxState } from "../store/slicers/filtersSlice";
import { apiUrlsStrings, ReduxString } from "../strings/strings";
const defaultErrorResponse: APITypes.ApiResponseData = {
  status: "",
  articles: [],
  totalResults: 0,
};
export const apiCallthunk = createAsyncThunk("fetchApi", (url: string) =>
  axios
    .get(url)
    .then((response) => response.data as APITypes.ApiResponseData)
    .catch((error) => defaultErrorResponse)
);
export const apiCallScroll = createAsyncThunk("scrollApi", (url: string) =>
  axios
    .get(url)
    .then((response) => response.data as APITypes.ApiResponseData)
    .catch((error) => defaultErrorResponse)
);
export const getApiUrl = (
  currentFilterState: reduxState,
  pageSize: number = 20,
  pageNumber: number = 1
) => {
  const {
    endpoint,
    country,
    searchInput,
    category,
    sourceEverything,
    sourceTopheadlines,
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
        sourceTopheadlines
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
  url +=
    apiUrlsStrings.pageSize + pageSize + apiUrlsStrings.pageNumber + pageNumber;
  url += process.env.REACT_APP_APIKEY;
  return url;
};
