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

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <button
          key={recipe.id}
          onClick={() => onAddFavoriteRecipeHandler(recipe)}
          className="recipe"
        >
          <h3 className="recipe-name">{recipe.name}</h3>
          <img src={recipe.img} alt="" />
        </button>
      ))}
    </div>
  );
};

export default AllRecipes;
