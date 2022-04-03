import { configureStore } from "@reduxjs/toolkit";
import apiDataSlice from "./slicers/apiDataSlicer";
import filterSlice from "./slicers/filtersSlice";

const store = configureStore({
  reducer: { filters: filterSlice.reducer, apiData: apiDataSlice.reducer },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
