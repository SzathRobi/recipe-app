import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import RecipeContainer from "./components/RecipeContainer/RecipeContainer";
import RecipeCard from "./components/RecipeContainer/RecipeCard/RecipeCard";
import Counter from "./components/Counter/Counter";
import ErrorMessage from "./components/ErrorMessage//ErrorMessgae";
import "./styles.css";

export default function App() {
  /* const getBookmarks = () => {
    if (JSON.parse(localStorage.bookmarks) === null) return [];
    if (JSON.parse(localStorage.bookmarks) !== null)
      return JSON.parse(localStorage.bookmarks);
  };

  const savedBookmarks = getBookmarks();*/

  const [searchValue, setSearchValue] = useState("");
  const updateSearchValue = (event) => setSearchValue(event.target.value);

  const [recipes, setRecipes] = useState([]);

  const [wrongQuery, setWrongQuery] = useState(false);

  const getRecipe = async (event) => {
    event.preventDefault();
    setWrongQuery(false);
    const response = await fetch(
      `https://api.edamam.com/search?q=${searchValue}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    await setRecipes(data.hits);
    setShowBookmarked(false);
    setShowRecipes(true);
    if (data.count === 0) {
      setWrongQuery(true);
    }
  };

  const APP_ID = "ca9faca6";
  const APP_KEY = "1bbf8a2e21f824f48e6cf579a5b88cf5	";

  const [bookmarked, setBookmarked] = useState([]); //useState(savedBookmarks)

  /* useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarked));
    console.log(localStorage.bookmarks);
  }, [bookmarked]);
*/
  const addBookmarked = (recipe, index) => {
    if (bookmarked.includes(recipe)) {
      removeBookmarked(recipe, index);
    } else {
      setBookmarked([
        ...bookmarked,
        <RecipeCard
          key={bookmarked.lenght}
          index={index}
          label={showRecipes ? recipe.recipe.label : recipe.props.label}
          image={showRecipes ? recipe.recipe.image : recipe.props.image}
          calories={Math.floor(
            showRecipes ? recipe.recipe.calories : recipe.props.calories
          )}
          ingredients={
            showRecipes ? recipe.recipe.ingredients : recipe.props.ingredients
          }
          isBookmarked={recipe.bookmarked}
          addBookmarked={addBookmarked}
          removeBookmarked={removeBookmarked}
          recipe={recipe}
        />,
      ]);
      recipe.bookmarked = true;
    }
  };

  const removeBookmarked = (recipe, index) => {
    const newBookmarked = [...bookmarked];
    newBookmarked.splice(index, 1);
    setBookmarked(newBookmarked);
    recipe.bookmarked = false;
    console.log(recipe);
    console.log(index);
    console.log(recipe.bookmarked);
  };

  const [showRecipes, setShowRecipes] = useState(false);
  const [showBookmarked, setShowBookmarked] = useState(false);

  const updateShowBookmarked = (event) => {
    event.preventDefault();
    setShowRecipes(false);
    setShowBookmarked(true);
    setRecipes([]);
  };

  return (
    <div className="App">
      <Header
        searchValue={searchValue}
        updateSearchValue={updateSearchValue}
        getRecipe={getRecipe}
        updateShowBookmarked={updateShowBookmarked}
      />
      {recipes.length !== 0 ? <Counter recipes={recipes} /> : null}
      {wrongQuery ? (
        <ErrorMessage
          title={`Oops, nothing was found. Please try something else`}
        />
      ) : null}
      <RecipeContainer
        recipes={recipes}
        showRecipes={showRecipes}
        bookmarked={bookmarked}
        showBookmarked={showBookmarked}
        addBookmarked={addBookmarked}
        removeBookmarked={removeBookmarked}
      />
    </div>
  );
}
