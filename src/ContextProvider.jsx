import { Context } from "./Contex";
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "купить ", isDone: false },
  ]);
  const deleteTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };
	return <Context.Provider value={{tasks,setTasks,deleteTask}}>
		{children}
	</Context.Provider>;
};

export default ContextProvider;
