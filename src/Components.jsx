import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Components = () => {
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
        <h2>1. Что такое компоненты?</h2>
        <p>
          Компоненты — это основа любого приложения на React. **Это небольшие,
          переиспользуемые кусочки кода,** которые управляют отображением и
          поведением пользовательского интерфейса. Компоненты позволяют разбить
          интерфейс на независимые части, **про которые легко думать в
          отдельности**. Например, всем известный интерфейс можно разбить на
          такие компоненты:
          <div className="img">
            <img src={`${process.env.PUBLIC_URL}/components-1.webp`} alt="" width={"60%"} />
          </div>
        </p>
        <p>
          Во многом компоненты ведут себя **как обычные функции JavaScript**.
          Они принимают произвольные входные данные (*так называемые «пропсы»*)
          и возвращают React-элементы, описывающие, что мы хотим увидеть на
          экране. Компоненты как кирпичики из которых ты можешь строить свое
          приложение
        </p>
        <ul>
          Примеры компонентов в реальной жизни
          <li>
            Лего-кирпичики: Каждый кирпичик — это компонент. Ты можешь
            комбинировать их, чтобы строить более сложные конструкции.
          </li>
          <li>
            Автомобиль: Руль, двигатель и колёса — это отдельные компоненты,
            которые работают вместе.
          </li>
        </ul>
        <div className="img">
          <img src={`${process.env.PUBLIC_URL}/components-2.jpeg`}alt="" width={"30%"} />
        </div>
      </div>

      <div className="border">
        <h2>2. Виды компонентов</h2>
        <p>В React есть два вида компонентов:</p>
        <h3>2.1. Функциональные компоненты</h3>
        <p>
          Функциональные компоненты — это простые функции, которые принимают
          props и возвращают JSX. Они являются наиболее современным и популярным
          способом написания компонентов.
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`  function Greeting() {
      return <h1>Привет, Pavel!</h1>;
}

<Greeting />;`}
        </SyntaxHighlighter>
        <h3>2.2. Классовые компоненты</h3>
        <p>
          Классовые компоненты — это компоненты, которые создаются с
          использованием классов. Они использовались до появления хуков, но до
          сих пор встречаются в старых проектах.
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { Component } from 'react';

class Greeting extends Component {
  render() {
    return <h1>Привет, Pavel!</h1>;
  }
}

<Greeting />;`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h2>3. Основные характеристики компонентов</h2>
        <h3>3.1. Независимость</h3>
        <p>
          Каждый компонент работает независимо от других. Это значит, что
          изменения в одном компоненте не затронут другие.
        </p>

        <h3>3.2. Переиспользуемость</h3>
        <p>
          Компоненты можно использовать повторно в разных частях приложения, что
          снижает количество дублирующегося кода.
        </p>
        <h3>3.3. Иерархия</h3>
        <p>
          Компоненты могут быть вложенными: родительский компонент передаёт
          данные дочерним через props .
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function ParentComponent() {
  return (
    <div>
      <ChildComponent message={"Привет от родителя!"} />
    </div>
  );
}

function ChildComponent({ message }) {
  return <p>{message}</p>;
}`}
        </SyntaxHighlighter>
        <h3>3.4. Компонента должна себя вести как чистая функция.</h3>
        <ul>
          “Чистой” называется функция, которая:
          <li>
            Для одинаковых входных данных всегда возвращает один результат.
          </li>
          <li>
            Не имеет побочных эффектов (то есть не изменяет внешние состояния).
          </li>
          <li>Не зависит от внешних состояний.</li>
        </ul>
      </div>
      <div className="border">
        <h2>4. JSX и компоненты</h2>
        <p>
          JSX (от JavaScript XML) делает код React читаемым и похожим на HTML.
        </p>
        <ul>
          Как JSX работает с компонентами?
          <li>Каждый компонент возвращает JSX.</li>
          <li>
            JSX может содержать другие компоненты, элементы HTML или JavaScript.
            <SyntaxHighlighter language="javascript" style={okaidia}>
              {`function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Это заголовок</h1>;
}

function MainContent() {
  return <p>Основной текст страницы</p>;
}

function Footer() {
  return <footer>Здесь футер</footer>;
}`}
            </SyntaxHighlighter>
          </li>
        </ul>
      </div>
      <div className="border">
        <h2>5. Stateless VS Stateful</h2>
        <p>
          Когда речь идет о React, часто упоминаются термины "stateless" и
          "stateful". Чтобы понять, что они значат, давай разберемся c этим.
        </p>
        <p>Stateless компоненты </p>
        <p>
          Они просто принимают props и возвращают JSX, который описывает, как
          должен выглядеть UI. Эти компоненты не имеют внутреннего состояния и
          не могут изменять свое поведение в зависимости от событий или действий
          пользователя.
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
};`}
        </SyntaxHighlighter>
        <p>
          В этом примере компонент Greeting принимает проп name и отображает
          приветствие. Он не хранит состояние и не изменяется с течением
          времени.
        </p>
        <p>Stateful компоненты</p>
        <p>
          Stateful компоненты могут управлять состоянием и изменять свое
          поведение в зависимости от событий. Они используют внутреннее
          состояние, чтобы отслеживать изменения и обновлять UI в ответ на
          действия пользователя или другие события.
        </p>
        <p>
          С появлением хуков в React 16.8 функциональные компоненты могут также
          управлять состоянием и эффектами. Теперь можно создавать stateful
          функциональные компоненты с помощью хуков useState и useEffect.
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h2>6. Советы</h2>
        <ul>
          <li>Держи компоненты маленькими и выполняющими одну задачу.</li>
          <li>Названия компонентов всегда начинай с заглавной буквы.</li>
          <li>Используй функциональные компоненты для всех новых проектов.</li>
        </ul>
      </div>
    </div>
  );
};
