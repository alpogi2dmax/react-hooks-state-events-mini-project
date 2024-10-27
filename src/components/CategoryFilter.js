import React from "react";

function CategoryFilter({categories, selectCategories, onSetSelectCategories}) {

  console.log(selectCategories)

  function handleCategoryClick(event) {
    onSetSelectCategories(event)
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button className={category === selectCategories ? 'selected' : ""} key={category} value={category} onClick={handleCategoryClick}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
