import { Context } from "./Contex";
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "купить ", isDone: false },
  ]);
  const [filter, setFilter] = useState("all");
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
