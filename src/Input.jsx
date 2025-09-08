import { useState } from "react";
import { useContext } from "react";
import { Context } from "./Contex";
const Input = () => {
  const { setTasks } = useContext(Context);
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleTasks = () => {
    setTasks((tasks) => [
      ...tasks,
      { id: tasks.at(-1).id + 1, title: text, isDone: false },
    ]);
  };
  return (
    <>
      <input
        value={text}
        onChange={handleChange}
        type="text"
        placeholder="Введите текст задачи..."
      />
      <button onClick={() => handleTasks()}>Добавить</button>
    </>
  );
};

export default Input;
