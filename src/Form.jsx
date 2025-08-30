import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";

export const Form = () => {
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
        <h2>Form (Формы в React)</h2>
      </div>
      <div className="border">
        <h3>Что это?</h3>
        <p>
          Формы — это способ получать данные от пользователя. В React они
          контролируемые: ввод хранится в state, а не напрямую в DOM.
        </p>
      </div>
      <div className="border">
        <h3>Пример контролируемого инпута</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // отменяем перезагрузку
    alert(\`Привет, \${name}!\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Введите имя" 
      />
      <button type="submit">Отправить</button>
    </form>
  );
}


`}
        </SyntaxHighlighter>
      </div>

      <div className="border">
        <h3>Несколько полей формы</h3>

        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import { useState } from "react";

function LoginForm() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="email" 
        type="email" 
        value={form.email} 
        onChange={handleChange} 
        placeholder="Email"
      />
      <input 
        name="password" 
        type="password" 
        value={form.password} 
        onChange={handleChange} 
        placeholder="Пароль"
      />
      <button type="submit">Войти</button>
    </form>
  );
}

`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <div className="bulavka">
          <img src="/lamp.png" alt="" />
          <h3>На что обратить внимание</h3>
        </div>
        <ul>
          <li>Используй value + onChange → контролируемый ввод.</li>
          <li>e.preventDefault() нужен, чтобы не перезагружалась страница.</li>
          <li>
            Для нескольких полей удобно хранить их в объекте и обновлять через
            [e.target.name].
          </li>
          <li>
            Если форма большая → лучше использовать библиотеку (Formik,
            react-hook-form).
          </li>
        </ul>
      </div>
    </div>
  );
};
