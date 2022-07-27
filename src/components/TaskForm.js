import React, { useState } from "react";
import "../stylesheet/TaskForm.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {
  const [input, setInput] = useState("");

  const manageChange = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const manageSent = (e) => {
    e.preventDefault(e);

    const taskNew = {
      id: uuidv4(),
      text: input,
      complete: false,
    };
    props.onSubmit(taskNew);
  };

  return (
    <form className="task-form" onSubmit={manageSent}>
      <input
        className="task-input"
        type="text"
        placeholder="Write a task"
        name="text"
        onChange={manageChange}
      />
      <button className="task-button">Add Task</button>
    </form>
  );
}

export default TaskForm;
