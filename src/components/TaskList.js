import React from "react";
import Task from "./Task";

function TaskList({TASKS}) {

  console.log({TASKS})

  return (
    <div className="tasks">
      {TASKS.map((task, index) => (
        <Task key={index} text={task.text} category={task.category}/>
      ))}
    </div>
  );
}

export default TaskList;
