import { configureStore } from "@reduxjs/toolkit";
import allRecipesReducer from "../features/allRecipes/allRecipesSlice";
import favoriteRecipesReducer from "../features/favoriteRecipes/favoriteRecipesSlice";
import searchReducer from "../features/search/searchSlice";

export default configureStore({
  reducer: {
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesReducer,
    search: searchReducer,
  },
});
