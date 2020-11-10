import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  loadThings,
  selectFilteredAllThings,
} from "../features/allThings/allThingsSlice";
import AllThings from "../features/allThings/AllThings";
import {
  addThing,
  removeThing,
  selectFilteredMyThings,
} from "../features/myThings/myThingsSlice";
import MyThings from "../features/myThings/MyThings";
import Search from "../features/search/Search";
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
} from "../features/search/searchSlice";

function App() {
  const dispatch = useDispatch();
  const allThings = useSelector(selectFilteredAllThings);
  const { isLoading, hasError } = useSelector((state) => state.allThings);
  const myThings = useSelector(selectFilteredMyThings);
  const searchTerm = useSelector(selectSearchTerm);

  useEffect(() => {
    dispatch(loadThings());
  }, [dispatch]);

  const onAddThingHandler = (thing) => {
    dispatch(addThing(thing));
  };

  const onRemoveThingHandler = (thing) => {
    dispatch(removeThing(thing));
  };

  const onSearchChangeHandler = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchTermClearHandler = () => {
    dispatch(clearSearchTerm());
  };

  const onTryAgainHandler = () => {
    dispatch(loadThings());
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
        <h1>An error has occurred while getting the things.</h1>
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
        <AllThings things={allThings} onAddThingHandler={onAddThingHandler} />
      </section>
      <hr />
      <section>
        <MyThings
          things={myThings}
          onRemoveThingHandler={onRemoveThingHandler}
        />
      </section>
    </main>
  );
}

export default App;
