import React from "react";

export default function FavoriteButton({ children, onClickHandler, icon }) {
  return (
    <button className="favorite-button" onClick={onClickHandler}>
      <span className="heart-icon" aria-hidden="true">
        {icon}
      </span>
      {children}
    </button>
  );
}
