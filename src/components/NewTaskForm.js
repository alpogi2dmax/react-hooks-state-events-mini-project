import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit }) {

  const [details, setDetails] = useState("")
  const [category, setCategory] = useState("")

  function handleDetailsChange(event) {
    setDetails(event.target.value)
  }

  function handleCategoryChange(event) {
    setCategory(event.target.value)
  }

  function addTask(event) {
    event.preventDefault()
    console.log(details)
    const taskObj = {
      text: details,
      category: category
    }
    onTaskFormSubmit (taskObj)
  }

  return (
    <form className="new-task-form" onSubmit={addTask}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={handleDetailsChange}/>
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={handleCategoryChange}>
          {categories.filter((category) => category !== "All").map((category) => 
            (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
