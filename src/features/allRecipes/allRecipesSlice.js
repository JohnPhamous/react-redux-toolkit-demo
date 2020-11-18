import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/searchSlice";

export const loadRecipes = createAsyncThunk(
  "allRecipes/getAllRecipes",
  async () => {
    const data = await fetch("api/recipes");
    const json = await data.json();

    return json;
  }
);

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: {
    [loadRecipes.pending]: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    [loadRecipes.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.recipes = action.payload;
    },
    [loadRecipes.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
      state.recipes = [];
    },
  },
});

export const selectAllRecipes = (state) => state.allRecipes.recipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default allRecipesSlice.reducer;
