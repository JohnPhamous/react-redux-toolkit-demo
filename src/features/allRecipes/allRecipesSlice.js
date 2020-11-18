import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteRecipe,
  removeFavoriteRecipe,
} from "../favoriteRecipes/favoriteRecipesSlice";
import { selectSearchTerm } from "../search/searchSlice";

export const loadRecipes = createAsyncThunk(
  "allRecipes/getAllRecipes",
  async () => {
    const data = await fetch("api/recipes?limit=10");
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
  extraReducers: (builder) => {
    builder
      .addCase(loadRecipes.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        state.recipes = action.payload;
      })
      .addCase(loadRecipes.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
        state.recipes = [];
      })
      .addCase(addFavoriteRecipe.type, (state, action) => {
        state.recipes = state.recipes.filter(
          (recipe) => recipe.id !== action.payload.id
        );
      })
      .addCase(removeFavoriteRecipe.type, (state, action) => {
        state.recipes.push(action.payload);
      });
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
