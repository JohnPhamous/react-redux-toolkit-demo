import React from "react";

const AllThings = ({ things }) =>
  things.map((thing) => <div key={thing.name}>{thing.name}</div>);

export default AllThings;
