import { createSlice } from "@reduxjs/toolkit";

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

export default myThingsSlice.reducer;
