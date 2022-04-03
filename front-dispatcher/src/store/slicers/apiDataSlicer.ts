import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { apiCallthunk } from "../../helpers/apiCall";
import { ReduxString } from "../../strings/strings";

const initialState: APITypes.ApiResponseData = {
  articles: [],
  status: "",
  totalResults: 0,
};
const apiDataSlice = createSlice({
  name: ReduxString.ApiSlicer,
  initialState,
  reducers: {},
  extraReducers: {
    [apiCallthunk.pending.type]: (state, action) => {
      state.status = "loading";
    },
    [apiCallthunk.fulfilled.type]: (
      state,
      action: PayloadAction<APITypes.ApiResponseData>
    ) => {
      state.articles = action.payload.articles;
      state.totalResults = action.payload.totalResults;
      state.status = action.payload.status;
    },
    [apiCallthunk.rejected.type]: (state, action) => {
      state = initialState;
    },
  },
});
export const apiDataSliceActions = apiDataSlice.actions;

export default apiDataSlice;
