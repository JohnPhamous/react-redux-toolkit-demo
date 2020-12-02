import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/searchSlice";

export const favoriteRecipesSlice = createSlice({
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addFavoriteRecipe: (state, action) => {
      state.push(action.payload);
    },
    removeFavoriteRecipe: (state, action) => {
      return state.filter((recipe) => recipe.name !== action.payload.name);
    },
  },
});

export const {
  addFavoriteRecipe,
  removeFavoriteRecipe,
} = favoriteRecipesSlice.actions;

export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
  const favoriteRecipes = selectFavoriteRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return favoriteRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default favoriteRecipesSlice.reducer;
