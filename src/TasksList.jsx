import Task from "./Task";
import { useContext } from "react";
import { Context } from "./Contex";

const TasksList = () => {
	const {tasks} =useContext(Context)
  return (
    <>
      {tasks?tasks.map((item) => (
		  <Task key={item.id} task={item} />
      )): <p>Пусто</p>}
    </>
  );
};

export default TasksList;
