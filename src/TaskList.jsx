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
    <>
      <button onClick={addTask}>Добавить задачу</button>
      <button onClick={deleteTask}>Удалить последнюю задачу</button>
      <ul>
        {tasks.map((el) => (
          <li>{el}</li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
