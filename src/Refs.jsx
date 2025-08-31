import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Refs = () => {
  return (
    <div
      className="fonts"
      style={{
        width: "95%",
        margin: "auto",
        padding: "20px 0",
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <div className="bulavka">
        <img src="molnia.png" alt="" />
        <h2>Refs в React</h2>
      </div>
      <div className="border">
        <h3>Создание ref</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { useRef } from "react";

function MyInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // обращаемся к DOM-элементу
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Напиши что-то..." />
      <button onClick={focusInput}>Фокус</button>
    </div>
  );
}
`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h3>Хранение значений без рендера</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function Timer() {
  const count = useRef(0);

  const increase = () => {
    count.current += 1; 
    console.log(count.current); // меняется, но ререндера нет
  };

  return <button onClick={increase}>+1</button>;
}

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src="lamp.png" alt="" />
          <h3>Когда использовать Refs</h3>
        </div>
        <ul>
          <li>Фокус или выделение элементов (inputRef.current.focus()),</li>
          <li>Управление видео/аудио (videoRef.current.play()),</li>
          <li>Хранение «mutable» значений между рендерами.</li>
        </ul>
        <h3>! Не использовать для управления UI-данными → для этого state.</h3>
      </div>
    </div>
  );
};
