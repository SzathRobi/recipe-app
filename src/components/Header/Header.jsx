import React from "react";
import "./Header.css";

export default function Header({
  searchValue,
  updateSearchValue,
  getRecipe,
  updateShowBookmarked
}) {
  return (
    <header>
      <form onSubmit={getRecipe}>
        <input type="text" value={searchValue} onChange={updateSearchValue} />
        <button onClick={getRecipe}>Search</button>
        <button onClick={updateShowBookmarked}>Show Bookmarked</button>
      </form>
    </header>
  );
}
