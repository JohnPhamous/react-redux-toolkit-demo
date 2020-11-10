import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "./searchSlice";

export const myThingsSlice = createSlice({
  name: "myThings",
  initialState: {
    things: [],
  },
  reducers: {
    addThing: (state, action) => {
      state.things.push(action.payload);
    },
    removeThing: (state, action) => {
      state.things = state.things.filter(
        (thing) => thing.name !== action.payload.name
      );
    },
  },
});

export const { addThing, removeThing } = myThingsSlice.actions;

export const selectMyThings = (state) => state.myThings.things;

export const selectFilteredMyThings = createSelector(
  selectMyThings,
  selectSearchTerm,
  (things, searchTerm) =>
    things.filter((thing) =>
      thing.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

export default myThingsSlice.reducer;
