import { Context } from "./Contex";
import { useState, useEffect, useMemo } from "react";

const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState(() => {
    const saved = localStorage.getItem("filter");
    return saved ? saved : "all";
  });
	const [sortOrder, setSortOrder] = useState("desc");
	
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("filter", filter);
  }, [filter]);

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

  const sortedTasks = useMemo(() => {
	return [...tasks].sort((a, b) => {
	  return sortOrder === "desc"
		? b.createdAt - a.createdAt
		: a.createdAt - b.createdAt;
	});
  }, [tasks, sortOrder]);

  console.log('raw tasks', tasks);
console.log('sortedTasks', sortedTasks, 'sortOrder', sortOrder);

  return (
    <Context.Provider
      value={{
        tasks:sortedTasks,
        setTasks,
        deleteTask,
        isDoneChecked,
        editTitle,
        filter,
        setFilter,
        sortOrder,
        setSortOrder,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
