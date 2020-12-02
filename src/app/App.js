import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes } from "../features/allRecipes/allRecipesSlice";
import AllRecipes from "../features/allRecipes/AllRecipes";
import FavoriteRecipes from "../features/favoriteRecipes/FavoriteRecipes";
import Search from "../features/search/Search";

function App() {
  const dispatch = useDispatch();
  const { hasError } = useSelector((state) => state.allRecipes);

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

  const onTryAgainHandler = () => {
    dispatch(loadRecipes());
  };

  return (
    <div id="app">
      <header>
        <Search />
      </header>
      <main id="recipes-wrapper">
        {hasError ? (
          <div id="error-wrapper">
            <h1>
              Oh no! There was a mess in the kitchen and we couldn't get the
              recipes.
            </h1>
            <button onClick={onTryAgainHandler}>Try again</button>
          </div>
        ) : (
          <>
            <section className="recipes-section">
              <h2 className="header">Recipes</h2>
              <AllRecipes />
            </section>
            <section id="favorite-recipes" className="recipes-section">
              <h2 className="header">Favorites</h2>
              <FavoriteRecipes />
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
