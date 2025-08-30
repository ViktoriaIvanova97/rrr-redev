import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Fragment = () => {
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
        <img src="/molnia.png" alt="" />
        <h2>React Fragment</h2>
      </div>
      <div className="border">
        <h3>Зачем нужен:</h3>
        <ul>
          <li>Чтобы возвращать несколько элементов без лишних обёрток.</li>
          <li>Помогает избежать «div-супа» в разметке.</li>
        </ul>
      </div>
      <div className="border">
        <h3>Пример обычный (с div) — плохо</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function App() {
  return (
    <div>
      <h1>Заголовок</h1>
      <p>Текст</p>
    </div>
  );
}

`}
        </SyntaxHighlighter>
        <p>Лишний div в DOM, может ломать стили/верстку.</p>
      </div>
      <div className="border">
        <h3>Пример с Fragment — хорошо</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function App() {
  return (
    <React.Fragment>
      <h1>Заголовок</h1>
      <p>Текст</p>
    </React.Fragment>
  );
}

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h3>Короткий синтаксис</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function App() {
  return (
    <>
      <h1>Заголовок</h1>
      <p>Текст</p>
    </>
  );
}

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src="/lamp.png" alt="" />
          <h3>Особенности</h3>
        </div>
        <ul>
          <li>
            {" "}
            <p>
              <code>
                {
                  "<></> нельзя писать ключи (key) → если нужен key, используй <React.Fragment key={...}>."
                }
              </code>
            </p>
          </li>
          <li>Фрагменты не создают лишних элементов в DOM.</li>
        </ul>
      </div>
    </div>
  );
};
