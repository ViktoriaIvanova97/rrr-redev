import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
export const Events = () => {
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
        <img src="/lamp.png" alt="" />
        <h2>Events в React</h2>
      </div>
      <p>
        События в React — это обёртка вокруг нативных событий браузера. Они
        называются Synthetic Events — это кросс-браузерный объект, который ведёт
        себя одинаково везде.
      </p>
      <div className="border">
        <div className="bulavka">
          <img src="/bulavka.png" alt="" />
          <p>Особенности:</p>
        </div>
        <ul>
          <li>
            Имена обработчиков пишутся в camelCase (например, onClick, а не
            onclick).
          </li>
          <li>В JSX передаётся функция, а не строка.</li>
          <li>
            События работают через event delegation: React вешает один
            обработчик на корневой элемент и управляет событиями внутри.
          </li>
        </ul>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src="/molnia.png" alt="" />
          <p>Примеры событий</p>
        </div>
        <h3>1. Click (клик по кнопке)</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function ClickExample() {
  const handleClick = (event) => {
    console.log("Кнопка нажата!", event);
  };

  return <button onClick={handleClick}>Нажми меня</button>;
}
`}
        </SyntaxHighlighter>
        <h3>2. Input / Change (поле ввода)</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { useState } from "react";

function InputExample() {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Вы ввели: {value}</p>
    </div>
  );
}

`}
        </SyntaxHighlighter>
        <h3>3. Submit (форма)</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function FormExample() {
  const handleSubmit = (event) => {
    event.preventDefault(); // предотвратить перезагрузку страницы
    console.log("Форма отправлена!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Ваше имя" />
      <button type="submit">Отправить</button>
    </form>
  );
}

`}
        </SyntaxHighlighter>
        <h3>4. Mouse Events</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function MouseExample() {
  const handleMouseOver = () => console.log("Навели мышь");
  const handleMouseOut = () => console.log("Убрали мышь");

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ padding: "20px", border: "1px solid black" }}
    >
      Наведи мышку сюда
    </div>
  );
}

`}
        </SyntaxHighlighter>
        <h3>5. Keyboard Events</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function KeyboardExample() {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      console.log("Нажата клавиша Enter");
    }
  };

  return <input type="text" onKeyDown={handleKeyDown} />;
}

`}
        </SyntaxHighlighter>
        <div className="bulavka">
          <img src="" alt="" />
          <h3>Дополнительно: Передача параметров в обработчик</h3>
        </div>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function ButtonWithParam() {
  const handleClick = (message) => {
    console.log("Сообщение:", message);
  };

  return (
    <button onClick={() => handleClick("Привет из кнопки!")}>
      Нажми с параметром
    </button>
  );
}

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src="/molnia.png" alt="" />
          <p>Итого:</p>
        </div>
        <ul>
          <li>React использует SyntheticEvent (единый интерфейс для разных браузеров).</li>
          <li>Обработчики пишутся в camelCase и передаются как функции.</li>
          <li>Часто используемые: onClick, onChange, onSubmit, onKeyDown, onMouseOver.</li>
        </ul>
      </div>
    </div>
  );
};
