import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./slicers/filtersSlice";

const store = configureStore({ reducer: { filters: filterSlice.reducer } });
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
