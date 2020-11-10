import { configureStore } from "@reduxjs/toolkit";
import allThingsReducer from "../slices/allThingsSlice";
import myThingsReducer from "../slices/myThingsSlice";

export default configureStore({
  reducer: {
    allThings: allThingsReducer,
    myThings: myThingsReducer,
  },
});
