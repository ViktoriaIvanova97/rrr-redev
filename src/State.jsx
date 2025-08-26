import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
export const State = () => {
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
    }}>
      <div className="border">
        <h2>1. Что такое state?</h2>
        <p>
          State (состояние) в React — это место, где компонент хранит свои
          динамические данные. Это как записная книжка, которую компонент
          использует для хранения текущего состояния и его изменения.
        </p>
        <h3>Чем отличается state от props? </h3>
        <ul>
          <li>
            Props передаются компоненту "снаружи", от родителя и
            неизменные.{" "}
          </li>
          <li>State управляется "внутри" компонента и изменяется.</li>
        </ul>
        <p>
          Пример аналогии: Props — это текст в книге, который ты читаешь, а
          state — это твои личные заметки на полях.
        </p>
      </div>
      <div className="border">
        <h2>2. Создание и использование state</h2>
        <h3>Hook useState</h3>
        <p>
          В функциональных компонентах для работы с state используется хук
          useState.{" "}
        </p>
        <ul>
          Он возвращает массив из двух элементов:
          <li>state: текущее значение состояния</li>
          <li>setState: функцию для его обновления. </li>
        </ul>
        <p>
          а принимает initialState: начальное значение состояния. Может быть
          примитивным типом данных, объектом или функцией
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { useState } from 'react';

const [state, setState] = useState(initialState);`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Increase</button>
    </div>
  );
}`}
        </SyntaxHighlighter>
        <ul>
          В этом примере:
          <li>useState(0) устанавливает начальное значение счётчика.</li>
          <li>setCount обновляет значение.</li>
        </ul>
        <p>
          При вызове функции обновления, React перерисует компонент с новым
          значением состояния.
        </p>
      </div>

      <div className="border">
        <h2>3. Изменение state</h2>
        <p>State должен быть неизменяемым напрямую.</p>
        <p>
          Если ты попытаешься изменить его напрямую, React не поймёт, что нужно
          обновить интерфейс:
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`// Неправильно
state.count = 10;`}
        </SyntaxHighlighter>
        <p>
          Вместо этого используй setState, чтобы сообщить React об изменении:
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`setState(newValue);`}
        </SyntaxHighlighter>
        <h3>setState — асинхронный</h3>
        <p>
          Обновление state происходит асинхронно. Если нужно обновить состояние
          на основе его текущего значения, используй функцию:
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`setCount((prevCount) => prevCount + 1);`}
        </SyntaxHighlighter>
        <div style={{display:'flex',alignItems: 'center', gap:'10px'}}>
          <img src="/lamp.png" alt="" />
          <p>
            Этот подход гарантирует, что изменения будут выполнены корректно.
          </p>
        </div>
        <h3>Обрати внимание ещё раз — это важно!</h3>
        <p>Функция-setter (например setState) - асинхронная операция!</p>
        <div style={{display:'flex',alignItems: 'center', gap:'10px'}}>
          <img src="/lamp.png" alt="" />
          <p>
            Когда мы вызываем setState, React не обновляет состояние и не
            рендерит компонент немедленно. Вместо этого он помещает обновление в
            очередь. После этого React применяет все обновления состояния за
            один раз перед следующим рендером компонента.
          </p>
        </div>
        <h3>Пример асинхронного поведения</h3>
        <p>
          Рассмотрим пример, где мы попытаемся обновить состояние несколько раз
          подряд и посмотрим, как React объединяет эти обновления:
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default Counter;`}
        </SyntaxHighlighter>
        <p>
          В этом примере, когда нажимаем кнопку, handleIncrement вызывается, и
          мы трижды вызываем setCount(count + 1). Интуитивно может показаться,
          что count должен увеличиться на 3, но это не так. Все три вызова
          setCount объединяются в одно обновление, и в итоге count увеличится
          только на 1.
        </p>
        <p>
          Чтобы корректно обновить состояние на основе предыдущего значения,
          следует использовать функциональный сеттер:
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const handleIncrement = () => {
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
  setCount(prevCount => prevCount + 1);
};`}
        </SyntaxHighlighter>
        <p>
          В этом случае prevCount будет обновлено каждый раз, и состояние count
          увеличится на 3, как ожидается
        </p>
        <h3>Важность асинхронного поведения</h3>
        <ul>
          Асинхронное поведение сеттеров в React позволяет:
          <li>
            Объединять несколько обновлений состояния в одно, что уменьшает
            количество рендеров и улучшает производительность.
          </li>
          <li>
            !!!Гарантировать!!!, что компоненты рендерятся с наиболее актуальным
            состоянием.
          </li>
        </ul>
      </div>

      <div className="border">
        <h2>4. Работа с объектами и массивами в state</h2>
        <h3>Обновление объектов</h3>
        <p>
          Если state содержит объект, обновляй его с помощью оператора spread
          (...):
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const [user, setUser] = useState({ name: 'Pavel', age: 27 });

