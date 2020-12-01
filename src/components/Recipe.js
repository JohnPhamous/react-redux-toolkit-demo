import React from "react";

export default function Recipe({ recipe, children }) {
  return (
    <div key={recipe.id} className="recipe" tabIndex={0}>
      <span className="recipe-container">
        <h3 className="recipe-name">{recipe.name}</h3>
        <img src={recipe.img} alt="" className="recipe-image" />
      </span>
      {children}
    </div>
  );
}
