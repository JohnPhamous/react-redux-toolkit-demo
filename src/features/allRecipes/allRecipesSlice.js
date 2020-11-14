import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../search/searchSlice";

export const allRecipesSlice = createSlice({
  name: "allRecipes",
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {
    startGetRecipes: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    endGetRecipesWithSuccess: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.recipes = action.payload;
    },
    endGetRecipesWithError: (state) => {
      state.isLoading = false;
      state.hasError = true;
      state.recipes = [];
    },
  },
});

export const {
  startGetRecipes,
  endGetRecipesWithSuccess,
  endGetRecipesWithError,
} = allRecipesSlice.actions;

export const selectAllRecipes = (state) => state.allRecipes.recipes;

export const selectFilteredAllRecipes = (state) => {
  const allRecipes = selectAllRecipes(state);
  const searchTerm = selectSearchTerm(state);

  return allRecipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export const loadRecipes = () => async (dispatch) => {
  dispatch(startGetRecipes());

  try {
    const data = await fetch("https://api.npoint.io/1047c9803849cb3d103f");
    const json = await data.json();
    dispatch(endGetRecipesWithSuccess(json));
  } catch (_err) {
    dispatch(endGetRecipesWithError());
  }
};

export default allRecipesSlice.reducer;
