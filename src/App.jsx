import { useState, useRef, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./List";

function App() {
  const [value, setValue] = useState([
    "яблоко",
    "банан",
    "киви",
    "груша",
    "апельсин",
  ]);
  const inputRef = useRef(null);

  const valid = () => {
    inputRef.current.focus();
  };

  const changeInput = (e) => {
    if (e.key === "Enter") {
      const inputVal = inputRef.current.value.trim();
      setValue([...value, inputVal]);
      inputRef.current.value = "";
    }
  };

  const memoizedValue = useMemo(() => value, [value]);
  return (
    <>
      <input ref={inputRef} onKeyDown={changeInput} />
      <button
        onClick={() => {
          valid();
        }}
      >
        Фокус
      </button>
      <List arrValue={memoizedValue} setArrValue={setValue} />
    </>
  );
}

export default App;
