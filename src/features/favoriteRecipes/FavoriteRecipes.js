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

  return (
    <div className="recipes-container">
      {favoriteRecipes.map((recipe) => (
        <button
          key={recipe.id}
          onClick={() => onRemoveFavoriteRecipeHandler(recipe)}
          className="recipe"
        >
          <h3 className="recipe-name">{recipe.name}</h3>
          <img src={recipe.img} alt="" />
        </button>
      ))}
    </div>
  );
};

export default FavoriteRecipes;
