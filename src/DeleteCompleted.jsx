import { useContext } from "react";
import { Context } from "./Contex";

const DeleteCompleted = () => {
  const { setTasks } = useContext(Context);

  return (
    <>
      <button
        onClick={() =>
          setTasks((tasks) => tasks.filter((item) => !item.isDone))
        }
      >
        Очистить выполненные
      </button>
    </>
  );
};

export default DeleteCompleted;
