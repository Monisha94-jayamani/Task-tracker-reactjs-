import React, { useState } from "react";

const Card = ({ day, createTask, toggleTask, Deletetask, Remove }) => {
  const [task, setTask] = useState("");

  return (
    <div className="each-day">
      <h2>{day.title}</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        onClick={(_) => {
          createTask(task);
          setTask("");
        }}
      >
        Create Task
      </button>
      <div className="task-wrapper">
        {day.tasks.map((task, taskIndex) => {
          return (
            <div className="each-task" key={taskIndex}>
              <h3 className={task.completed === true ? "line" : ""}>
                <a onClick={() => toggleTask(taskIndex)}>{task.title}</a>
                <a onClick={() => Deletetask(taskIndex)}>
                  <span>
                    <button>X</button>
                  </span>
                </a>
              </h3>
            </div>
          );
        })}
      </div>
      {day.tasks.map((task, taskIndex) => {
        return (
          <button key={taskIndex} onClick={() => Remove(taskIndex)}>
            delete
          </button>
        );
      })}
    </div>
  );
};

export default Card;
