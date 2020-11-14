import React from "react";

const AllRecipes = ({ recipes, onAddFavoriteRecipeHandler }) =>
  recipes.map((recipe) => (
    <button key={recipe.id} onClick={() => onAddFavoriteRecipeHandler(recipe)}>
      <img src={recipe.img} alt="" />
      {recipe.name}
    </button>
  ));

export default AllRecipes;
