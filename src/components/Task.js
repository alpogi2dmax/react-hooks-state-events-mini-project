import React from "react";

function Task({ text, category, onDeleteSubmit,  }) {

  function handleClick(event) {
    onDeleteSubmit(event.target.value)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button value={text} className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;
