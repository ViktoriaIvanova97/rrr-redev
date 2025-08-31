import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
export const LifeCycle = () => {
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
      <div className="border">
        <h2>Жизненный цикл компонентов React</h2>
        <p>Условно он делится на три больших этапа:</p>
        <ul>
          <li>
            Mounting (монтирование) → когда компонент создаётся и добавляется в
            DOM.
          </li>
          <li>Updating (обновление) → когда меняются props или state.</li>
          <li>
            Unmounting (размонтирование) → когда компонент удаляется из DOM.
          </li>
        </ul>
      </div>
      <div className="border">
        <h2>1. Mounting</h2>
        <p>Методы классового компонента:</p>
        <ul>
          <li>constructor() → инициализация state, привязка методов.</li>
          <li>
            static getDerivedStateFromProps(props, state) → редко используется,
            синхронизирует state с props.
          </li>
          <li>render() → отрисовка JSX.</li>
          <li>
            componentDidMount() → вызывается один раз после вставки в DOM (часто
            для запросов к API).
          </li>
        </ul>
        <div className="bulavka">
          <img src={`${process.env.PUBLIC_URL}/bulavka.png`} alt="" />
          <p>Пример (class component)</p>{" "}
        </div>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React from "react";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("1. constructor");
  }

  componentDidMount() {
    console.log("4. componentDidMount");
    document.title = \`Clicked \${this.state.count} times\`;
  }

  render() {
    console.log("3. render");
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
      </div>
    );
  }
}`}
        </SyntaxHighlighter>
        <div className="bulavka">
          <img src={`${process.env.PUBLIC_URL}/bulavka.png`} alt="" />
          <p>Аналог на хуках</p>
        </div>

        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);

  // useEffect без зависимостей = componentDidMount
  useEffect(() => {
    console.log("componentDidMount");
    document.title = \`Clicked\${count} times\`;
  }, []);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click</button>
    </div>
  );
}`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h2>2. Updating</h2>
        <ul>
          Срабатывает, когда:
          <li>Изменяются props.</li>
          <li>Изменяется state.</li>
        </ul>
        <ul>
          Методы классов:
          <li>static getDerivedStateFromProps()</li>
          <li>
            shouldComponentUpdate(nextProps, nextState) → оптимизация,
            возвращает true/false.
          </li>
          <li>render()</li>
          <li>
            componentDidUpdate(prevProps, prevState) → вызывается после
            обновления.
          </li>
        </ul>
        <div className="bulavka">
          <img src={`${process.env.PUBLIC_URL}/bulavka.png`}alt="" />
          <p>Пример (class component)</p>
        </div>

        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`class Counter extends React.Component {
  state = { count: 0 };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(\`Count changed:\${this.state.count}\`);
    }
  }

  render() {
    return (
      <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        {this.state.count}
      </button>
    );
  }
}
`}
        </SyntaxHighlighter>
        <div className="bulavka">
          <img src={`${process.env.PUBLIC_URL}/bulavka.png`} alt="" />
          <p>Аналог на хуках</p>
        </div>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(\`Count changed: \${count}\`);
  }, [count]); // следим за count

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h2>3. Unmounting</h2>
        <ul>
          Метод:
          <li>
            componentWillUnmount() → вызывается перед удалением из DOM (часто
            используют для очистки таймеров, слушателей).
          </li>
          <div className="bulavka">
            <img src={`${process.env.PUBLIC_URL}/bulavka.png`}alt="" />
            <p>Пример (class component)</p>
          </div>
          <SyntaxHighlighter language="javascript" style={okaidia}>
            {`class Timer extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => console.log("tick"), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Timer stopped");
  }

  render() {
    return <p>Timer is running...</p>;
  }
}
`}
          </SyntaxHighlighter>
          <div className="bulavka">
            <img src={`${process.env.PUBLIC_URL}/bulavka.png`} alt="" />
            <p>Аналог на хуках</p>
          </div>
          <SyntaxHighlighter language="javascript" style={okaidia}>
            {`import { useEffect } from "react";

function Timer() {
  useEffect(() => {
    const timer = setInterval(() => console.log("tick"), 1000);

    return () => {
      clearInterval(timer);
      console.log("Timer stopped");
    };
  }, []);

  return <p>Timer is running...</p>;
}

`}
          </SyntaxHighlighter>
        </ul>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src={`${process.env.PUBLIC_URL}/molnia.png`} alt="" />
          <p>Итого:</p>
        </div>
        <ul>
          <li>class components используют методы жизненного цикла.</li>
          <li>functional components заменяют их на useEffect и useState.</li>
        </ul>
      </div>
    </div>
  );
};
