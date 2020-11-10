import React from "react";

const AllThings = ({ things, onAddThingHandler }) =>
  things.map((thing) => (
    <button key={thing.name} onClick={() => onAddThingHandler(thing)}>
      {thing.name}
    </button>
  ));

export default AllThings;
