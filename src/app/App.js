import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadRecipes,
  selectFilteredAllRecipes,
} from "../features/allRecipes/allRecipesSlice";
import AllRecipes from "../features/allRecipes/AllRecipes";
import {
  addFavoriteRecipe,
  removeFavoriteRecipe,
  selectFilteredFavoriteRecipes,
} from "../features/favoriteRecipes/favoriteRecipesSlice";
import FavoriteRecipes from "../features/favoriteRecipes/FavoriteRecipes";
import Search from "../features/search/Search";
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
} from "../features/search/searchSlice";

function App() {
  const dispatch = useDispatch();
  const allRecipes = useSelector(selectFilteredAllRecipes);
  const { isLoading, hasError } = useSelector((state) => state.allRecipes);
  const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const onAddFavoriteRecipeHandler = (recipe) => {
    dispatch(addFavoriteRecipe(recipe));
  };

  const onRemoveFavoriteRecipeHandler = (recipe) => {
    dispatch(removeFavoriteRecipe(recipe));
  };

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchTermClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  const onTryAgainHandler = () => {
    dispatch(loadRecipes());
  };

  if (isLoading) {
    return (
      <main>
        <h1>Loading...</h1>
      </main>
    );
  }

  if (hasError) {
    return (
      <main>
        <h1>An error has occurred while getting the recipes.</h1>
        <button onClick={onTryAgainHandler}>Try again</button>
      </main>
    );
  }
  return (
    <main>
      <section>
        <Search
          searchTerm={searchTerm}
          onChangeHandler={onSearchChangeHandler}
          onClearSearchTermHandler={onSearchTermClearHandler}
        />
      </section>
      <section>
        <AllRecipes
          recipes={allRecipes}
          onAddFavoriteRecipeHandler={onAddFavoriteRecipeHandler}
        />
      </section>
      <hr />
      <section>
        <FavoriteRecipes
          recipes={favoriteRecipes}
          onRemoveFavoriteRecipeHandler={onRemoveFavoriteRecipeHandler}
        />
      </section>
    </main>
  );
}

export default App;
