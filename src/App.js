import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadThings, selectAllThings } from "./slices/allThingsSlice";
import AllThings from "./features/allThings/AllThings";
import { addThing, removeThing, selectMyThings } from "./slices/myThingsSlice";
import MyThings from "./features/myThings/MyThings";

function App() {
  const dispatch = useDispatch();
  const allThings = useSelector(selectAllThings);
  const myThings = useSelector(selectMyThings);

  useEffect(() => {
    dispatch(loadThings());
  }, [dispatch]);

  const onAddThingHandler = (thing) => {
    dispatch(addThing(thing));
  };

  const onRemoveThingHandler = (thing) => {
    dispatch(removeThing(thing));
  };

  return (
    <div>
      <AllThings things={allThings} onAddThingHandler={onAddThingHandler} />
      <hr />
      <MyThings things={myThings} onRemoveThingHandler={onRemoveThingHandler} />
    </div>
  );
}

export default App;
