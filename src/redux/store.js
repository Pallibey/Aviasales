import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./reducer";

const store = configureStore({
  reducer: {
    filters: filtersSlice,
  },
});

export default store;
