import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { addFavoriteRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
import { selectFilteredAllRecipes } from "./allRecipesSlice";
import UnfavoriteIcon from "../../assets/unfavorite.svg";

const AllRecipes = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector(selectFilteredAllRecipes);

  const onAddFavoriteRecipeHandler = (recipe) => {
    dispatch(addFavoriteRecipe(recipe));
  };

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddFavoriteRecipeHandler(recipe)}
            icon={UnfavoriteIcon}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

export default AllRecipes;
