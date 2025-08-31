import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
export const Props = () => {
  console.log('props');
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
        <h2>1. Введение в Props</h2>
        <p>
          Props (от англ. “properties”) — это механизм передачи данных между
          компонентами в React. Они делают React-компоненты повторно
          используемыми и универсальными.
        </p>
        <h3>Что такое props?</h3>
        <ul>
          <li>
            Props — это объект, содержащий данные, которые передаются в
            компонент из его родителя.
          </li>
          <li>
            Props похожи на параметры функций: они предоставляют компонентам
            необходимую информацию для корректной работы.
          </li>
        </ul>
        <h3>Почему props важны?</h3>
        <ul>
          <li>
            Они позволяют создавать динамичные компоненты, которые могут
            отображать разные данные.
          </li>
          <li>
            С props можно легко передавать данные внутрь сложной структуры
            компонентов.
          </li>
        </ul>
        <h3>Аналогия: параметры функций</h3>
        <p>
          Представь, что props — это параметры, которые передаются функции при
          ее вызове. Вместо:
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function greet(name) {
  return \`Hello, \${name}\`;
}
console.log(greet('Pavel')); // Hello, Pavel`}
        </SyntaxHighlighter>
        <p>В React ты можешь сделать компонент с props:</p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}
<Greeting name={"Pavel"} />;`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h2>2. Основы работы с Props</h2>
        <p>
          Props передаются в компоненты так же, как атрибуты в HTML-элементы.
        </p>
        <h3>Передача данных через JSX</h3>
        <p>Синтаксис прост: данные указываются как атрибуты JSX:</p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function Welcome(props) {
  return <h1>Welcome, {props.userName}!</h1>;
}

<Welcome userName={"Pavel"} />;`}
        </SyntaxHighlighter>
        <h3>Пример с числом и булевыми значениями</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function UserStatus(props) {
  return (
    <div>
      <p>User ID: {props.id}</p>
      <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
}

<UserStatus id={123} isActive={true} />;`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h2>3. Чтение Props в дочернем компоненте</h2>
        <h3>Доступ к props через объект</h3>
        <p>Props доступны как объект внутри компонента:</p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function Profile(props) {
  return <p>Name: {props.name}</p>;
}
<Profile name={"Pavel"} />;`}
        </SyntaxHighlighter>
        <h3>Деструктуризация props</h3>
        <p>
          Рекомендуется использовать деструктуризацию для более читаемого кода:
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function Profile({ name, age }) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
<Profile name={"Pavel"} age={27} />;`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h2>4. Типы данных, передаваемые через Props</h2>
        <h3>Передача массивов и объектов</h3>
        <p>Props поддерживают сложные типы данных:</p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))}
    </ul>
  );
}

<TodoList todos={["Learn React", "Build a project", "Get a job"]} />;`}
        </SyntaxHighlighter>
        <h3>Передача функций</h3>
        <p>Props могут быть функциями для управления поведением компонента:</p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function Button(props) {
  return <button onClick={props.onClick}>Click Me</button>;
}

<Button onClick={() => console.log("Button clicked!")} />;`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h2>5. Использование props.children в компонентах</h2>
        <h3>Что такое props.children?</h3>
        <p>
          props.children — это специальное свойство, которое автоматически
          передаётся в компонент, если внутри него вложены другие компоненты или
          элементы. Это позволяет создавать гибкие и универсальные компоненты.
        </p>
        <h3>Пример использования props.children</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function Container({ children }) {
  return <div className="container">{children}</div>;
}

function App() {
  return (
    <Container>
      <h1>Welcome!</h1>
      <p>This is a reusable container component.</p>
    </Container>
  );
}`}
        </SyntaxHighlighter>
        <p>
          В этом примере Container отображает вложенные в него элементы через
          props.children.
        </p>
      </div>
      <div className="border">
        <h2>6. Props как неизменяемые данные</h2>
        <p>
          Пропсы являются неизменяемыми (immutable), их нельзя изменять
          напрямую.
        </p>
        <h3>Пример изменения props</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function Example(props) {
  props.name = "Ivan"; // Нельзя!
  return <p>{props.name}</p>;
}`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h2>7. Примеры использования Props в реальных приложениях</h2>
        <h3>Пример 1: Компонент карточки товара</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function ProductCard({ name, price, inStock }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Price: \${price}</p>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

<ProductCard name="Laptop" price={999.99} inStock={true} />;`}
        </SyntaxHighlighter>
        <h3>Пример 2: Список элементов</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`function ItemList({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

<ItemList items={["Item 1", "Item 2", "Item 3"]} />;`}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
