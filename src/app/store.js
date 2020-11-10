import { configureStore } from "@reduxjs/toolkit";
import allThingsReducer from "../slices/allThingsSlice";
import myThingsReducer from "../slices/myThingsSlice";
import searchReducer from "../slices/searchSlice";

export default configureStore({
  reducer: {
    allThings: allThingsReducer,
    myThings: myThingsReducer,
    search: searchReducer,
  },
});
