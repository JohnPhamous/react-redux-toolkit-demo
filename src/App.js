import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { loadThings, selectAllThings } from "./slices/allThingsSlice";
import AllThings from "./features/allThings/AllThings";

function App() {
  const dispatch = useDispatch();
  const allThings = useSelector(selectAllThings);

  useEffect(() => {
    dispatch(loadThings());
  }, [dispatch]);

  return (
    <div>
      <AllThings things={allThings} />
    </div>
  );
}

export default App;
