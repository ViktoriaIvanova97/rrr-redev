import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
export const Key = () => {
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
        <img src= {`${process.env.PUBLIC_URL}/molnia.png`} alt="" />
        <h2>Key в React</h2>
      </div>
      <div className="border">
        <ul>
          Зачем нужен:
          <li>Помогает React отличать элементы списка при ререндере.</li>
          <li>
            Без key или с плохим key React может «путать» элементы: не то
            перерисовывать, сбрасывать состояние.
          </li>
        </ul>
        <h3>Пример правильный:</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const users = [
  { id: 1, name: "Anna" },
  { id: 2, name: "Oleg" },
  { id: 3, name: "Masha" },
];

<ul>
  {users.map(user => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>`}
        </SyntaxHighlighter>
        <h3>Плохой пример (key = index):</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`<ul>
  {users.map((user, index) => (
    <li key={index}>{user.name}</li>
  ))}
</ul>`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src={`${process.env.PUBLIC_URL}/lamp.png`}alt="" />
          <p>
            Если удалить второго пользователя, React подставит старые данные на
            новые места, и, например, input внутри li собьётся.
          </p>
        </div>
        <h3>Когда можно index:</h3>
        <ul>
          <li>Если список маленький, статичный и никогда не меняется.</li>
        </ul>
        <h3>Важно:</h3>
        <ul>
          <li>key не передаётся в props.</li>
          <li>
            Должен быть уникальным и стабильным (лучше ID из базы или
            генерируемый UUID).
          </li>
        </ul>
      </div>
    </div>
  );
};
