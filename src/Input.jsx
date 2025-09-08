import { useState } from "react";
import { useContext } from "react";
import { Context } from "./Contex";

const Input = () => {
  const { setTasks } = useContext(Context);
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    if (error) setError("");
  };
  const handleTasks = () => {
    if (text.trim() === "") {
      setError("Поле не может быть пустым!");
      return;
    }
    setTasks((tasks) => [
      ...tasks,
      { id: crypto.randomUUID(), title: text, isDone: false },
    ]);
    setText("");
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
      {error && <p style={{ color: "red" }}>{error}</p>}
    </>
  );
};

export default Input;
