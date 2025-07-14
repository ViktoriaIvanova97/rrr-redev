import React from "react";

const List = ({ arrValue, setArrValue }) => {
  const changeElement = (id) => {
    setArrValue(
      arrValue.map((el, index) => {
        return index === id ? "!!!" + el : el;
      })
    );
  };
  return (
    <ul
      style={{
        listStyleType: "none",
        padding: 0,
        display: " grid",
        justifyItems: "center",
      }}
    >
      {arrValue.map((el, index) => (
        <li
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "200px",
          }}
        >
          {el}
          <button
            onClick={() => {
              changeElement(index);
            }}
          >
            Кнопка
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
