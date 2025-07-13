import React from "react";
import { useState, useEffect } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);

  const addTask = () => {
    const newTask = prompt("Введите новую задачу:");
    if (newTask) {
      setTasks((prev) => [...prev, newTask]);
    }
  };
  console.log(tasks);
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
        {tasks.map((el) => (
          <li>{el}</li>
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
