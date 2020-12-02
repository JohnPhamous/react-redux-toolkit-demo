import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { addFavoriteRecipe } from "../favoriteRecipes/favoriteRecipesSlice";
import { selectFilteredAllRecipes } from "./allRecipesSlice";
import FavoriteIcon from "../../assets/favorite.svg";
import Spinner from "../../components/Spinner";

const AllRecipes = () => {
  const dispatch = useDispatch();
  const allRecipes = useSelector(selectFilteredAllRecipes);
  const { isLoading } = useSelector((state) => state.allRecipes);

  const onAddFavoriteRecipeHandler = (recipe) => {
    dispatch(addFavoriteRecipe(recipe));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="recipes-container">
      {allRecipes.map((recipe) => (
        <Recipe recipe={recipe} key={recipe.id}>
          <FavoriteButton
            onClickHandler={() => onAddFavoriteRecipeHandler(recipe)}
            icon={FavoriteIcon}
          >
            Add to Favorites
          </FavoriteButton>
        </Recipe>
      ))}
    </div>
  );
};

export default AllRecipes;
