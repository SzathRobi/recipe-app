import React from "react";
import "./Ingredients.css";

export default function Ingredients({ ingredients }) {
  return (
    <div className="ingredients">
      {ingredients.map(ingredient => (
        <p>{ingredient.text}</p>
      ))}
    </div>
  );
}
