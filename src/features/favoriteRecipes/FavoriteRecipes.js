import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectFilteredFavoriteRecipes,
  removeFavoriteRecipe,
} from "./favoriteRecipesSlice";

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);

  const onRemoveFavoriteRecipeHandler = (recipe) => {
    dispatch(removeFavoriteRecipe(recipe));
  };

  return favoriteRecipes.map((recipe) => (
    <button
      key={recipe.id}
      onClick={() => onRemoveFavoriteRecipeHandler(recipe)}
    >
      <img src={recipe.img} alt="" />
      {recipe.name}
    </button>
  ));
};

export default FavoriteRecipes;
