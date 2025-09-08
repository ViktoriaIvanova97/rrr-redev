import { Context } from "./Contex";
import { useState, useEffect } from "react";

const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState(() => {
    const saved = localStorage.getItem("filter");
    return saved ? saved : "all";
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

  console.log(tasks);
  const deleteTask = (id) => {
    setTasks((tasks) => tasks.filter((item) => item.id !== id));
  };

  const isDoneChecked = (id) => {
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item,
      ),
    );
  };
  const editTitle = (id, newTitle) => {
    setTasks((tasks) =>
      tasks.map((item) =>
        item.id === id ? { ...item, title: newTitle } : item,
      ),
    );
  };

  return (
    <Context.Provider
      value={{
        tasks,
        setTasks,
        deleteTask,
        isDoneChecked,
        editTitle,
        filter,
        setFilter,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
