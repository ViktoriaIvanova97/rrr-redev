import React from "react";
import { useState } from "react";
import TaskItem from "./TaskItem";
const TaskList = () => {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const addTask = () => {
    const newTask = prompt("Введите новую задачу:");
    if (newTask) {
      setTasks((prev) => [...prev, newTask]);
    }
  };

  const deleteTask = () => {
    setTasks((prev) => prev.filter((el, index) => index !== prev.length - 1));
  };

  return (
    <div
      style={{
        border: "2px solid #0000006b",
        borderRadius: "8%",
        padding: "10px",
        margin: "10px",
        display: "grid",
        justifyItems: "center",
      }}
    >
      <h3>Список задач</h3>
      <ul>
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} />
        ))}
      </ul>
      <div style={{ display: "grid", gap: "10px" }}>
        <button onClick={addTask}>Добавить задачу</button>
        <button onClick={deleteTask}>Удалить последнюю задачу</button>
      </div>
    </div>
  );
};

export default TaskList;
