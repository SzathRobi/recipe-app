import React from "react";
import "./Counter.css";

export default function Counter({ recipes }) {
  return (
    <div>
      <h2 className="counter">{recipes.length} Recipes were founded</h2>
    </div>
  );
}
