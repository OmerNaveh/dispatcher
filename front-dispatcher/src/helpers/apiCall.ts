import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { reduxState } from "../store/slicers/filtersSlice";
import { apiUrlsStrings, ReduxString } from "../strings/strings";
const defaultErrorResponse: APITypes.ApiResponseData = {
  status: "",
  articles: [],
  totalResults: 0,
};
interface axiosProps {
  url: string;
  requestFilter: any;
}
export const apiCallthunk = createAsyncThunk(
  "fetchApi",
  ({ url, requestFilter }: axiosProps) =>
    axios
      .post(url, { data: requestFilter })
      .then((response) => response.data as APITypes.ApiResponseData)
      .catch((error) => defaultErrorResponse)
);
export const apiCallScroll = createAsyncThunk(
  "scrollApi",
  ({ url, requestFilter }: axiosProps) =>
    axios
      .post(url, { data: requestFilter })
      .then((response) => response.data as APITypes.ApiResponseData)
      .catch((error) => defaultErrorResponse)
);
export const getApiUrl = (
  currentFilterState: reduxState,
  pageSize: number = 20,
  pageNumber: number = 1
) => {
  const filters = currentFilterState;

  let url: string = apiUrlsStrings.localServerUrl;
  url += `${
    filters.endpoint === ReduxString.TopHeadlines
      ? apiUrlsStrings.top
      : apiUrlsStrings.everything
  }`;
  const requestFilter = createRequestFilter(filters, pageNumber, pageSize);
  return { url, requestFilter };
};

const createRequestFilter = (
  currentFilterState: reduxState,
  pageNumber: number,
  pageSize: number
) => {
  const {
    endpoint,
    category,
    country,
    sourceTopheadlines,
    sourceEverything,
    searchInput,
    language,
    sortBy,
    date,
  } = currentFilterState;
  const requestFilter: any = {};
  if (endpoint === ReduxString.TopHeadlines) {
    if (category) requestFilter.category = category;
    if (country) requestFilter.country = country;
    if (sourceTopheadlines) requestFilter.sources = sourceTopheadlines;
  } else {
    if (sourceEverything) requestFilter.sources = sourceEverything;
    if (language) requestFilter.language = language;
    if (sortBy) requestFilter.sortBy = sortBy;
    if (date) requestFilter.date = date;
  }
  if (searchInput) requestFilter.q = searchInput;
  requestFilter.page = pageNumber;
  requestFilter.pageSize = pageSize;
  return requestFilter;
};
