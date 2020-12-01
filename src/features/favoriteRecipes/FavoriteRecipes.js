import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
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
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onRemoveFavoriteRecipeHandler(recipe)}
            icon="💔"
          >
            Remove Favorite
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

export default FavoriteRecipes;
