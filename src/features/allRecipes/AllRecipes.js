import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavoriteRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
import { selectFilteredAllRecipes } from "./allRecipesSlice";

const AllRecipes = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector(selectFilteredAllRecipes);

  const onAddFavoriteRecipeHandler = (recipe) => {
    dispatch(addFavoriteRecipe(recipe));
  };

  return allRecipes.map((recipe) => (
    <button key={recipe.id} onClick={() => onAddFavoriteRecipeHandler(recipe)}>
      <img src={recipe.img} alt="" />
      {recipe.name}
    </button>
  ));
};

export default AllRecipes;
