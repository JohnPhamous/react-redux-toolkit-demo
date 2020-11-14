import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/searchSlice";

export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: {
    recipes: [],
  },
  reducers: {
    addFavoriteRecipe: (state, action) => {
      state.recipes.push(action.payload);
    },
    removeFavoriteRecipe: (state, action) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.name !== action.payload.name
      );
    },
  },
});

export const {
  addFavoriteRecipe,
  removeFavoriteRecipe,
} = favoriteRecipesSlice.actions;

export const selectFavoriteRecipes = (state) => state.favoriteRecipes.recipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default favoriteRecipesSlice.reducer;
