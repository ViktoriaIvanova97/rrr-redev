import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const ReactRouter = () => {
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
        <h2>React Router</h2>
      </div>
      <div className="border">
        <h3>Что это?</h3>
        <p>Библиотека для маршрутизации в React-приложениях.</p>
        <p>
          Позволяет создавать многостраничные SPA (Single Page Application) без
          перезагрузки страницы.
        </p>
      </div>
      <div className="border">
        <h3>Установка</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`npm install react-router-dom

`}
        </SyntaxHighlighter>
      </div>

      <div className="border">
        <h3>Основные компоненты</h3>
        <h4>1.BrowserRouter – обёртка приложения</h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>Моё приложение</div>
    </BrowserRouter>
  );
}

`}
        </SyntaxHighlighter>
        <h4>2.Routes и Route – настройка маршрутов</h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { BrowserRouter, Routes, Route } from "react-router-dom";

function Home() {
  return <h2>Главная</h2>;
}

function About() {
  return <h2>О нас</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

`}
        </SyntaxHighlighter>
        <p>
          При переходе на /about отобразится компонент{" "}
          <code>&lt;About&gt;</code>.
        </p>
        <h4>3. Link – навигация без перезагрузки</h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Главная</Link> | <Link to="/about">О нас</Link>
    </nav>
  );
}

`}
        </SyntaxHighlighter>
        <h4>4.useParams – параметры из URL</h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <h2>Профиль пользователя {id}</h2>;
}

`}
        </SyntaxHighlighter>
        <p>/user/42 → выведет Профиль пользователя 42.</p>
        <h4>5.useNavigate – переход по коду</h4>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { useNavigate } from "react-router-dom";

function GoHome() {
  const navigate = useNavigate();

  return <button onClick={() => navigate("/")}>На главную</button>;
}

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src='lamp.png' alt="" />
          <h3>На что обратить внимание</h3>
        </div>
        <ul>
          <li>
            Обязательно оборачивай приложение в{" "}
            <code>&lt;BrowserRouter&gt;</code>.
          </li>
          <li>
            Для вложенных роутов используем вложенные <code>&lt;Route&gt;</code>
            .
          </li>
          <li>
            Если нужен редирект → используем{" "}
            <code>&lt;Navigate to="/..." /&gt;</code>.
          </li>
        </ul>
      </div>
    </div>
  );
};
