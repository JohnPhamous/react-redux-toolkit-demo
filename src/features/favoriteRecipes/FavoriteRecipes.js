import React from "react";

const FavoriteRecipes = ({ recipes, onRemoveFavoriteRecipeHandler }) =>
  recipes.map((recipe) => (
    <button
      key={recipe.name}
      onClick={() => onRemoveFavoriteRecipeHandler(recipe)}
    >
      {recipe.name}
    </button>
  ));

export default FavoriteRecipes;
