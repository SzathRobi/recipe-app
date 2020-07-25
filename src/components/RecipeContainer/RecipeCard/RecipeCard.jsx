import React, { useState } from "react";
import Ingredients from "./Ingredients/Ingredients";
import { FaAppleAlt, FaStar } from "react-icons/fa";
import "./RecipeCard.css";

export default function RecipeCard({
  label,
  index,
  image,
  calories,
  ingredients,
  addBookmarked,
  removeBookmarked,
  recipe,
  isBookmarked
}) {
  const [showIngredients, setShowIngredients] = useState(false);
  const updateShowIngredients = () => setShowIngredients(!showIngredients);

  const bookmarkStyle = {
    fontSize: "1.4rem",
    padding: "2px",
    border: "1px solid #000"
  };

  return (
    <div className="recipeCard-container">
      <img src={image} alt="food" />
      <div className="recipe-infos">
        <h3>{label}</h3>
        <h5>{calories}Kcal</h5>
        <div>
          <label onClick={updateShowIngredients}>
            <FaAppleAlt className="card-icon" />
            <h4>Ingredients</h4>
          </label>

          <FaStar
            style={isBookmarked ? bookmarkStyle : null}
            className="card-icon bookmark"
            onClick={
              isBookmarked
                ? () => removeBookmarked(recipe, index)
                : () => addBookmarked(recipe, index)
            }
          />
        </div>

        {showIngredients ? (
          <Ingredients key={ingredients.weight} ingredients={ingredients} />
        ) : null}
      </div>
    </div>
  );
}
