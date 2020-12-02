import React from "react";
import SpinnerIcon from "../assets/spinner.png";

export default function Spinner() {
  return (
    <img src={SpinnerIcon} alt="Recipes are loading" className="spinner" />
  );
}
