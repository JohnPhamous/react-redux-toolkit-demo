import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadThings, selectFilteredAllThings } from "./slices/allThingsSlice";
import AllThings from "./features/allThings/AllThings";
import {
  addThing,
  removeThing,
  selectFilteredMyThings,
} from "./slices/myThingsSlice";
import MyThings from "./features/myThings/MyThings";
import Search from "./features/search/Search";
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
} from "./slices/searchSlice";

function App() {
  const dispatch = useDispatch();
  const allThings = useSelector(selectFilteredAllThings);
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
