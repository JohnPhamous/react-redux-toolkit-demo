import React from "react";

const AllRecipes = ({ recipes, onAddFavoriteRecipeHandler }) =>
  recipes.map((recipe) => (
    <button
      key={recipe.name}
      onClick={() => onAddFavoriteRecipeHandler(recipe)}
    >
      {recipe.name}
    </button>
  ));

export default AllRecipes;
