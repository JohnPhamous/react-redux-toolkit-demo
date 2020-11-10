import { configureStore } from "@reduxjs/toolkit";
import allThingsReducer from "../features/allThings/allThingsSlice";
import myThingsReducer from "../features/myThings/myThingsSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
  reducer: {
    allThings: allThingsReducer,
    myThings: myThingsReducer,
    search: searchReducer,
  },
});
