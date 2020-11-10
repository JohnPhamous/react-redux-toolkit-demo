import { configureStore } from "@reduxjs/toolkit";
import allThingsReducer from "../slices/allThingsSlice";

export default configureStore({
  reducer: {
    allThings: allThingsReducer,
  },
  devTools: true,
});
