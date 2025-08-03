import { ThemeContext } from "./ThemeContext";
import { useContext } from "react";
const Input = ({ inputRef, changeInput }) => {
  const { isTheme} = useContext(ThemeContext);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: 10,
          gap: "20px",
        }}
      >
        <p>Показать</p>
        <input ref={inputRef} />
        <button className={`button--${isTheme}`} onClick={changeInput}>Обновить</button>
      </div>
    </>
  );
};

export default Input;
