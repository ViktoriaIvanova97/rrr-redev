import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Async = () => {
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
        <h2>Async / Await в JS</h2>
      </div>
      <div className="border">
        <h3>Зачем нужны:</h3>
        <ul>
          <li>Чтобы писать асинхронный код так, как будто он синхронный.</li>
          <li>Упрощает работу с промисами (.then, .catch).</li>
        </ul>
      </div>
      <div className="border">
        <h3>Базовый пример</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`async function fetchData() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await res.json();
    console.log(data);
  } catch (err) {
    console.error("Ошибка:", err);
  }
}

fetchData();

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h3>Возвращает всегда Promise</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`async function getNumber() {
  return 5; // на самом деле Promise.resolve(5)
}

getNumber().then(num => console.log(num)); // 5
`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h3>Несколько await подряд</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`async function example() {
  let user = await fetchUser();
  let posts = await fetchPosts(user.id);
  console.log(posts);
}

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h3>Параллельные запросы (быстрее)</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`async function load() {
  let [users, posts] = await Promise.all([
    fetch("/users"),
    fetch("/posts")
  ]);
}

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src="lamp.png" alt="" />
          <h3>Важно помнить:</h3>
        </div>
        <ul>
          <li>await можно использовать только внутри async.</li>
          <li>Ошибки ловим через try...catch.</li>
          <li>
            Для независимых задач → лучше Promise.all, а не несколько await
            подряд.
          </li>
        </ul>
      </div>
    </div>
  );
};
