import React from "react";
import RecipeCard from "./RecipeCard/RecipeCard";
import "./RecipeContainer.css";

export default function RecipeContainer({
  recipes,
  showRecipes,
  bookmarked,
  showBookmarked,
  addBookmarked,
  removeBookmarked,
}) {
  return (
    <div className="recipe-list">
      {showRecipes
        ? recipes.map((recipe, index) => (
            <RecipeCard
              key={recipe.recipe.ingredients.foodId}
              index={index}
              label={recipe.recipe.label}
              image={recipe.recipe.image}
              calories={Math.floor(recipe.recipe.calories)}
              ingredients={recipe.recipe.ingredients}
              addBookmarked={addBookmarked}
              removeBookmarked={removeBookmarked}
              recipe={recipe}
              isBookmarked={recipe.bookmarked}
            />
          ))
        : null}
      {showBookmarked
        ? bookmarked.map((recipe, index) => (
            <RecipeCard
              key={recipe.props.ingredients.foodId}
              index={index}
              label={recipe.props.label}
              image={recipe.props.image}
              calories={Math.floor(recipe.props.calories)}
              ingredients={recipe.props.ingredients}
              addBookmarked={addBookmarked}
              removeBookmarked={removeBookmarked}
              isBookmarked={recipe.bookmarked}
              recipe={recipe}
            />
          ))
        : null}
    </div>
  );
}
