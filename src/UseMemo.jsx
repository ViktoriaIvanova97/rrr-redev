import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const UseMemo = () => {
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
        <h2>useMemo</h2>
      </div>
      <div className="border">
        <h3>Что это?</h3>
        <p>
          Хук для мемоизации вычислений. Используется, когда есть тяжёлые
          вычисления или функции, которые не должны пересчитываться при каждом
          рендере.
        </p>
      </div>
      <div className="border">
        <h3>Синтаксис</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { useMemo } from "react";

const value = useMemo(() => {
  // вычисления
  return результат;
}, [deps]); // пересчёт только при изменении deps

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h3>Примеры</h3>
        <h4>1. Тяжёлые вычисления</h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const expensiveCalc = (num) => {
  console.log("Вычисление...");
  return num * 2;
};

function App({ count }) {
  const result = useMemo(() => expensiveCalc(count), [count]);

  return <p>Результат: {result}</p>;
}

`}
        </SyntaxHighlighter>
        <p>Без useMemo expensiveCalc будет запускаться каждый рендер.</p>
        <p>С useMemo — только когда меняется count.</p>
        <h4>2.Мемоизация списка</h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function App({ items }) {
  const sorted = useMemo(() => {
    return [...items].sort();
  }, [items]);

  return (
    <ul>
      {sorted.map((i, index) => (
        <li key={index}>{i}</li>
      ))}
    </ul>
  );
}

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
          Используй для тяжёлых вычислений, а не для всего подряд.
          </li>
          <li>Если вычисления лёгкие → useMemo может быть излишним.</li>
          <li>Работает только на уровне значений, для мемоизации функций есть useCallback.</li>
        </ul>
      </div>
    </div>
  );
};
