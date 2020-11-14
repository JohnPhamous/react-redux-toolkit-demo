import React from "react";

const FavoriteRecipes = ({ recipes, onRemoveFavoriteRecipeHandler }) =>
  recipes.map((recipe) => (
    <button
      key={recipe.id}
      onClick={() => onRemoveFavoriteRecipeHandler(recipe)}
    >
      <img src={recipe.img} alt="" />
      {recipe.name}
    </button>
  ));

export default FavoriteRecipes;
