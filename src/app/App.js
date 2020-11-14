import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadRecipes } from "../features/allRecipes/allRecipesSlice";
import AllRecipes from "../features/allRecipes/AllRecipes";
import FavoriteRecipes from "../features/favoriteRecipes/FavoriteRecipes";
import Search from "../features/search/Search";

function App() {
  const dispatch = useDispatch();
  const { isLoading, hasError } = useSelector((state) => state.allRecipes);

  useEffect(() => {
    dispatch(loadRecipes());
  }, [dispatch]);

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
        <Search />
      </section>
      <section>
        <AllRecipes />
      </section>
      <hr />
      <section>
        <FavoriteRecipes />
      </section>
    </main>
  );
}

export default App;
