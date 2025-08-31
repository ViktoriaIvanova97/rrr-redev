import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ReactMemo = () => {
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
        <img src={`${process.env.PUBLIC_URL}/molnia.png`}alt="" />
        <h2>React.memo</h2>
      </div>
      <div className="border">
        <h3>Что это?</h3>
        <p>
          React.memo — HOC (Higher Order Component), который мемоизирует
          функциональный компонент и предотвращает лишние перерисовки, если
          пропсы не изменились.
        </p>
      </div>
      <div className="border">
        <h3>Синтаксис</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React from "react";

const MyComponent = (props) => {
  console.log("Рендер:", props.value);
  return <div>{props.value}</div>;
};

// Оборачиваем в React.memo
export default React.memo(MyComponent);

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h3>Пример использования</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function Parent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>+</button>
      <Child value="Я не буду лишний раз рендериться" />
    </div>
  );
}

const Child = React.memo(({ value }) => {
  console.log("Child render");
  return <p>{value}</p>;
});

`}
        </SyntaxHighlighter>
        <p>
          Теперь при клике на кнопку будет перерендериваться только Parent, а
          Child — только если value изменится.
        </p>
      </div>
      <div className="border">
        <h3>С кастомным сравнением</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const Child = React.memo(
  ({ user }) => {
    console.log("Child render");
    return <p>{user.name}</p>;
  },
  (prevProps, nextProps) => prevProps.user.id === nextProps.user.id
);

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src={`${process.env.PUBLIC_URL}/lamp.png`}alt="" />
          <h3>Когда использовать?</h3>
        </div>
        <ul>
          <li>Если компонент тяжёлый (рендерится долго).</li>
          <li>Если у него часто одни и те же пропсы.</li>
          <li>Вместе с useCallback и useMemo для оптимизации.</li>
        </ul>
      </div>
    </div>
  );
};