setUser((prevUser) => ({
  ...prevUser,
  age: 28,
}));`}
        </SyntaxHighlighter>
        <h3>Обновление массивов</h3>
        <p>
          Для обновления массивов тоже используй методы, создающие новый массив:
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const [items, setItems] = useState([1, 2, 3]);

setItems((prevItems) => [...prevItems, 4]); // Добавление элемента
setItems((prevItems) => prevItems.filter((item) => item !== 2)); // Удаление элемента`}
        </SyntaxHighlighter>
      </div>
      <div className="border">
        <h2>5. Состояние и перерисовка</h2>
        <h3>Как state влияет на перерисовку?</h3>
        <p>
          Когда state обновляется, React автоматически перерисовывает компонент.
          Это делает работу с интерфейсом более удобной, но может привести к
          лишним обновлениям, если state изменяется слишком часто.
        </p>
        <h3>Оптимизация обновлений</h3>
        <ul>
          <li>Храни минимально необходимое состояние.</li>
          <li>
            Используй мемоизацию (React.memo, useMemo, useCallback) для
            оптимизации.
          </li>
        </ul>
      </div>
      <div className="border">
        <h2>6. Примеры использования state</h2>
        <h3>Cчетчик</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};`}
        </SyntaxHighlighter>
        <p>
          Компонент будет отображать текущее значение счетчика, а при нажатии на
          кнопку счетчик будет увеличиваться.
        </p>
        <h3>
          Компонент будет отображать текущее значение счетчика, а при нажатии на
          кнопку счетчик будет увеличиваться.
        </h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { useState } from "react";

const Example = () => {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText((showText) => !showText);
  };

  return (
    <div>
      <button onClick={handleClick}>Показать/скрыть текст</button>
      {showText && <p>Этот текст может быть скрыт или показан</p>}
    </div>
  );
};`}
        </SyntaxHighlighter>
        <p>
          В этом примере по клику на кнопку вызывается функция handleClick,
          которая вызывается при клике на кнопку. Она вызывает функцию
          setShowText которая изменяет текущий state на противоположный, что и
          отвечает за “показать” или “скрыть” текст.
        </p>
        <h3>Управление input-ом</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { useState } from 'react';

const Example = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div>
      <label>
        Введи свое имя:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <p>Привет, {name}!</p>
    </div>
  );
}`}
        </SyntaxHighlighter>
        <p>
          В этом примере мы создали state с начальным значением пустой строки и
          присвоили его переменной name. В инпуте по событию onChange мы
          вызываем эту функцию, и меняет пустую строку, на те данные которые
          ввел пользователь. Да да, event.target.value это те данные, которые
          вводит пользователь. И затем мы обратно в input в атрибуте value
          присваиваем значение state.
        </p>
        <h3>Управление стилями</h3>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { useState } from 'react';

const Example = () => {
  const [color, setColor] = useState('red');

  const handleClick = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  }

  const style = {
    color: color
  };

  return (
    <div>
      <button onClick={handleClick}>Сменить цвет</button>
      <p style={style}>Этот текст может быть красным или синим</p>
    </div>
  );
}`}
        </SyntaxHighlighter>
        <p>
          В этом примере мы создали state с начальным значением 'red' и
          присвоили его переменной color. Мы также создали функцию handleClick,
          которая вызывается при клике на кнопку, и использует функцию setColor
          для изменения значения state. Мы используем объект style для установки
          цвета текста, который зависит от значения state.
        </p>
        <div style={{display:'flex',alignItems: 'center', gap:'10px'}}>
          <img src="/lamp.png" alt="" />
          <p>State можно передавать в дочерние компоненты при помощи props.</p>
        </div>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} />
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

const ChildComponent = ({ count }) => {
  return <p>Счетчик: {count}</p>;
};`}
        </SyntaxHighlighter>
        <p>
          В данном примере состояние счетчика хранится в родительском компоненте
          ParentComponent, а значение состояния передается в дочерний компонент
          ChildComponent через пропсы.
        </p>
        <h3>state с объектом</h3>
        <p>
          Давай рассмотрим пример использования объекта в качестве состояния. Мы
          создадим компонент, который управляет профилем пользователя с именем,
          возрастом и электронной почтой. Важно помнить, что при обновлении
          объекта в состоянии нужно **создавать новый объект вместо изменения
          существующего**, чтобы соблюсти принцип неизменяемости.
        </p>
        <SyntaxHighlighter language="javascript" style={okaidia}>
          {`import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // создаем новый объект с обновленным свойством
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Введите ваше имя"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Введите ваш возраст"
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Введите вашу почту"
      />
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;`}
        </SyntaxHighlighter>
        <ul>
          В этом примере:
          <li>
            Мы инициализируем стейт user как объект с тремя свойствами: name,
            age и email.
          </li>
          <li>
            Используем функцию handleChange, чтобы обновить состояние при
            изменении любого из полей ввода. Эта функция:
            <ol>1. Извлекает name и value из события.</ol>
            <ol>
             2. Создает новый объект состояния, копируя существующие свойства с
              помощью оператора spread (...prevUser) и обновляя измененное
              свойство.
            </ol>
          </li>
          <li>
            Каждый элемент ввода (input) имеет атрибут name, который
            соответствует ключу объекта состояния. Это позволяет использовать
            один обработчик для всех полей ввода.
          </li>
        </ul>
      </div>
    </div>
  );
};
