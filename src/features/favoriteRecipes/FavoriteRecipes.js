import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import {
  selectFilteredFavoriteRecipes,
  removeFavoriteRecipe,
} from "./favoriteRecipesSlice";
import UnfavoriteIcon from "../../assets/unfavorite.svg";
import Spinner from "../../components/Spinner";

const FavoriteRecipes = () => {
  const dispatch = useDispatch();
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);

  const onRemoveFavoriteRecipeHandler = (recipe) => {
    dispatch(removeFavoriteRecipe(recipe));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="recipes-container">
      {favoriteRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onRemoveFavoriteRecipeHandler(recipe)}
            icon={UnfavoriteIcon}
          >
            Remove Favorite
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

export default FavoriteRecipes;
