import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import {CATEGORIES, TASKS} from "../data";

console.log("Here's the data you're working with");
console.log({CATEGORIES, TASKS})

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectCategories, setSelectCategories] = useState("All")


  function handleSetTasks(text) {
    
    const newTasks = tasks.filter((x,i) => x.text !== text)
    setTasks(newTasks)
  }

  function addNewTasks(taskObj) {
    let newAddTask = [...tasks, taskObj]
    setTasks(newAddTask)
  }

  function handleSelectCategories(event) {
    setSelectCategories(event.target.value)
  }

  const newTasks = tasks.filter((task) => {
    if(selectCategories === "All") {
      return true
    } else {
      return task.category === selectCategories
    }

  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={categories} selectCategories={selectCategories} onSetSelectCategories={handleSelectCategories}/>
      <NewTaskForm categories={categories} onTaskFormSubmit ={addNewTasks} />
      <TaskList tasks={newTasks} onSetTasks={handleSetTasks} />
    </div>
  );
}

export default App;
