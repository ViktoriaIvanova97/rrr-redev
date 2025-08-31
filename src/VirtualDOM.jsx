import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const VirtualDOM = () => {
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
        <h2>Virtual DOM в React</h2>
      </div>
      <div className="border">
        <h3>Зачем нужен:</h3>
        <ul>
          <li>Чтобы быстро обновлять интерфейс.</li>
          <li>
            React не меняет сразу настоящий DOM (медленно), а сначала строит его
            «копию» в памяти → Virtual DOM.
          </li>
        </ul>
      </div>
      <div className="border">
        <h3>Как работает (простыми шагами)</h3>
        <ul>
          <li>При изменении state → React создаёт новый Virtual DOM.</li>
          <li>Сравнивает его со старым (diffing).</li>
          <li>Меняет только нужные куски в реальном DOM (patching).</li>
        </ul>
      </div>
      <div className="border">
        <h3>Пример для понимания</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function App() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1> {/* обновится только это место */}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h3>Почему это быстрее?</h3>
        <ul>
          <li>Работа с JS-объектами (Virtual DOM) → быстрее, чем с реальным DOM.</li>
          <li>React минимизирует количество операций с DOM → экономия ресурсов.</li>
        </ul>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src="lamp.png" alt="" />
          <h3>Важно помнить</h3>
        </div>
        <ul>
          <li>Virtual DOM ≠ всегда «самый быстрый», но он упрощает оптимизацию.</li>
          <li>Для списков всегда нужны key, чтобы diff работал корректно.</li>
        </ul>
      </div>
    </div>
  );
};
