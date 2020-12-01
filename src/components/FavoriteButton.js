import React from "react";

export default function FavoriteButton({ children, onClickHandler }) {
  return (
    <button className="favorite-button" onClick={onClickHandler}>
      <span className="heart-icon" aria-hidden="true">
        ♥
      </span>
      {children}
    </button>
  );
}
