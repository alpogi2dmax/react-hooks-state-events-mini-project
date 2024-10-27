import React from "react";
import Task from "./Task";

function TaskList({ tasks, onSetTasks }) {


  function handleDeleteSubmit(event) {
    console.log(event)
    onSetTasks(event)
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => (
        <Task key={index} text={task.text} category={task.category} onDeleteSubmit={handleDeleteSubmit}/>
      ))}
    </div>
  );
}

export default TaskList;
