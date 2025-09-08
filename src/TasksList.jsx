import Task from "./Task";
import { useContext } from "react";
import { Context } from "./Contex";
const TasksList = () => {
	const {tasks,deleteTask} =useContext(Context)
  return (
    <>
      {tasks.map((item) => (
		  <Task key={item.id} task={item} deleteTask={deleteTask} />
      ))}
    </>
  );
};

export default TasksList;
