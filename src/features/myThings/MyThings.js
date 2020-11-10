import React from "react";

const MyThings = ({ things, onRemoveThingHandler }) =>
  things.map((thing) => (
    <button key={thing.name} onClick={() => onRemoveThingHandler(thing)}>
      {thing.name}
    </button>
  ));

export default MyThings;
