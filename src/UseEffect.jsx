import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const UseEffect = () => {
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
        <img src={`${process.env.PUBLIC_URL}/molnia.png`} alt="" />
        <h2>useEffect</h2>
      </div>
      <div className="border">
        <h3>Что это?</h3>
        <p>
          Хук для побочных эффектов: работа с API, подписки, таймеры,
          DOM-операции. Запускается после рендера.
        </p>
      </div>
      <div className="border">
        <h3>Синтаксис</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { useEffect } from "react";

useEffect(() => {
  // код эффекта
  return () => {
    // очистка (опционально)
  };
}, [deps]); // массив зависимостей

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h3>Примеры</h3>
        <h4>1. Без зависимостей → каждый рендер</h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`useEffect(() => {
  console.log("Каждый рендер");
});

`}
        </SyntaxHighlighter>
        <h4>
          2. С пустым массивом → только при маунте (аналог componentDidMount)
        </h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`useEffect(() => {
  console.log("Один раз при загрузке");

  return () => {
    console.log("Unmount"); // очистка
  };
}, []);

`}
        </SyntaxHighlighter>
        <h4>3. С зависимостями → при изменении</h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`useEffect(() => {
  console.log("Изменилась переменная count");
}, [count]);

`}
        </SyntaxHighlighter>
        <h4>4. Запрос к API</h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`useEffect(() => {
  fetch("https://api.example.com/data")
    .then(res => res.json())
    .then(data => console.log(data));
}, []);

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src={`${process.env.PUBLIC_URL}/lamp.png`} alt="" />
          <h3>На что обратить внимание</h3>
        </div>
        <ul>
          <li>
            Если нет зависимостей → эффект будет вызываться каждый рендер.
          </li>
          <li>Очистка в return обязательна для таймеров/подписок.</li>
          <li>Старайся избегать тяжёлых операций внутри useEffect.</li>
        </ul>
      </div>
    </div>
  );
};
